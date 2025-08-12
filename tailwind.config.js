/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light mode colors (Day)
        light: {
          bg: '#FDFCF7',
          'bg-secondary': '#B5EAEA',
          text: '#3E3E3E',
          primary: '#A3B18A',
          secondary: '#E9D8A6',
        },
        // Dark mode colors (Night)
        dark: {
          bg: '#0D1B2A',
          'bg-secondary': '#1B263B',
          text: '#FFFFFF',
          'text-amber': '#E0A96D',
          primary: '#FFD166',
          secondary: '#3BB4C1',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Pretendard', 'Noto Sans KR', 'sans-serif'],
      },
      fontSize: {
        'hero-desktop': ['56px', '1.1'],
        'hero-mobile': ['40px', '1.1'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'theme-transition': 'themeTransition 1.2s ease-in-out',
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
        themeTransition: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
}
