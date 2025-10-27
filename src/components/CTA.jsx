export default function CTA() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="px-6 pt-12 sm:pt-16 pb-24 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl" style={{ color: '#582e89' }}>
            Agende um Atendimento
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600">
            Oferecemos atendimento personalizado em fisioterapia neonatal e pediátrica,
            tanto em consultório quanto no conforto da sua casa. Entre em contato e descubra
            como podemos ajudar no desenvolvimento saudável do seu bebê.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://wa.me/+5511942403507"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundImage: 'linear-gradient(to right, #6df2f2, #c53bff)' }}
              className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-90 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
            >
              Agendar Atendimento
            </a>
            <a href="#servicos" className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700 transition-colors">
              Conheça nossos serviços <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
      <svg
        viewBox="0 0 1024 1024"
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-x-1/2 mask-[radial-gradient(closest-side,white,transparent)]"
      >
        <circle r={512} cx={512} cy={512} fill="url(#baby-bubbles-gradient)" fillOpacity="0.7" />
        <defs>
          <radialGradient id="baby-bubbles-gradient">
            <stop stopColor="#6df2f2" />
            <stop offset={1} stopColor="#c53bff" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}
