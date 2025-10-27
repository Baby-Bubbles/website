import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

const services = [
  {
    id: 1,
    title: 'Avaliação para bebês',
    shortDescription: 'Análise completa dos padrões de movimento do bebê para classificar o desenvolvimento motor e criar plano de tratamento personalizado.',
    fullDescription: 'Análise dos padrões de movimento do bebê em diversas posturas para classificar o desenvolvimento motor como normal, em risco de atraso ou com atraso. Identifica desequilíbrios musculares. Aplicada também para bebês com assimetria craniana e torcicolo congênito, usando escalas e medições específicas. Cria plano de tratamento personalizado com estímulos adequados, brincadeiras e posições que promovem habilidades e movimentos.',
    benefit: 'Garante o desenvolvimento saudável do bebê',
    duration: '40-60 minutos',
    locations: ['Domiciliar', 'Consultório'],
    imageUrl: '/Services/Avaliacao do Bebe2.jpg',
  },
  {
    id: 2,
    title: 'Atendimento para bebês com atraso no desenvolvimento',
    shortDescription: 'Tratamento especializado para bebês e crianças com atraso motor através de exercícios e atividades lúdicas.',
    fullDescription: 'Tratamento para bebês e crianças com atraso no desenvolvimento motor que pode impactar habilidades essenciais como rolar, sentar, engatinhar e andar. Atendimentos estimulam através de exercícios e atividades lúdicas que promovem desenvolvimento, fortalecimento muscular, coordenação motora e equilíbrio.',
    benefit: 'Acompanhamento contínuo com estratégias específicas para alcançar marcos do desenvolvimento',
    duration: '40-60 minutos',
    locations: ['Domiciliar', 'Consultório'],
    imageUrl: '/Services/Atraso de Desenvolvimento.jpg',
  },
  {
    id: 3,
    title: 'Assimetria Craniana e Torcicolo Congênito',
    shortDescription: 'Tratamento para achatamento craniano e inclinação da cabeça através de técnicas especializadas e exercícios de posicionamento.',
    fullDescription: 'Tratamento integrado para achatamento ou deformidade no crânio e torcicolo congênito (inclinação da cabeça para um lado). Essas condições frequentemente estão relacionadas, sendo causadas pela posição do bebê no útero ou durante o parto. Utilizamos técnicas especializadas para promover alinhamento adequado da cabeça, melhorar a simetria craniana e restaurar a amplitude de movimento do pescoço. O plano de tratamento personalizado inclui exercícios de posicionamento, alongamentos suaves e estímulos que promovem o desenvolvimento motor adequado.',
    benefit: 'Tratamento precoce previne complicações futuras, garante desenvolvimento saudável e a maioria dos bebês apresenta recuperação completa',
    duration: '40-60 minutos',
    locations: ['Domiciliar', 'Consultório'],
    imageUrl: '/Services/Asssimetria Craniana e Torcicolo Cong4.png',
  },
  {
    id: 4,
    title: 'Fisioterapia Respiratória',
    shortDescription: 'Essencial para bebês com problemas respiratórios. Técnicas seguras para melhorar função pulmonar e facilitar eliminação de secreções.',
    fullDescription: 'Essencial para bebês com problemas respiratórios como bronquiolite, asma e pneumonias. Não necessita prescrição médica. Indicado para gripe, quadro viral, congestão nasal, dificuldade para dormir, dificuldade para se alimentar, tosse ou chiado no peito. Utiliza técnicas seguras e aparelhos específicos para melhorar função pulmonar, facilitar eliminação de secreções e tratar atelectasias e doenças crônicas.',
    benefit: 'Alívio imediato de sintomas respiratórios',
    duration: '40-60 minutos',
    locations: ['Domiciliar', 'Consultório'],
    imageUrl: '/Services/Fisioterapia Respiratoria.jpg',
  },
  {
    id: 5,
    title: 'Fisioterapia Respiratória para crianças traqueostomizadas',
    shortDescription: 'Atendimento focado em melhorar função pulmonar com técnicas de limpeza das vias aéreas e manuseio adequado da traqueostomia.',
    fullDescription: 'Atendimento essencial focado em melhorar função pulmonar e qualidade de vida. Sessões incluem técnicas de limpeza das vias aéreas, exercícios respiratórios e manuseio adequado da traqueostomia.',
    benefit: 'Redução do risco de infecções, melhor oxigenação, maior capacidade respiratória, facilitação da remoção de secreções',
    duration: '40-60 minutos',
    locations: ['Domiciliar', 'Consultório'],
    imageUrl: '/Services/giu-vicente-Ng2n54lAKcs-unsplash.jpg',
  },
  {
    id: 6,
    title: 'Atendimento com BIPAP',
    shortDescription: 'Tratamento eficaz para atelectasia e suporte respiratório para doenças crônicas com pressões positivas.',
    fullDescription: 'Eficaz no tratamento de atelectasia em pacientes pediátricos, ajudando a reabrir alvéolos colapsados com pressões positivas na inspiração (IPAP) e expiração (EPAP). Mantém vias aéreas abertas, melhora ventilação e troca de gases, facilita remoção de secreções. Para crianças com doenças respiratórias crônicas (como fibrose cística), oferece suporte respiratório contínuo.',
    benefit: 'Promove reexpansão pulmonar, reduz esforço respiratório, melhora oxigenação e previne complicações',
    duration: '40-60 minutos',
    locations: ['Domiciliar', 'Consultório'],
    imageUrl: '/Services/BIPAP Tratamento.jpg',
  },
  {
    id: 7,
    title: 'Mentorias para os pais nas escolas e creches',
    shortDescription: 'Capacitação para pais reconhecerem sinais de alarme respiratório e técnicas para aliviar sintomas em casa.',
    fullDescription: 'Ensina pais a reconhecer sinais de alarme de desconforto respiratório (dificuldade para respirar, respiração rápida, chiado no peito). Explica como diferenciar sintomas normais de gripe de sinais de problemas mais sérios. Mostra técnicas para aliviar sintomas em casa: exercícios respiratórios, técnicas de lavagem nasal, medidas para melhorar qualidade do ar.',
    benefit: 'Capacita os pais a cuidar melhor da saúde respiratória dos filhos e procurar ajuda adequada rapidamente',
    duration: 'A combinar',
    locations: ['A combinar'],
    imageUrl: '/Services/Treinamento para escolas e creches.jpg',
  },
  {
    id: 8,
    title: 'Treinamento para equipes de Home Care',
    shortDescription: 'Treinamento especializado cobrindo procedimentos de cuidado respiratório e manuseio de equipamentos.',
    fullDescription: 'Treinamento especializado para equipes de home care, cobrindo principais procedimentos de cuidado respiratório. Ensina passo a passo: aspiração nasotraqueal, utilização de ressuscitadores, manuseio de BiPAPs, posicionamento correto da criança no leito, higiene e cuidados específicos com traqueostomia. Plano de treinamento específico para cada família de acordo com necessidades individuais.',
    benefit: 'Garante que profissionais estejam preparados para oferecer cuidados de alta qualidade e segurança',
    duration: 'A combinar',
    locations: ['Domiciliar'],
    imageUrl: '/Services/Home Care.jpg',
  },
  {
    id: 9,
    title: 'Mentoria Quero Ser Fisio Ped',
    shortDescription: 'Programa oficial da FisioKids, braço de fisioterapia do Hospital Infantil Sabará, para fisioterapeutas que desejam iniciar ou aprimorar sua carreira em fisioterapia pediátrica.',
    fullDescription: 'Programa completo de mentoria com 13 temas teóricos escolhidos com base nas maiores dificuldades e dúvidas dos nossos alunos, para entregar maior conhecimento e expertise para iniciar sua carreira na fisioterapia pediátrica.\n\nTemas abordados:\n1. Saindo da Faculdade: Primeiros Passos\n2. Importância de estágios e voluntariado em hospitais pediátricos\n3. Escolhendo a Pós-Graduação Ideal\n4. Ingressando em um Hospital de Referência\n5. Como se destacar em processos seletivos\n6. Networking e construção de relacionamentos profissionais\n7. Desenvolvimento de Competências\n8. Comunicação com crianças e pais\n9. Abordagens terapêuticas e intervenções eficazes\n10. Tendências e Inovações na Fisioterapia Pediátrica\n11. Novas tecnologias e metodologias\n12. O futuro da fisioterapia pediátrica\n13. Hospital, consultório ou domiciliar?\n\nCom 15 anos de experiência na gestão e treinamento da Equipe de Fisioterapia do Hospital Infantil Sabará e do Espaço Fisiokids em SP, treinando mais de 300 profissionais por ano. Além disso, você pode escolher realizar a nossa visita observacional ao Espaço Fisiokids e Hospital.',
    benefit: 'Inicie ou acelere sua carreira em fisioterapia pediátrica com orientação especializada, baseada em 15 anos de experiência prática em hospitais de referência',
    duration: 'A combinar',
    locations: ['Online', 'Presencial'],
    imageUrl: '/Services/Quero ser fisio Ped3.png',
  },
]

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-24 sm:pt-32 pb-12 sm:pb-16" id="servicos">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl" style={{ color: '#582e89' }}>
            Nossos Serviços
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Atendimento especializado em fisioterapia neonatal e pediátrica com profissional qualificada
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              className="flex flex-col items-start justify-between bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Service Image */}
              <div className="relative w-full">
                <img
                  alt={service.title}
                  src={service.imageUrl}
                  className="aspect-video w-full object-cover sm:aspect-2/1 lg:aspect-3/2"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Service Content */}
              <div className="flex max-w-xl grow flex-col justify-between p-6">
                {/* Meta Information */}
                <div className="flex items-center gap-x-3 text-xs flex-wrap">
                  <div className="flex items-center gap-x-1 text-gray-500">
                    <ClockIcon className="h-4 w-4" />
                    <span>{service.duration}</span>
                  </div>
                  {service.locations.map((location) => {
                    // Determine badge color based on location
                    let badgeClasses = ''
                    if (location === 'Domiciliar') {
                      badgeClasses = 'bg-cyan-50 text-cyan-700 inset-ring inset-ring-cyan-700/10'
                    } else if (location === 'Consultório') {
                      badgeClasses = 'bg-purple-50 text-purple-700 inset-ring inset-ring-purple-700/10'
                    } else if (location === 'Online') {
                      badgeClasses = 'bg-blue-50 text-blue-700 inset-ring inset-ring-blue-700/10'
                    } else if (location === 'Presencial') {
                      badgeClasses = 'bg-green-50 text-green-700 inset-ring inset-ring-green-600/20'
                    } else {
                      badgeClasses = 'bg-gray-50 text-gray-600 inset-ring inset-ring-gray-500/10'
                    }

                    return (
                      <span
                        key={location}
                        className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${badgeClasses}`}
                      >
                        {location}
                      </span>
                    )
                  })}
                </div>

                {/* Service Title and Description */}
                <div className="group relative grow mt-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm/6 text-gray-600 line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => setSelectedService(service)}
                  className="mt-6 w-full text-center text-sm/6 font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                >
                  Saiba Mais <span aria-hidden="true">→</span>
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mx-auto mt-16 text-center">
          <a
            href="https://wa.me/+5511942403507"
            target="_blank"
            rel="noopener noreferrer"
            style={{ backgroundImage: 'linear-gradient(to right, #6df2f2, #c53bff)' }}
            className="inline-block rounded-md px-6 py-3 text-base font-semibold text-white shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Agendar Atendimento via WhatsApp
          </a>
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog
        open={selectedService !== null}
        onClose={() => setSelectedService(null)}
        className="relative z-50"
      >
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" aria-hidden="true" />

        {/* Full-screen container */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="mx-auto max-w-3xl w-full bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
            {selectedService && (
              <>
                {/* Modal Header */}
                <div className="relative">
                  <img
                    src={selectedService.imageUrl}
                    alt={selectedService.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
                  <button
                    onClick={() => setSelectedService(null)}
                    className="absolute top-4 right-4 rounded-full bg-white/90 p-2 text-gray-900 hover:bg-white transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                  <div className="absolute bottom-6 left-6 right-6">
                    <DialogTitle className="text-3xl font-bold text-white">
                      {selectedService.title}
                    </DialogTitle>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="px-6 py-6 sm:px-8">
                  {/* Meta Information */}
                  <div className="flex items-center gap-x-6 text-sm border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-x-2 text-gray-600">
                      <ClockIcon className="h-5 w-5 text-primary-400" />
                      <span className="font-medium">{selectedService.duration}</span>
                    </div>
                    <div className="flex items-center gap-x-2 text-gray-600">
                      <MapPinIcon className="h-5 w-5 text-secondary-400" />
                      <span className="font-medium">{selectedService.locations.join(' / ')}</span>
                    </div>
                  </div>

                  {/* Full Description */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Sobre o Serviço</h4>
                    <div className="text-gray-700 leading-relaxed space-y-3">
                      {selectedService.fullDescription.split('\n').map((paragraph, index) => (
                        paragraph.trim() && (
                          <p key={index} className={paragraph.match(/^\d+\./) ? 'ml-4' : ''}>
                            {paragraph}
                          </p>
                        )
                      ))}
                    </div>
                  </div>

                  {/* Benefit */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Benefícios</h4>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedService.benefit}
                    </p>
                  </div>

                  {/* WhatsApp CTA */}
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <a
                      href="https://wa.me/+5511942403507"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundImage: 'linear-gradient(to right, #6df2f2, #c53bff)' }}
                      className="block w-full text-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Agendar Atendimento via WhatsApp
                    </a>
                    <p className="mt-3 text-center text-sm text-gray-500">
                      Responderemos em até 24 horas
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  )
}
