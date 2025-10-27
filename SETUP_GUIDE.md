# Website Development Kit - Setup Guide

Complete setup instructions for getting started with the Professional Website Development Kit.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`
- **npm** (usually comes with Node.js)
  - Verify installation: `npm --version`
- **Git** (for version control)
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

## 🚀 Quick Start

### Option 1: Use the Complete Starter Template

```bash
# Copy the entire starter template
cp -r website-development-kit/starter-template my-new-project
cd my-new-project

# Install dependencies
npm install

# Start development server
npm run dev
```

### Option 2: Manual Setup from Components

```bash
# Create new project directory
mkdir my-new-project
cd my-new-project

# Copy configuration files
cp website-development-kit/config-files/* .

# Copy base components
cp -r website-development-kit/base-components/src .

# Install dependencies
npm install

# Start development
npm run dev
```

## 📂 Project Structure

After setup, your project will have the following structure:

```
my-new-project/
├── public/                 # Static assets
│   ├── favicon.svg        # Site favicon
│   └── og-image.jpg       # Open Graph image
├── src/                   # Source code
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx    # Navigation component
│   │   ├── Hero.jsx      # Hero section
│   │   ├── Footer.jsx    # Footer component
│   │   ├── Features.jsx  # Features showcase
│   │   ├── Stats.jsx     # Statistics display
│   │   └── CTA.jsx       # Call-to-action section
│   ├── layouts/          # Layout components
│   │   └── MainLayout.jsx
│   ├── pages/            # Page components
│   │   └── HomePage.jsx
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main App component
│   ├── main.jsx          # App entry point
│   └── index.css         # Global styles
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── postcss.config.js     # PostCSS configuration
├── vite.config.js        # Vite configuration
├── vercel.json           # Vercel deployment config
├── eslint.config.js      # ESLint configuration
└── index.html            # HTML template
```

## ⚙️ Configuration

### 1. Update Package.json

Edit `package.json` to customize your project:

```json
{
  "name": "your-project-name",
  "description": "Your project description",
  "version": "1.0.0",
  // ... rest of configuration
}
```

### 2. Update HTML Meta Tags

Edit `index.html` to customize SEO and metadata:

```html
<title>Your Website Title</title>
<meta name="description" content="Your website description" />
<meta name="author" content="Your Name or Company" />
<meta property="og:title" content="Your Website Title" />
<meta property="og:url" content="https://your-domain.com" />
```

### 3. Customize Brand Colors

Update `tailwind.config.js` to match your brand:

```js
colors: {
  primary: {
    50: '#your-light-shade',
    500: '#your-main-color',  // Main brand color
    600: '#your-darker-shade',
    900: '#your-darkest-shade',
  },
  secondary: {
    // Your secondary color palette
  }
}
```

### 4. Update Component Content

Customize the default components in `src/components/`:

- **Navbar.jsx**: Update navigation items and logo
- **Hero.jsx**: Change headline and call-to-action text
- **Features.jsx**: Update feature descriptions
- **Stats.jsx**: Replace with your statistics
- **Footer.jsx**: Update company information and links

## 🎨 Customization

### Typography

The kit uses Inter font by default. To change fonts:

1. Install new font package:
```bash
npm install @fontsource/your-font
```

2. Update `tailwind.config.js`:
```js
fontFamily: {
  sans: ['YourFont', 'Inter', 'system-ui', 'sans-serif'],
}
```

3. Import font in `src/index.css`:
```css
@import '@fontsource/your-font/400.css';
```

### Colors and Themes

The kit includes a flexible color system:

- **Primary colors**: Main brand colors
- **Secondary colors**: Accent colors
- **Gradients**: Pre-defined gradient combinations
- **Animations**: Smooth transitions and effects

### Component Styling

All components use Tailwind CSS classes. Customize by:

1. **Inline classes**: Direct class modifications
2. **Custom components**: Create new variations
3. **Theme extension**: Add custom utilities in `tailwind.config.js`

## 🔧 Development Workflow

### Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run ESLint for code quality
npm run lint

# Auto-fix ESLint issues
npm run lint:fix

# Type checking (if using TypeScript)
npm run type-check
```

### Adding New Pages

1. Create page component in `src/pages/`:
```jsx
// src/pages/AboutPage.jsx
export default function AboutPage() {
  return (
    <div>
      <h1>About Us</h1>
      {/* Page content */}
    </div>
  )
}
```

2. Add route in `src/App.jsx`:
```jsx
import AboutPage from './pages/AboutPage'

// Inside Routes component:
<Route path="/about" element={<AboutPage />} />
```

3. Update navigation in `src/components/Navbar.jsx`

### Adding New Components

1. Create component file in appropriate directory:
```jsx
// src/components/NewComponent.jsx
export default function NewComponent({ title, description }) {
  return (
    <div className="p-6">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  )
}
```

2. Import and use in pages or other components

## 📱 Responsive Design

The kit follows mobile-first design principles:

- **Breakpoints**: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- **Grid systems**: Responsive grid layouts
- **Typography**: Scaling text sizes
- **Images**: Responsive image handling

### Testing Responsiveness

- Use browser dev tools device simulation
- Test on actual devices when possible
- Verify touch targets are adequate (44px minimum)

## ♿ Accessibility

The kit includes accessibility features:

- **Semantic HTML**: Proper heading hierarchy
- **ARIA labels**: Screen reader support
- **Keyboard navigation**: Full keyboard accessibility
- **Focus indicators**: Visible focus states
- **Color contrast**: WCAG compliant colors

### Accessibility Checklist

- [ ] All images have alt text
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Interactive elements are keyboard accessible
- [ ] Color contrast meets WCAG standards
- [ ] Form labels are properly associated

## 🚢 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow prompts to complete deployment

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag `dist` folder to Netlify deploy interface

### Other Platforms

The kit works with any static hosting platform:
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Firebase Hosting

## 🐛 Troubleshooting

### Common Issues

**1. Node modules not found**
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**2. Port already in use**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
npm run dev
```

**3. Build failures**
```bash
# Clear Vite cache
npm run build -- --force
```

**4. CSS not loading**
- Verify Tailwind configuration
- Check PostCSS setup
- Ensure imports are correct

### Getting Help

1. **Check Documentation**: Review all included guides
2. **Search Issues**: Look for similar problems in community forums
3. **Claude Code**: Use Claude Code for implementation help
4. **Component Library**: Reference included component examples

## 📚 Next Steps

After setup, explore these guides:

1. **[Component Library](COMPONENT_LIBRARY.md)** - Available components and usage
2. **[Deployment Guide](documentation/DEPLOYMENT.md)** - Production deployment
3. **[Customization Guide](documentation/CUSTOMIZATION.md)** - Advanced customization
4. **[Best Practices](documentation/BEST_PRACTICES.md)** - Development guidelines

## 🎯 Pro Tips

### For Claude Code Users

When working with Claude Code on your project:

1. **Reference the kit**: Always mention you're using this development kit
2. **Component patterns**: Ask Claude to follow established component patterns
3. **Consistency**: Request changes that maintain design system consistency
4. **Documentation**: Ask Claude to update documentation for new features

### Development Best Practices

1. **Start simple**: Begin with basic customization before advanced features
2. **Test frequently**: Check your changes on different screen sizes
3. **Version control**: Commit changes regularly with meaningful messages
4. **Performance**: Monitor bundle size and loading performance

---

**🎉 You're ready to build amazing websites!**

Start customizing your components and building your unique project. Remember to reference the Component Library guide for detailed usage instructions.