export default function Locations() {
  const locations = [
    {
      name: 'FisioKids',
      address: 'Rua Pará, 76, cj. 24',
      city: 'Consolação - SP',
    },
    {
      name: 'UpKids',
      address: 'Rua Borges Lagoa, 971, cj. 51-52',
      city: 'Vila Clementino - SP',
    },
    {
      name: 'Clínica Berçar',
      address: 'Rua Afonso de Freitas, 559, cj. 82',
      city: 'Paraíso - SP',
    },
    {
      name: 'Clínica Nascere',
      address: 'Rua Helena, 140, cj 112',
      city: 'Vila Olímpia - SP',
    },
    {
      name: 'Atendimento Domiciliar',
      address: 'Consultar regiões disponíveis',
      city: '',
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32" id="locais">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 py-8 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty" style={{ color: '#582e89' }}>
                Onde Atendemos
              </h2>
              <p className="mt-4 text-base/7 text-gray-600">
                Atendemos em consultórios parceiros nas principais regiões de São Paulo e também
                oferecemos atendimento domiciliar com toda a estrutura necessária.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              {locations.map((location) => (
                <div key={location.name} className="rounded-2xl bg-gray-50 p-10">
                  <h3 className="text-base/7 font-semibold text-gray-900">
                    {location.name}
                  </h3>
                  <address className="mt-3 space-y-1 text-sm/6 text-gray-600 not-italic">
                    <p>{location.address}</p>
                    {location.city && <p>{location.city}</p>}
                  </address>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
