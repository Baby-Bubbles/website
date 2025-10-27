import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Fast Development',
    description: 'Get up and running in minutes with our optimized Vite setup and modern tooling.',
    href: '#',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Modern Design',
    description: 'Beautiful, responsive components built with Tailwind CSS and best practices.',
    href: '#',
    icon: SparklesIcon,
  },
  {
    name: 'Accessibility First',
    description: 'All components follow WCAG guidelines for inclusive user experiences.',
    href: '#',
    icon: CheckCircleIcon,
  },
  {
    name: 'Team Collaboration',
    description: 'Structured codebase and documentation that scales with your team.',
    href: '#',
    icon: UserGroupIcon,
  },
  {
    name: 'Best Practices',
    description: 'Industry-standard patterns and conventions built-in from day one.',
    href: '#',
    icon: AcademicCapIcon,
  },
  {
    name: 'Community Support',
    description: 'Active community and comprehensive documentation to help you succeed.',
    href: '#',
    icon: HandRaisedIcon,
  },
]

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold text-primary-600">Everything you need</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Built for modern development
          </p>
          <p className="mt-6 text-lg text-gray-600">
            Our starter kit includes everything you need to build professional websites with modern
            technologies and best practices.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-primary-600">
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}