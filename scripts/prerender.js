// Runs after `vite build` and `vite build --ssr`. Makes the site readable by
// crawlers and AI agents that do not execute JavaScript:
//   - dist/index.html gets the prerendered page, meta tags and JSON-LD
//   - dist/llms.txt and dist/llms-full.txt describe the site in Markdown
//   - dist/sitemap.xml and dist/robots.txt
// All text comes from src/content/site.js.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import {
  SITE_URL,
  business,
  contact,
  hero,
  about,
  services,
  servicesIntro,
  locations,
  locationsIntro,
  hours,
  cta,
} from '../src/content/site.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const serverDir = path.join(root, 'dist-server')

const abs = (p) => SITE_URL + encodeURI(p)
const escapeHtml = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

const title = `${business.name} | Fisioterapia Neonatal e Pediátrica em São Paulo | ${about.shortName}`
const description = `${about.name} (${about.shortName}), fisioterapeuta neonatal e pediátrica em São Paulo. Avaliação do desenvolvimento motor, assimetria craniana e torcicolo congênito, fisioterapia respiratória infantil. Atendimento domiciliar, em consultório e online.`

function headTags() {
  const tags = [
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="author" content="${escapeHtml(about.name)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large" />`,
    `<link rel="canonical" href="${SITE_URL}/" />`,
    `<link rel="alternate" type="text/markdown" href="${SITE_URL}/llms.txt" title="Resumo para LLMs" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="${escapeHtml(business.name)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${SITE_URL}/" />`,
    `<meta property="og:image" content="${abs(business.image)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${abs(business.image)}" />`,
    `<script type="application/ld+json">${JSON.stringify(jsonLd()).replace(/</g, '\\u003c')}</script>`,
  ]
  return tags.join('\n    ')
}

function postalAddress(location) {
  return {
    '@type': 'PostalAddress',
    streetAddress: location.address,
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: business.country,
  }
}

function jsonLd() {
  const orgId = `${SITE_URL}/#organization`
  const personId = `${SITE_URL}/#francielly-buriti`
  const clinics = locations.filter((l) => !l.isHomeCare)

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: business.name,
        inLanguage: 'pt-BR',
        publisher: { '@id': orgId },
      },
      {
        '@type': ['Physiotherapy', 'MedicalBusiness'],
        '@id': orgId,
        name: business.name,
        alternateName: ['Baby Bubbles', `${business.name} por ${about.shortName}`],
        description: business.summary,
        url: `${SITE_URL}/`,
        logo: abs(business.logo),
        image: abs(business.image),
        telephone: contact.phoneE164,
        email: contact.email,
        taxID: business.cnpj,
        sameAs: [contact.instagram],
        medicalSpecialty: 'Pediatric',
        founder: { '@id': personId },
        employee: { '@id': personId },
        areaServed: { '@type': 'City', name: business.city },
        address: {
          '@type': 'PostalAddress',
          addressLocality: business.city,
          addressRegion: business.region,
          addressCountry: business.country,
        },
        location: clinics.map((l) => ({
          '@type': 'Place',
          name: l.name,
          address: postalAddress(l),
        })),
        openingHoursSpecification: hours.spec.map((h) => ({
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: h.days,
          opens: h.opens,
          closes: h.closes,
        })),
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'agendamento',
          telephone: contact.phoneE164,
          email: contact.email,
          url: contact.whatsapp,
          availableLanguage: ['pt-BR'],
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: servicesIntro.title,
          itemListElement: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': `${SITE_URL}/#${s.slug}`,
              name: s.title,
              description: s.fullDescription.replace(/\s*\n+\s*/g, ' '),
              url: `${SITE_URL}/#${s.slug}`,
              image: abs(s.imageUrl),
              provider: { '@id': orgId },
              areaServed: { '@type': 'City', name: business.city },
            },
          })),
        },
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: about.name,
        alternateName: about.shortName,
        jobTitle: about.role,
        description: about.paragraphs.join(' '),
        image: abs(business.image),
        url: `${SITE_URL}/#sobre`,
        worksFor: [{ '@id': orgId }, { '@type': 'Hospital', name: about.worksFor }],
        alumniOf: about.alumniOf.map((name) => ({ '@type': 'CollegeOrUniversity', name })),
        knowsAbout: [
          'Fisioterapia pediátrica',
          'Fisioterapia neonatal',
          'Desenvolvimento motor infantil',
          'Assimetria craniana (plagiocefalia)',
          'Torcicolo congênito',
          'Fisioterapia respiratória pediátrica',
          'Traqueostomia pediátrica',
          'Ventilação não invasiva (BiPAP)',
        ],
        sameAs: [contact.instagram],
      },
    ],
  }
}

function locationLines() {
  return locations.map((l) =>
    l.isHomeCare
      ? `- **${l.name}**: ${l.address}`
      : `- **${l.name}**: ${l.address}, ${l.neighborhood}, São Paulo - SP`,
  )
}

function llmsTxt() {
  return `# ${business.name}

> ${business.summaryEn}

Site em português (pt-BR). Fisioterapeuta responsável: ${about.name} (${about.shortName}), ${about.role.toLowerCase()}, supervisora de fisioterapia no ${about.worksFor}. ${business.summary}

## Conteúdo completo

- [Texto completo do site](${SITE_URL}/llms-full.txt): todos os serviços com descrição completa, biografia, endereços, horários e contato, em Markdown
- [Página inicial](${SITE_URL}/)

## Serviços

${services.map((s) => `- [${s.title}](${SITE_URL}/#${s.slug}): ${s.shortDescription}`).join('\n')}

## Onde atende

${locationLines().join('\n')}

Horários: ${hours.label}

## Contato e agendamento

- [WhatsApp ${contact.phone}](${contact.whatsapp}): agendamento de atendimentos
- [E-mail](mailto:${contact.email}): ${contact.email}
- [Instagram @babybubblesfisio](${contact.instagram})
`
}

function llmsFullTxt() {
  const serviceSections = services
    .map(
      (s) => `### ${s.title}

URL: ${SITE_URL}/#${s.slug}
Duração: ${s.duration}
Local: ${s.locations.join(', ')}

${s.fullDescription}

**Benefícios:** ${s.benefit}`,
    )
    .join('\n\n')

  return `# ${business.name}

> ${business.summaryEn}

Site: ${SITE_URL}/
Idioma do site: português (pt-BR)
Responsável: ${about.name} (${about.shortName}), ${about.role}
CNPJ: ${business.cnpj}

## ${hero.title}

${hero.subtitle}

## Sobre ${about.name}

${about.paragraphs.join('\n\n')}

- Formação: ${about.alumniOf.join('; ')}
- Atuação atual: supervisora de fisioterapia no ${about.worksFor}

## ${servicesIntro.title}

${servicesIntro.subtitle}.

${serviceSections}

## ${locationsIntro.title}

${locationsIntro.description}

${locationLines().join('\n')}

**Horários:** ${hours.label}

## ${cta.title}

${cta.description}

- WhatsApp: ${contact.phone} (${contact.whatsapp})
- E-mail: ${contact.email}
- Instagram: ${contact.instagram}
- ${contact.responseTime}
`
}

function sitemapXml() {
  const today = new Date().toISOString().slice(0, 10)
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
  </url>
</urlset>
`
}

function robotsTxt() {
  // Named AI crawlers are allowed explicitly so the intent is clear to anyone
  // reading this file; the wildcard rule already allows them.
  const aiBots = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
  ]
  return `User-agent: *
Allow: /

${aiBots.map((b) => `User-agent: ${b}`).join('\n')}
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml
`
}

const { render } = await import(pathToFileURL(path.join(serverDir, 'entry-server.js')).href)

const templatePath = path.join(distDir, 'index.html')
const template = fs.readFileSync(templatePath, 'utf8')
if (!template.includes('<div id="root"></div>') || !template.includes('<!--app-head-->')) {
  throw new Error('dist/index.html is missing the <div id="root"></div> or <!--app-head--> placeholder')
}

const html = template
  .replace('<!--app-head-->', headTags())
  .replace(/<title>.*?<\/title>/, `<title>${escapeHtml(title)}</title>`)
  .replace('<div id="root"></div>', `<div id="root">${render('/')}</div>`)

fs.writeFileSync(templatePath, html)
fs.writeFileSync(path.join(distDir, 'llms.txt'), llmsTxt())
fs.writeFileSync(path.join(distDir, 'llms-full.txt'), llmsFullTxt())
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml())
fs.writeFileSync(path.join(distDir, 'robots.txt'), robotsTxt())
fs.rmSync(serverDir, { recursive: true, force: true })

console.log('Prerendered dist/index.html and wrote llms.txt, llms-full.txt, sitemap.xml, robots.txt')
