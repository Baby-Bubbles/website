# Professional Website Starter

Built with the Professional Website Development Kit - a comprehensive React, Vite, and Tailwind CSS starter template.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
├── layouts/           # Layout components
├── pages/            # Page components
├── hooks/            # Custom React hooks
├── utils/            # Utility functions
├── App.jsx           # Main app component
├── main.jsx          # App entry point
└── index.css         # Global styles
```

## 🛠 Tech Stack

- **React 19** - Latest React with modern features
- **Vite 7** - Fast build tool and dev server
- **Tailwind CSS v4.1** - Utility-first CSS framework
- **React Router v7** - Client-side routing
- **Headless UI** - Accessible UI components
- **Heroicons** - Beautiful SVG icons
- **Inter Font** - Professional typography

## 🎨 Customization

### Brand Colors

Edit `tailwind.config.js`:

```js
colors: {
  primary: {
    500: '#your-main-color',  // Update your brand color
  }
}
```

### Navigation

Update navigation items in `src/components/Navbar.jsx`:

```js
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  // Add your menu items
]
```

### Content

Customize components:
- `src/components/Hero.jsx` - Update headline and CTAs
- `src/components/Features.jsx` - Add your features
- `src/components/Stats.jsx` - Update statistics
- `src/components/Footer.jsx` - Company information

## 📚 Documentation

For complete documentation, see the development kit guides:

- **Setup Guide** - Complete setup instructions
- **Component Library** - Available components and usage
- **Deployment Guide** - Deploy to various platforms
- **Claude Code Guide** - Using with Claude Code

## 🚢 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag `dist` folder to netlify.com
```

### Other Platforms
The built `dist` folder can be deployed to any static hosting service.

## 📄 License

Built with the Professional Website Development Kit. Customize and use for your projects.

---

**Start building your amazing website! 🎉**