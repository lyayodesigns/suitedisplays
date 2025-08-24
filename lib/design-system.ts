// Suite Display Design System Constants
export const SUITE_COLORS = {
  primary: {
    blue: '#25A4FF',
    blueDark: '#1E8FE6',
    blueLight: '#4DB8FF',
  },
  accent: {
    gold: '#D4AF37',
    goldDark: '#B8941F',
    goldLight: '#E6C55A',
  },
  neutral: {
    slate50: '#f8fafc',
    slate100: '#f1f5f9',
    slate200: '#e2e8f0',
    slate300: '#cbd5e1',
    slate400: '#94a3b8',
    slate500: '#64748b',
    slate600: '#475569',
    slate700: '#334155',
    slate800: '#1e293b',
    slate900: '#0f172a',
  }
} as const;

export const SUITE_TYPOGRAPHY = {
  fontFamily: {
    primary: ['Inter', 'system-ui', 'sans-serif'],
    display: ['Inter', 'system-ui', 'sans-serif'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  }
} as const;

export const SUITE_SPACING = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
  '4xl': '8rem',
} as const;

export const SUITE_SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  luxury: '0 32px 64px -12px rgba(37, 164, 255, 0.15)',
} as const;

export const SUITE_GRADIENTS = {
  primary: 'linear-gradient(135deg, #25A4FF 0%, #D4AF37 100%)',
  primaryReverse: 'linear-gradient(135deg, #D4AF37 0%, #25A4FF 100%)',
  blue: 'linear-gradient(135deg, #25A4FF 0%, #4DB8FF 100%)',
  gold: 'linear-gradient(135deg, #D4AF37 0%, #E6C55A 100%)',
  luxury: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
  dark: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
} as const;

// Utility function to get consistent animations
export const getSuiteAnimation = (delay: number = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: delay * 0.2 }
});
