import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}", "*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Suite Display Brand Colors
        'suite': {
          'blue': '#25A4FF',
          'blue-dark': '#1E8FE6',
          'blue-light': '#4DB8FF',
          'gold': '#D4AF37',
          'gold-dark': '#B8941F',
          'gold-light': '#E6C55A',
        },
        // Extended Brand Palette
        'brand': {
          'primary': '#25A4FF',
          'primary-dark': '#1E8FE6',
          'primary-light': '#4DB8FF',
          'accent': '#D4AF37',
          'accent-dark': '#B8941F',
          'accent-light': '#E6C55A',
        },
        // Semantic Colors
        'luxury': {
          'slate': {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          }
        },
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      fontFamily: {
        'suite': ['Inter', 'system-ui', 'sans-serif'],
        'suite-display': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Suite Display Typography Scale
        'suite-xs': ['0.75rem', { lineHeight: '1rem' }],
        'suite-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'suite-base': ['1rem', { lineHeight: '1.5rem' }],
        'suite-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'suite-xl': ['1.25rem', { lineHeight: '1.75rem' }],
        'suite-2xl': ['1.5rem', { lineHeight: '2rem' }],
        'suite-3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        'suite-4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        'suite-5xl': ['3rem', { lineHeight: '1' }],
        'suite-6xl': ['3.75rem', { lineHeight: '1' }],
        'suite-7xl': ['4.5rem', { lineHeight: '1' }],
        'suite-8xl': ['6rem', { lineHeight: '1' }],
        'suite-9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        // Suite Display Spacing Scale
        'suite-xs': '0.5rem',
        'suite-sm': '1rem',
        'suite-md': '1.5rem',
        'suite-lg': '2rem',
        'suite-xl': '3rem',
        'suite-2xl': '4rem',
        'suite-3xl': '6rem',
        'suite-4xl': '8rem',
      },
      borderRadius: {
        'suite-sm': '0.5rem',
        'suite-md': '0.75rem',
        'suite-lg': '1rem',
        'suite-xl': '1.5rem',
        'suite-2xl': '2rem',
        'suite-3xl': '3rem',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      boxShadow: {
        // Suite Display Shadow System
        'suite-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'suite-md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'suite-lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'suite-xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        'suite-2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'suite-luxury': '0 32px 64px -12px rgba(37, 164, 255, 0.15)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'suite-float': 'suiteFloat 6s ease-in-out infinite',
        'suite-glow': 'suiteGlow 2s ease-in-out infinite alternate',
        'glow-slow': 'glowSlow 8s ease-in-out infinite alternate',
        'glow-medium': 'glowMedium 6s ease-in-out infinite alternate',
        'opacity-pulse': 'opacityPulse 10s ease-in-out infinite',
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
        suiteFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        suiteGlow: {
          '0%': { boxShadow: '0 0 20px rgba(37, 164, 255, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(37, 164, 255, 0.6)' },
        },
        glowSlow: {
          '0%': { opacity: '0.3', transform: 'scale(0.95)' },
          '50%': { opacity: '0.4', transform: 'scale(1)' },
          '100%': { opacity: '0.35', transform: 'scale(0.98)' },
        },
        glowMedium: {
          '0%': { opacity: '0.25', transform: 'scale(0.97)' },
          '50%': { opacity: '0.35', transform: 'scale(1.03)' },
          '100%': { opacity: '0.3', transform: 'scale(1)' },
        },
        opacityPulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.35' },
        },
      },
      backgroundImage: {
        // Suite Display Gradients
        'suite-primary': 'linear-gradient(135deg, #25A4FF 0%, #D4AF37 100%)',
        'suite-primary-reverse': 'linear-gradient(135deg, #D4AF37 0%, #25A4FF 100%)',
        'suite-blue': 'linear-gradient(135deg, #25A4FF 0%, #4DB8FF 100%)',
        'suite-gold': 'linear-gradient(135deg, #D4AF37 0%, #E6C55A 100%)',
        'suite-luxury': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        'suite-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
