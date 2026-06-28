/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#2563EB',
            600: '#1D4ED8',
            700: '#1E40AF',
            800: '#1E3A8A',
            900: '#172554',
            950: '#0F1D3D',
          },
          accent: {
            50: '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
          },
        },
        fontFamily: {
          heading: ['Poppins', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
          sans: ['Inter', 'sans-serif'],
        },
        animation: {
          'fade-up': 'fadeUp 0.6s ease-out forwards',
          'fade-in': 'fadeIn 0.6s ease-out forwards',
          'float': 'float 6s ease-in-out infinite',
          'float-slow': 'float 10s ease-in-out infinite',
          'float-fast': 'float 4s ease-in-out infinite',
          'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
          'scale-in': 'scaleIn 0.4s ease-out forwards',
          'slide-left': 'slideLeft 0.5s ease-out forwards',
          'slide-right': 'slideRight 0.5s ease-out forwards',
          'glass-glow': 'glassGlow 3s ease-in-out infinite',
          'ripple': 'ripple 0.6s ease-out forwards',
          'tilt': 'tilt 0.3s ease-out forwards',
        },
        keyframes: {
          fadeUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
            '50%': { transform: 'translateY(-20px) rotate(5deg)' },
          },
          pulseSoft: {
            '0%, 100%': { opacity: '1' },
            '50%': { opacity: '0.7' },
          },
          scaleIn: {
            '0%': { opacity: '0', transform: 'scale(0.9)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
          slideLeft: {
            '0%': { opacity: '0', transform: 'translateX(40px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          slideRight: {
            '0%': { opacity: '0', transform: 'translateX(-40px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          glassGlow: {
            '0%, 100%': { boxShadow: '0 8px 32px rgba(37, 99, 235, 0.1)' },
            '50%': { boxShadow: '0 8px 32px rgba(37, 99, 235, 0.25)' },
          },
          ripple: {
            '0%': { transform: 'scale(0)', opacity: '0.5' },
            '100%': { transform: 'scale(4)', opacity: '0' },
          },
          tilt: {
            '0%': { transform: 'perspective(1000px) rotateY(0deg) rotateX(0deg)' },
            '100%': { transform: 'perspective(1000px) rotateY(2deg) rotateX(-2deg)' },
          },
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        },
      },
    },
    plugins: [],
  }