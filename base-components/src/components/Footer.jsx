import { Link } from 'react-router-dom'
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedInIcon
} from '@heroicons/react/24/outline'

// Navigation sections
const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/about/team' },
    { name: 'Contact', href: '/contact' },
    { name: 'Careers', href: '/careers' },
  ],
  services: [
    { name: 'Service 1', href: '/services/service-1' },
    { name: 'Service 2', href: '/services/service-2' },
    { name: 'Service 3', href: '/services/service-3' },
    { name: 'All Services', href: '/services' },
  ],
  support: [
    { name: 'Help Center', href: '/help' },
    { name: 'Documentation', href: '/docs' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact Support', href: '/support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ],
}

// Social media links
const social = [
  {
    name: 'Facebook',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path
          fillRule="evenodd"
          d="M12.017 0C8.396 0 7.989.013 7.041.072 6.094.131 5.451.277 4.894.51 4.315.753 3.829 1.072 3.344 1.557 2.859 2.042 2.540 2.528 2.297 3.107c-.233.557-.379 1.2-.438 2.147C1.8 6.202 1.787 6.609 1.787 10.23c0 3.621.013 4.028.072 4.976.059.947.205 1.59.438 2.147.243.579.562 1.065 1.047 1.55.485.485.971.804 1.55 1.047.557.233 1.2.379 2.147.438.948.059 1.355.072 4.976.072 3.621 0 4.028-.013 4.976-.072.947-.059 1.59-.205 2.147-.438.579-.243 1.065-.562 1.55-1.047.485-.485.804-.971 1.047-1.55.233-.557.379-1.2.438-2.147.059-.948.072-1.355.072-4.976 0-3.621-.013-4.028-.072-4.976-.059-.947-.205-1.59-.438-2.147-.243-.579-.562-1.065-1.047-1.55C19.529 1.557 19.043 1.238 18.464.995c-.557-.233-1.2-.379-2.147-.438C15.369.013 14.962 0 11.341 0h.676zm-.178 2.16c3.556 0 3.977.014 5.384.072.881.04 1.36.187 1.68.311.422.164.723.36 1.04.677.317.317.513.618.677 1.04.124.32.271.799.311 1.68.058 1.407.072 1.828.072 5.384 0 3.556-.014 3.977-.072 5.384-.04.881-.187 1.36-.311 1.68-.164.422-.36.723-.677 1.04-.317.317-.618.513-1.04.677-.32.124-.799.271-1.68.311-1.407.058-1.828.072-5.384.072-3.556 0-3.977-.014-5.384-.072-.881-.04-1.36-.187-1.68-.311-.422-.164-.723-.36-1.04-.677-.317-.317-.513-.618-.677-1.04-.124-.32-.271-.799-.311-1.68-.058-1.407-.072-1.828-.072-5.384 0-3.556.014-3.977.072-5.384.04-.881.187-1.36.311-1.68.164-.422.36-.723.677-1.04.317-.317.618-.513 1.04-.677.32-.124.799-.271 1.68-.311 1.407-.058 1.828-.072 5.384-.072z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'Twitter',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: (props) => (
      <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="h-8 w-8 bg-primary-600 rounded"></div>
            <p className="text-base text-gray-600">
              Making the world a better place through constructing elegant hierarchies.
            </p>
            <div className="flex space-x-6">
              {social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation links */}
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold text-gray-900">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold text-gray-900">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-base font-semibold text-gray-900">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-base font-semibold text-gray-900">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-base text-gray-600 hover:text-gray-900">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 border-t border-gray-900/10 pt-8 sm:mt-20 lg:mt-24">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div>
              <h3 className="text-base font-semibold text-gray-900">Subscribe to our newsletter</h3>
              <p className="mt-2 text-base text-gray-600">
                Get the latest news and updates delivered to your inbox.
              </p>
            </div>
            <form className="mt-6 xl:col-span-2 xl:mt-0">
              <div className="sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm"
                />
                <div className="mt-4 sm:ml-4 sm:mt-0 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-900/10 pt-8">
          <p className="text-base text-gray-500">
            &copy; {new Date().getFullYear()} Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}