module.exports = {
  content: [
    './src/**/*.twig',
    './src/**/*.js',
    './src/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        manahel: {
          primary: '#0d7377',
          'primary-dark': '#095c5f',
          'primary-light': '#149ca1',
          accent: '#c9a227',
          'accent-light': '#f4e4a6',
          'accent-dark': '#a3821f',
          text: '#1a2b3c',
          'text-muted': '#5a6d7d',
          'text-light': '#8a9dad',
          background: '#f8fafb',
          surface: '#ffffff',
          border: '#e2e8f0',
          'border-light': '#f1f5f9',
          success: '#22c55e',
          warning: '#f59e0b',
          error: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Noto Sans Arabic', 'Cairo', 'Segoe UI', 'Tahoma', 'sans-serif'],
        display: ['Cairo', 'Noto Sans Arabic', 'sans-serif'],
        arabic: ['Noto Sans Arabic', 'Cairo', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '20px',
        'card-xl': '24px',
        'button': '12px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(13, 115, 119, 0.08)',
        'card-hover': '0 8px 30px rgba(13, 115, 119, 0.15)',
        'button': '0 4px 15px rgba(13, 115, 119, 0.3)',
        'header': '0 2px 15px rgba(13, 115, 119, 0.25)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'counter': 'counter 2s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}