# Component Library Guide

Comprehensive documentation for all components included in the Website Development Kit.

## 📚 Table of Contents

- [Layout Components](#layout-components)
- [Navigation Components](#navigation-components)
- [Content Components](#content-components)
- [Interactive Components](#interactive-components)
- [Form Components](#form-components)
- [Utility Components](#utility-components)
- [Component Patterns](#component-patterns)
- [Customization Examples](#customization-examples)

## 🏗 Layout Components

### MainLayout

The primary layout wrapper for your application.

**Location**: `src/layouts/MainLayout.jsx`

**Usage**:
```jsx
import MainLayout from '../layouts/MainLayout'

// In your routing setup
<Route path="/" element={<MainLayout />}>
  <Route index element={<HomePage />} />
</Route>
```

**Features**:
- Contains Navbar, main content area, and Footer
- Uses React Router's `Outlet` for page content
- Provides consistent site structure

**Customization**:
```jsx
// Add custom classes or elements
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50"> {/* Custom background */}
      <Navbar />
      <main className="container mx-auto px-4"> {/* Custom container */}
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
```

## 🧭 Navigation Components

### Navbar

Professional navigation bar with responsive design and dropdown menus.

**Location**: `src/components/Navbar.jsx`

**Features**:
- Responsive mobile menu
- Dropdown submenus with icons
- Logo placeholder area
- CTA button
- Headless UI integration

**Props Configuration**:
```jsx
// Update navigation items
const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Web Design', href: '/services/web-design', icon: PaintBrushIcon },
      { name: 'Development', href: '/services/development', icon: CodeBracketIcon },
    ]
  },
  { name: 'Contact', href: '/contact' },
]
```

**Logo Customization**:
```jsx
// Replace logo placeholder
<Link to="/" className="-m-1.5 p-1.5">
  <img src="/your-logo.svg" alt="Your Company" className="h-8 w-auto" />
</Link>
```

**CTA Button**:
```jsx
// Customize call-to-action button
<Link
  to="/get-quote"
  className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white"
>
  Get Quote
</Link>
```

## 📄 Content Components

### Hero

Eye-catching hero section with gradient backgrounds and call-to-action buttons.

**Location**: `src/components/Hero.jsx`

**Features**:
- Gradient background decorations
- Announcement banner
- Primary and secondary CTAs
- Responsive typography
- SEO-optimized heading structure

**Customization Examples**:

```jsx
// Update headline and description
<h1 className="text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
  Your Amazing Product Name
</h1>
<p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
  Transform your business with our innovative solution.
  Built for modern companies that demand excellence.
</p>
```

```jsx
// Customize CTAs
<div className="mt-10 flex items-center justify-center gap-x-6">
  <Link
    to="/start-trial"
    className="rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white"
  >
    Start Free Trial
  </Link>
  <Link
    to="/demo"
    className="text-sm font-semibold text-gray-900 hover:text-primary-600"
  >
    Watch Demo <span aria-hidden="true">→</span>
  </Link>
</div>
```

### Features

Showcase your key features with icons and descriptions.

**Location**: `src/components/Features.jsx`

**Features**:
- Icon-based feature display
- 2-column responsive grid
- Customizable feature items
- Heroicons integration

**Adding Features**:
```jsx
const features = [
  {
    name: 'Lightning Fast',
    description: 'Optimized for speed and performance with modern web technologies.',
    icon: BoltIcon,
  },
  {
    name: 'Secure by Default',
    description: 'Built-in security features protect your data and users.',
    icon: ShieldCheckIcon,
  },
  // Add more features...
]
```

### Stats

Display impressive statistics and metrics.

**Location**: `src/components/Stats.jsx`

**Features**:
- 4-column responsive grid
- Large number display
- Background color variations
- Easy metric updates

**Customizing Stats**:
```jsx
const stats = [
  { id: 1, name: 'Active Users', value: '10,000+' },
  { id: 2, name: 'Projects Completed', value: '500+' },
  { id: 3, name: 'Years Experience', value: '15+' },
  { id: 4, name: 'Team Members', value: '50+' },
]
```

### Footer

Comprehensive footer with navigation, newsletter, and social links.

**Location**: `src/components/Footer.jsx`

**Features**:
- Multi-column navigation
- Newsletter signup form
- Social media icons
- Copyright information
- SEO-friendly structure

**Navigation Sections**:
```jsx
const navigation = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Careers', href: '/careers' },
    // ...
  ],
  services: [
    { name: 'Web Design', href: '/web-design' },
    { name: 'Development', href: '/development' },
    // ...
  ],
  // Add more sections...
}
```

**Social Media Links**:
```jsx
const social = [
  {
    name: 'Facebook',
    href: 'https://facebook.com/yourpage',
    icon: FacebookIcon,
  },
  // Add more social platforms...
]
```

## 🎯 Interactive Components

### CTA (Call-to-Action)

Conversion-focused section to drive user action.

**Location**: `src/components/CTA.jsx`

**Features**:
- Primary brand background
- Centered layout
- Primary and secondary buttons
- Compelling copy structure

**Customization**:
```jsx
<h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
  Ready to transform your business?
</h2>
<p className="mx-auto mt-6 max-w-xl text-lg text-primary-200">
  Join thousands of companies already using our platform to grow faster.
</p>
```

## 📝 Form Components

### Newsletter Signup

Built into the Footer component with proper form handling.

**Features**:
- Email validation
- Responsive design
- Loading states
- Error handling

**Form Handling**:
```jsx
// Add form submission logic
const handleSubmit = async (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  const email = formData.get('email')

  // Add your submission logic here
  console.log('Newsletter signup:', email)
}

<form onSubmit={handleSubmit}>
  {/* Form fields */}
</form>
```

## 🛠 Utility Components

### Custom Hooks

Create custom hooks in `src/hooks/` for reusable logic:

```jsx
// src/hooks/useLocalStorage.js
import { useState, useEffect } from 'react'

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}
```

### Utility Functions

Add helper functions in `src/utils/`:

```jsx
// src/utils/formatters.js
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}
```

## 🎨 Component Patterns

### Responsive Design

All components follow mobile-first responsive patterns:

```jsx
// Typography scaling
<h1 className="text-3xl sm:text-4xl lg:text-5xl">
  Responsive Heading
</h1>

// Grid layouts
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {/* Grid items */}
</div>

// Spacing adjustments
<div className="py-12 sm:py-16 lg:py-24">
  {/* Content with responsive padding */}
</div>
```

### Color Usage

Consistent color application across components:

```jsx
// Primary colors
<button className="bg-primary-600 hover:bg-primary-700 text-white">
  Primary Button
</button>

// Secondary colors
<div className="bg-secondary-50 border-secondary-200">
  Secondary Background
</div>

// Gradients
<div className="bg-gradient-primary">
  Gradient Background
</div>
```

### Icon Integration

Using Heroicons consistently:

```jsx
import { CheckCircleIcon } from '@heroicons/react/20/solid'

// In component
<CheckCircleIcon className="h-5 w-5 text-green-500" />

// With background
<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-600">
  <CheckCircleIcon className="h-6 w-6 text-white" />
</div>
```

## 🔧 Customization Examples

### Creating New Page Templates

```jsx
// src/pages/AboutPage.jsx
import Hero from '../components/Hero'
import Features from '../components/Features'

export default function AboutPage() {
  return (
    <>
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="text-4xl font-semibold text-gray-900">About Us</h1>
          <p className="mt-6 text-lg text-gray-600">
            Your company story...
          </p>
        </div>
      </section>
      <Features />
    </>
  )
}
```

### Custom Component Variants

```jsx
// src/components/Card.jsx
export default function Card({ children, variant = 'default', className = '' }) {
  const baseClasses = 'rounded-lg p-6 shadow-sm'

  const variants = {
    default: 'bg-white border border-gray-200',
    primary: 'bg-primary-50 border border-primary-200',
    secondary: 'bg-secondary-50 border border-secondary-200',
  }

  return (
    <div className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}
```

### Theme Customization

```jsx
// tailwind.config.js - Custom theme extension
theme: {
  extend: {
    colors: {
      brand: {
        50: '#f0f9ff',
        500: '#0ea5e9',
        900: '#0c4a6e',
      }
    },
    fontFamily: {
      brand: ['YourBrandFont', 'Inter', 'sans-serif'],
    },
    animation: {
      'bounce-slow': 'bounce 3s infinite',
    }
  }
}
```

## 📱 Mobile Optimization

### Touch Targets

Ensure interactive elements are touch-friendly:

```jsx
// Minimum 44px touch targets
<button className="min-h-[44px] min-w-[44px] p-3">
  Touch Button
</button>
```

### Mobile Navigation

The Navbar component includes full mobile support:

- Hamburger menu toggle
- Full-screen mobile overlay
- Touch-friendly navigation items
- Proper focus management

## ♿ Accessibility Features

### Semantic HTML

```jsx
// Proper heading hierarchy
<header>
  <h1>Page Title</h1>
</header>

<main>
  <section>
    <h2>Section Title</h2>
    <h3>Subsection</h3>
  </section>
</main>
```

### ARIA Labels

```jsx
// Screen reader support
<button
  aria-label="Close dialog"
  aria-expanded={isOpen}
>
  <XMarkIcon className="h-6 w-6" />
</button>
```

### Focus Management

```jsx
// Visible focus indicators
<a
  href="/link"
  className="focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
>
  Accessible Link
</a>
```

## 🎯 Best Practices

### Component Organization

```jsx
// Component structure
export default function MyComponent({ prop1, prop2, ...props }) {
  // Hooks at the top
  const [state, setState] = useState()

  // Event handlers
  const handleClick = () => {
    // Handler logic
  }

  // Early returns
  if (!prop1) return null

  // Main render
  return (
    <div {...props}>
      {/* Component JSX */}
    </div>
  )
}
```

### Performance Optimization

```jsx
// Lazy loading components
const LazyComponent = lazy(() => import('./HeavyComponent'))

// Memoization for expensive calculations
const expensiveValue = useMemo(() => {
  return heavyCalculation(data)
}, [data])

// Callback optimization
const handleClick = useCallback(() => {
  // Handler logic
}, [dependency])
```

## 🚀 Advanced Usage

### Dynamic Components

```jsx
// Component mapping
const componentMap = {
  hero: Hero,
  features: Features,
  stats: Stats,
  cta: CTA,
}

// Dynamic rendering
{sections.map((section) => {
  const Component = componentMap[section.type]
  return <Component key={section.id} {...section.props} />
})}
```

### Context Integration

```jsx
// src/contexts/ThemeContext.jsx
const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Usage in components
const { theme, setTheme } = useContext(ThemeContext)
```

---

## 📚 Next Steps

1. **Start Simple**: Begin with basic component customization
2. **Build Incrementally**: Add features one at a time
3. **Test Regularly**: Verify changes across different screen sizes
4. **Document Changes**: Keep track of customizations for team members
5. **Refer Back**: Use this guide as a reference throughout development

**Happy building! 🎉**