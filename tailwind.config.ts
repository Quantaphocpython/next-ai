import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        crypto: {
          green: 'hsl(var(--crypto-green))',
          red: 'hsl(var(--crypto-red))',
          blue: 'hsl(var(--crypto-blue))',
          purple: 'hsl(var(--crypto-purple))',
        },

        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      keyframes: {
        'skeleton-loading': {
          '0%, 100%': {
            transform: 'translateX(-100%)',
            opacity: '0.6',
          },
          '50%': {
            transform: 'translateX(100%)',
            opacity: '1',
          },
        },
        'price-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
        'crypto-wave': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'skeleton-loading':
          'skeleton-loading 1.5s infinite cubic-bezier(0.4, 0, 0.6, 1)',
        'price-pulse': 'price-pulse 2s ease-in-out infinite',
        'crypto-wave': 'crypto-wave 10s ease infinite',
      },
      backgroundSize: {
        'crypto-wave': '200% 200%',
      },
      boxShadow: {
        'crypto-glow': '0 0 15px rgba(0,0,0,0.3)',
        'price-card': '0 4px 6px rgba(0,0,0,0.1)',
      },
      borderRadius: {
        'crypto-card': '1rem',
      },
      transitionProperty: {
        crypto: 'color, background-color, border-color, transform, box-shadow',
      },
      spacing: {
        'crypto-gap': '1rem',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(({ addUtilities }) => {
      const newUtilities = {
        '.crypto-gradient-text': {
          'background-image':
            'linear-gradient(45deg, #4fcf70, #fad648, #a767e5, #12bcff)',
          '-webkit-background-clip': 'text',
          'background-clip': 'text',
          color: 'transparent',
        },
        '.crypto-hover-effect': {
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'translateY(-5px)',
            'box-shadow': '0 10px 20px rgba(0,0,0,0.1)',
          },
        },
      };
      addUtilities(newUtilities);
    }),
  ],
} satisfies Config;
