/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        // Baby Bubbles Brand Colors
        primary: {
          50: '#f0fefe',   // Lightest cyan
          100: '#c5fbff',  // Very light cyan (brand color)
          200: '#9ff8fc',  // Light cyan
          300: '#7af5f9',
          400: '#6df2f2',  // Main brand cyan
          500: '#4de6e6',  // Medium cyan
          600: '#2dd4d4',
          700: '#1fb8b8',
          800: '#189999',
          900: '#127a7a',
          950: '#0a4a4a',  // Darkest cyan
        },
        secondary: {
          50: '#faf5ff',   // Lightest purple
          100: '#e9c6ff',  // Light lavender (brand color)
          200: '#ddb0ff',
          300: '#d19aff',
          400: '#c53bff',  // Bright purple (brand color)
          500: '#b020f0',
          600: '#9b18d4',
          700: '#7d14ab',
          800: '#582e89',  // Dark purple (brand color)
          900: '#42216a',
          950: '#2b1547',  // Darkest purple
        },
        accent: {
          cyan: '#6df2f2',      // Main cyan
          'cyan-light': '#c5fbff',   // Light cyan
          purple: '#c53bff',    // Bright purple
          'purple-dark': '#582e89',  // Dark purple
          lavender: '#e9c6ff',  // Light lavender
        },
      },
      // Baby Bubbles Gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6df2f2, #4de6e6, #2dd4d4)',
        'gradient-secondary': 'linear-gradient(135deg, #c53bff, #b020f0, #9b18d4)',
        'gradient-bubbles': 'linear-gradient(135deg, #6df2f2, #c53bff, #582e89)',
        'gradient-soft': 'linear-gradient(135deg, #c5fbff, #e9c6ff)',
        'gradient-vibrant': 'linear-gradient(135deg, #6df2f2, #c53bff)',
      },
      // Custom spacing for consistent layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}