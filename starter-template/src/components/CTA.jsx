import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <div className="bg-primary-600">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready to get started?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-primary-200">
            Start building your next amazing project today with our professional starter kit.
            Everything you need is already configured and ready to go.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/get-started"
              className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-primary-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Get started
            </Link>
            <Link
              to="/documentation"
              className="text-sm font-semibold text-white hover:text-primary-100"
            >
              View documentation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}