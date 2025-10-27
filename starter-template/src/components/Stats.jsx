const stats = [
  { id: 1, name: 'Projects Built', value: '500+' },
  { id: 2, name: 'Happy Developers', value: '1,200+' },
  { id: 3, name: 'Years of Experience', value: '10+' },
  { id: 4, name: 'GitHub Stars', value: '2.5k' },
]

export default function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
              Trusted by developers worldwide
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join thousands of developers who have built amazing projects with our starter kit.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}