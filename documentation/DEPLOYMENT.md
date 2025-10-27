# Deployment Guide

Complete guide for deploying your website to various hosting platforms.

## 🚀 Quick Deploy Options

### Vercel (Recommended)

**Why Vercel?**
- Zero configuration needed
- Automatic HTTPS
- Global CDN
- Perfect for React/Vite projects
- Free tier available

**Deploy Steps:**
```bash
# Install Vercel CLI
npm i -g vercel

# Build your project
npm run build

# Deploy
vercel

# For production deployment
vercel --prod
```

**Environment Variables:**
```bash
# Set environment variables
vercel env add VITE_API_URL
vercel env add VITE_APP_NAME
```

### Netlify

**Deploy via Drag & Drop:**
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `dist` folder to deploy area

**Deploy via CLI:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages

**Deploy Steps:**
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

**Vite Configuration for GitHub Pages:**
```js
// vite.config.js
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

## ⚙️ Platform-Specific Configurations

### Vercel Configuration

**vercel.json** (already included):
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/fonts/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

### Netlify Configuration

**netlify.toml**:
```toml
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[build.environment]
  NODE_VERSION = "18"
```

### AWS S3 + CloudFront

**Build and Upload:**
```bash
# Build project
npm run build

# Upload to S3 (requires AWS CLI)
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## 🔧 Build Optimization

### Production Build

**Optimize your build:**
```bash
# Build with analysis
npm run build -- --report

# Preview production build locally
npm run preview
```

### Environment Variables

**Create environment files:**
```bash
# .env.production
VITE_API_URL=https://api.yourdomain.com
VITE_APP_NAME="Your App Name"
VITE_ANALYTICS_ID=your-analytics-id
```

**Use in components:**
```jsx
const apiUrl = import.meta.env.VITE_API_URL
const appName = import.meta.env.VITE_APP_NAME
```

### Performance Optimization

**Vite Build Optimizations:**
```js
// vite.config.js
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@headlessui/react', '@heroicons/react'],
        },
      },
    },
    // Minimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
})
```

## 📊 Analytics Integration

### Vercel Analytics

**Installation:**
```bash
npm install @vercel/analytics @vercel/speed-insights
```

**Usage:**
```jsx
// src/main.jsx
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Analytics />
    <SpeedInsights />
  </React.StrictMode>
)
```

### Google Analytics

**Installation:**
```bash
npm install gtag
```

**Setup:**
```jsx
// src/utils/analytics.js
export const GA_TRACKING_ID = 'GA_MEASUREMENT_ID'

export const pageview = (url) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}
```

## 🔒 Security Configuration

### Content Security Policy

**Add to index.html:**
```html
<meta http-equiv="Content-Security-Policy"
      content="default-src 'self';
               script-src 'self' 'unsafe-inline' https://vercel.live;
               style-src 'self' 'unsafe-inline';
               img-src 'self' data: https:;
               font-src 'self' data:;">
```

### Security Headers

**Vercel Headers:**
```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 🌐 Custom Domain Setup

### Vercel Custom Domain

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain
5. Configure DNS records as instructed

### Domain Configuration

**DNS Records:**
```
Type: CNAME
Name: www
Value: your-project.vercel.app

Type: A
Name: @
Value: 76.76.19.61 (Vercel IP)
```

## 🔄 CI/CD Pipeline

### GitHub Actions

**Create `.github/workflows/deploy.yml`:**
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 📈 Performance Monitoring

### Core Web Vitals

**Track performance metrics:**
```jsx
// src/utils/performance.js
export function getCLS(onPerfEntry) {
  getCLS(onPerfEntry)
}

export function getFID(onPerfEntry) {
  getFID(onPerfEntry)
}

export function getFCP(onPerfEntry) {
  getFCP(onPerfEntry)
}

export function getLCP(onPerfEntry) {
  getLCP(onPerfEntry)
}

export function getTTFB(onPerfEntry) {
  getTTFB(onPerfEntry)
}
```

### Bundle Analysis

**Analyze bundle size:**
```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-analyzer

# Add to vite.config.js
import { analyzer } from 'rollup-plugin-analyzer'

export default defineConfig({
  plugins: [
    react(),
    analyzer({ summaryOnly: true })
  ]
})
```

## 🐛 Troubleshooting

### Common Deployment Issues

**1. Build Failures**
```bash
# Clear cache and rebuild
rm -rf node_modules .next dist
npm install
npm run build
```

**2. Route Not Found (404)**
- Verify SPA routing configuration
- Check `vercel.json` rewrite rules
- Ensure all routes are properly defined

**3. Environment Variables Not Working**
- Verify variable names start with `VITE_`
- Check environment file naming
- Confirm variables are set in deployment platform

**4. Asset Loading Issues**
```js
// Check base path configuration
// vite.config.js
export default defineConfig({
  base: '/your-base-path/',
  // ...
})
```

### Performance Issues

**1. Large Bundle Size**
- Implement code splitting
- Use dynamic imports
- Optimize images and assets

**2. Slow Loading**
- Enable compression
- Optimize images
- Use CDN for static assets

## 📋 Deployment Checklist

### Pre-Deployment
- [ ] Update meta tags and SEO information
- [ ] Test build locally with `npm run build && npm run preview`
- [ ] Verify all routes work correctly
- [ ] Check responsive design on different devices
- [ ] Test form submissions and interactions
- [ ] Validate accessibility with screen readers
- [ ] Optimize images and assets
- [ ] Set up error tracking (Sentry, etc.)

### Post-Deployment
- [ ] Verify site loads correctly on live URL
- [ ] Test all navigation and links
- [ ] Check form functionality
- [ ] Verify analytics tracking
- [ ] Test on different browsers
- [ ] Monitor performance metrics
- [ ] Set up monitoring alerts
- [ ] Update DNS records for custom domain

### Ongoing Maintenance
- [ ] Regular dependency updates
- [ ] Performance monitoring
- [ ] Security updates
- [ ] Content updates
- [ ] Backup strategies

## 🔗 Useful Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Netlify Documentation**: https://docs.netlify.com
- **Vite Deployment Guide**: https://vitejs.dev/guide/static-deploy.html
- **React Router Deployment**: https://reactrouter.com/web/guides/deployment
- **Web Performance**: https://web.dev/performance/

---

**🎉 Your website is ready for production!**

Choose the deployment method that best fits your needs and follow the platform-specific instructions above.