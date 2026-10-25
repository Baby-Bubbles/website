import { useState } from 'react'
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { XMarkIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import { services, servicesIntro, contact } from '../content/site'

export default function Services() {
  const [selectedService, setSelectedService] = useState(null)

  return (
    <div className="bg-gradient-to-br from-primary-50 to-secondary-50 pt-24 sm:pt-32 pb-12 sm:pb-16" id="servicos">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl" style={{ color: '#582e89' }}>
            {servicesIntro.title}
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            {servicesIntro.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.id}
              id={service.slug}
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
            href={contact.whatsapp}
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
                      href={contact.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ backgroundImage: 'linear-gradient(to right, #6df2f2, #c53bff)' }}
                      className="block w-full text-center rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                    >
                      Agendar Atendimento via WhatsApp
                    </a>
                    <p className="mt-3 text-center text-sm text-gray-500">
                      {contact.responseTime}
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
