# Quick Start Guide

Get your website up and running in 5 minutes!

## 🚀 1-Minute Setup

```bash
# Copy starter template
cp -r website-development-kit/starter-template my-website
cd my-website

# Install and run
npm install && npm run dev
```

**That's it!** Your website is running at `http://localhost:5173`

## ⚡ Instant Customization

### 1. Update Your Brand (30 seconds)

**Colors** - Edit `tailwind.config.js`:
```js
primary: {
  500: '#your-color',  // Your main brand color
}
```

**Logo** - Replace in `src/components/Navbar.jsx`:
```jsx
<img src="/your-logo.svg" alt="Your Company" className="h-8 w-auto" />
```

### 2. Update Homepage Content (2 minutes)

**Hero Section** - Edit `src/components/Hero.jsx`:
```jsx
<h1>Your Amazing Product</h1>
<p>Your compelling value proposition...</p>
```

**Features** - Update `src/components/Features.jsx`:
```js
const features = [
  {
    name: 'Your Feature',
    description: 'Your description...',
    icon: YourIcon,
  },
  // Add more features...
]
```

**Stats** - Update `src/components/Stats.jsx`:
```js
const stats = [
  { name: 'Happy Customers', value: '1,000+' },
  { name: 'Projects Completed', value: '50+' },
  // Add your metrics...
]
```

### 3. Navigation (1 minute)

Update `src/components/Navbar.jsx`:
```js
const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]
```

## 🎯 Next Steps

1. **Add Pages**: Create new pages in `src/pages/`
2. **Deploy**: Use `vercel` command for instant deployment
3. **Customize**: Follow the detailed guides for advanced customization

## 📚 Full Documentation

- [Setup Guide](SETUP_GUIDE.md) - Complete installation and configuration
- [Component Library](COMPONENT_LIBRARY.md) - All available components
- [Claude Code Guide](documentation/CLAUDE_CODE_GUIDE.md) - Perfect for AI-assisted development

**🎉 Happy building!**