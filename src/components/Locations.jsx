import { locations, locationsIntro, hours } from '../content/site'

export default function Locations() {
  return (
    <div className="bg-white pt-12 sm:pt-16 pb-12 sm:pb-16" id="locais">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-10 py-8 lg:grid-cols-3">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-pretty" style={{ color: '#582e89' }}>
                {locationsIntro.title}
              </h2>
              <p className="mt-4 text-base/7 text-gray-600">
                {locationsIntro.description}
              </p>
              <p className="mt-3 text-sm/6 text-gray-600">
                <strong>Horários:</strong> {hours.label}
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
