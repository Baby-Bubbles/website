// Single source of truth for the site's text. The React components render it,
// and scripts/prerender.js turns it into static HTML, JSON-LD, llms.txt,
// llms-full.txt and sitemap.xml at build time. Edit content here only.

export const SITE_URL = 'https://babybubblesfisio.com'

export const business = {
  name: 'Baby Bubbles Fisio',
  legalNote: 'Baby Bubbles Fisio por Fran Buriti',
  cnpj: '36.266.703/0001-03',
  tagline: 'Fisioterapia neonatal e pediátrica em São Paulo',
  summary:
    'Fisioterapeuta especialista em Pediatria, com atendimentos domiciliares, em consultório e online, em São Paulo.',
  summaryEn:
    'Baby Bubbles Fisio is the neonatal and pediatric physiotherapy practice of Francielly (Fran) Buriti in São Paulo, Brazil. It offers infant motor development assessments, treatment for developmental delay, plagiocephaly (cranial asymmetry) and congenital torticollis, pediatric respiratory physiotherapy (including children with tracheostomy and BiPAP users), parent mentoring, home care team training and a career mentorship for pediatric physiotherapists. Sessions are at home, at partner clinics in São Paulo, or online.',
  city: 'São Paulo',
  region: 'SP',
  country: 'BR',
  logo: '/images/logos/Baby Bubbles_Assinatura Horizontal.png',
  image: '/images/about/profile-desktop.jpg',
}

export const contact = {
  whatsapp: 'https://wa.me/+5511942403507',
  phone: '+55 11 94240-3507',
  phoneE164: '+5511942403507',
  email: 'contato@babybubblesfisio.com',
  instagram: 'https://www.instagram.com/babybubblesfisio/',
  responseTime: 'Responderemos em até 24 horas',
}

export const hero = {
  title: 'Cuidado especializado para o desenvolvimento do seu pequeno',
  subtitle: business.summary,
}

export const about = {
  name: 'Francielly Buriti',
  shortName: 'Fran Buriti',
  role: 'Fisioterapeuta Neonatal e Pediátrica',
  paragraphs: [
    'Sou fisioterapeuta graduada pela PUC-Campinas, com especialização em Fisioterapia Pediátrica e Reabilitação Aplicada à Neurologia Infantil pela Universidade Estadual de Campinas (Unicamp). Atualmente, atuo como supervisora de fisioterapia no Hospital Infantil Sabará, além de atender na clínica FisioKids e em outros consultórios parceiros. Também possuo experiência em instituições de referência como a Maternidade Santa Joana e o Hospital Santa Catarina.',
    'Minha missão é oferecer cuidados especializados e humanizados, promovendo o desenvolvimento saudável de bebês e crianças, sempre em parceria com as famílias para alcançar os melhores resultados.',
  ],
  alumniOf: [
    'Pontifícia Universidade Católica de Campinas (PUC-Campinas)',
    'Universidade Estadual de Campinas (Unicamp)',
  ],
  worksFor: 'Hospital Infantil Sabará',
}

export const servicesIntro = {
  title: 'Nossos Serviços',
  subtitle: 'Atendimento especializado em fisioterapia neonatal e pediátrica com profissional qualificada',
}

export const services = [
  {
    id: 1,
    slug: 'avaliacao-bebes',
    title: 'Avaliação para bebês',
    shortDescription: 'Análise completa dos padrões de movimento do bebê para classificar o desenvolvimento motor e criar plano de tratamento personalizado.',
    fullDescription: 'Análise dos padrões de movimento do bebê em diversas posturas para classificar o desenvolvimento motor como normal, em risco de atraso ou com atraso. Identifica desequilíbrios musculares. Aplicada também para bebês com assimetria craniana e torcicolo congênito, usando escalas e medições específicas. Cria plano de tratamento personalizado com estímulos adequados, brincadeiras e posições que promovem habilidades e movimentos.',
    benefit: 'Garante o desenvolvimento saudável do bebê',
    duration: '40-60 minutos',
    locations: ['Domiciliar', 'Consultório'],
    imageUrl: '/images/services/01-avaliacao-bebes.png',
  },
  {
    id: 2,
    slug: 'atraso-desenvolvimento',
    title: 'Atendimento para bebês com atraso no desenvolvimento',
    shortDescription: 'Tratamento especializado para bebês e crianças com atraso motor através de exercícios e atividades lúdicas.',
    fullDescription: 'Tratamento para bebês e crianças com atraso no desenvolvimento motor que pode impactar habilidades essenciais como rolar, sentar, engatinhar e andar. Atendimentos estimulam através de exercícios e atividades lúdicas que promovem desenvolvimento, fortalecimento muscular, coordenação motora e equilíbrio.',
    benefit: 'Acompanhamento contínuo com estratégias específicas para alcançar marcos do desenvolvimento',
    duration: '40-60 minutos',
    locations: ['Domiciliar', 'Consultório'],
    imageUrl: '/images/services/02-atraso-desenvolvimento.png',
  },
  {
    id: 3,
    slug: 'assimetria-craniana-torcicolo',
    title: 'Assimetria Craniana e Torcicolo Congênito',
    shortDescription: 'Tratamento para achatamento craniano e inclinação da cabeça através de técnicas especializadas e exercícios de posicionamento.',
    fullDescription: 'Tratamento integrado para achatamento ou deformidade no crânio e torcicolo congênito (inclinação da cabeça para um lado). Essas condições frequentemente estão relacionadas, sendo causadas pela posição do bebê no útero ou durante o parto. Utilizamos técnicas especializadas para promover alinhamento adequado da cabeça, melhorar a simetria craniana e restaurar a amplitude de movimento do pescoço. O plano de tratamento personalizado inclui exercícios de posicionamento, alongamentos suaves e estímulos que promovem o desenvolvimento motor adequado.',
    benefit: 'Tratamento precoce previne complicações futuras, garante desenvolvimento saudável e a maioria dos bebês apresenta recuperação completa',
    duration: '40-60 minutos',
    locations: ['Domiciliar', 'Consultório'],
    imageUrl: '/images/services/03-assimetria-craniana.png',
  },
  {
    id: 4,
    slug: 'fisioterapia-respiratoria',
    title: 'Fisioterapia Respiratória',
    shortDescription: 'Essencial para bebês com problemas respiratórios. Técnicas seguras para melhorar função pulmonar e facilitar eliminação de secreções.',
    fullDescription: 'Essencial para bebês com problemas respiratórios como bronquiolite, asma e pneumonias. Não necessita prescrição médica. Indicado para gripe, quadro viral, congestão nasal, dificuldade para dormir, dificuldade para se alimentar, tosse ou chiado no peito. Utiliza técnicas seguras e aparelhos específicos para melhorar função pulmonar, facilitar eliminação de secreções e tratar atelectasias e doenças crônicas.',
    benefit: 'Alívio imediato de sintomas respiratórios',
    duration: '40-60 minutos',
    locations: ['Domiciliar', 'Consultório'],
    imageUrl: '/images/services/04-fisioterapia-respiratoria.png',
  },
  {
    id: 5,
    slug: 'fisioterapia-respiratoria-traqueostomia',
    title: 'Fisioterapia Respiratória para crianças traqueostomizadas',
    shortDescription: 'Atendimento focado em melhorar função pulmonar com técnicas de limpeza das vias aéreas e manuseio adequado da traqueostomia.',
    fullDescription: 'Atendimento essencial focado em melhorar função pulmonar e qualidade de vida. Sessões incluem técnicas de limpeza das vias aéreas, exercícios respiratórios e manuseio adequado da traqueostomia.',
    benefit: 'Redução do risco de infecções, melhor oxigenação, maior capacidade respiratória, facilitação da remoção de secreções',
    duration: '40-60 minutos',
    locations: ['Domiciliar', 'Consultório'],
    imageUrl: '/images/services/05-traqueostomia.png',
  },
  {
    id: 6,
    slug: 'bipap',
    title: 'Atendimento com BIPAP',
    shortDescription: 'Tratamento eficaz para atelectasia e suporte respiratório para doenças crônicas com pressões positivas.',
    fullDescription: 'Eficaz no tratamento de atelectasia em pacientes pediátricos, ajudando a reabrir alvéolos colapsados com pressões positivas na inspiração (IPAP) e expiração (EPAP). Mantém vias aéreas abertas, melhora ventilação e troca de gases, facilita remoção de secreções. Para crianças com doenças respiratórias crônicas (como fibrose cística), oferece suporte respiratório contínuo.',
    benefit: 'Promove reexpansão pulmonar, reduz esforço respiratório, melhora oxigenação e previne complicações',
    duration: '40-60 minutos',
    locations: ['Domiciliar', 'Consultório'],
    imageUrl: '/images/services/06-bipap.png',
  },
  {
    id: 7,
    slug: 'mentoria-pais-escolas',
    title: 'Mentorias para os pais nas escolas e creches',
    shortDescription: 'Capacitação para pais reconhecerem sinais de alarme respiratório e técnicas para aliviar sintomas em casa.',
    fullDescription: 'Ensina pais a reconhecer sinais de alarme de desconforto respiratório (dificuldade para respirar, respiração rápida, chiado no peito). Explica como diferenciar sintomas normais de gripe de sinais de problemas mais sérios. Mostra técnicas para aliviar sintomas em casa: exercícios respiratórios, técnicas de lavagem nasal, medidas para melhorar qualidade do ar.',
    benefit: 'Capacita os pais a cuidar melhor da saúde respiratória dos filhos e procurar ajuda adequada rapidamente',
    duration: 'A combinar',
    locations: ['A combinar'],
    imageUrl: '/images/services/07-mentorias-pais.png',
  },
  {
    id: 8,
    slug: 'treinamento-home-care',
    title: 'Treinamento para equipes de Home Care',
    shortDescription: 'Treinamento especializado cobrindo procedimentos de cuidado respiratório e manuseio de equipamentos.',
    fullDescription: 'Treinamento especializado para equipes de home care, cobrindo principais procedimentos de cuidado respiratório. Ensina passo a passo: aspiração nasotraqueal, utilização de ressuscitadores, manuseio de BiPAPs, posicionamento correto da criança no leito, higiene e cuidados específicos com traqueostomia. Plano de treinamento específico para cada família de acordo com necessidades individuais.',
    benefit: 'Garante que profissionais estejam preparados para oferecer cuidados de alta qualidade e segurança',
    duration: 'A combinar',
    locations: ['Domiciliar'],
    imageUrl: '/images/services/08-home-care.png',
  },
  {
    id: 9,
    slug: 'mentoria-quero-ser-fisio-ped',
    title: 'Mentoria Quero Ser Fisio Ped',
    shortDescription: 'Programa oficial da FisioKids, braço de fisioterapia do Hospital Infantil Sabará, para fisioterapeutas que desejam iniciar ou aprimorar sua carreira em fisioterapia pediátrica.',
    fullDescription: 'Programa completo de mentoria com 13 temas teóricos escolhidos com base nas maiores dificuldades e dúvidas dos nossos alunos, para entregar maior conhecimento e expertise para iniciar sua carreira na fisioterapia pediátrica.\n\nTemas abordados:\n1. Saindo da Faculdade: Primeiros Passos\n2. Importância de estágios e voluntariado em hospitais pediátricos\n3. Escolhendo a Pós-Graduação Ideal\n4. Ingressando em um Hospital de Referência\n5. Como se destacar em processos seletivos\n6. Networking e construção de relacionamentos profissionais\n7. Desenvolvimento de Competências\n8. Comunicação com crianças e pais\n9. Abordagens terapêuticas e intervenções eficazes\n10. Tendências e Inovações na Fisioterapia Pediátrica\n11. Novas tecnologias e metodologias\n12. O futuro da fisioterapia pediátrica\n13. Hospital, consultório ou domiciliar?\n\nCom 15 anos de experiência na gestão e treinamento da Equipe de Fisioterapia do Hospital Infantil Sabará e do Espaço Fisiokids em SP, treinando mais de 300 profissionais por ano. Além disso, você pode escolher realizar a nossa visita observacional ao Espaço Fisiokids e Hospital.',
    benefit: 'Inicie ou acelere sua carreira em fisioterapia pediátrica com orientação especializada, baseada em 15 anos de experiência prática em hospitais de referência',
    duration: 'A combinar',
    locations: ['Online', 'Presencial'],
    imageUrl: '/images/services/09-mentoria-fisio-ped.png',
  },
]

export const locationsIntro = {
  title: 'Onde Atendemos',
  description:
    'Atendemos em consultórios parceiros nas principais regiões de São Paulo e também oferecemos atendimento domiciliar com toda a estrutura necessária.',
}

export const locations = [
  { name: 'FisioKids', address: 'Rua Pará, 76, cj. 24', neighborhood: 'Consolação', city: 'Consolação - SP' },
  { name: 'UpKids', address: 'Rua Borges Lagoa, 971, cj. 51-52', neighborhood: 'Vila Clementino', city: 'Vila Clementino - SP' },
  { name: 'Clínica Berçar', address: 'Rua Afonso de Freitas, 559, cj. 82', neighborhood: 'Paraíso', city: 'Paraíso - SP' },
  { name: 'Clínica Nascere', address: 'Rua Helena, 140, cj 112', neighborhood: 'Vila Olímpia', city: 'Vila Olímpia - SP' },
  { name: 'Atendimento Domiciliar', address: 'Consultar regiões disponíveis', city: '', isHomeCare: true },
]

export const hours = {
  label: 'Segunda a Sexta 14h-19h • Sábados e Domingos 7h-19h',
  spec: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '14:00', closes: '19:00' },
    { days: ['Saturday', 'Sunday'], opens: '07:00', closes: '19:00' },
  ],
}

export const cta = {
  title: 'Agende um Atendimento',
  description:
    'Oferecemos atendimento personalizado em fisioterapia neonatal e pediátrica, tanto em consultório quanto no conforto da sua casa. Entre em contato e descubra como podemos ajudar no desenvolvimento saudável do seu bebê.',
}
