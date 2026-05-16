/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      paper: '#F4F1EA',
      'paper-dark': '#E6E2D8',
      ink: '#0B0B0E',
      'ink-soft': '#2A2A30',
      'ink-mute': '#6B6B72',
      clay: '#C9633F',
      sage: '#B7C2B0',
      live: '#22C55E',
      white: '#FFFFFF',
      black: '#000000',
    },
    fontFamily: {
      display: ['"Switzer"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      sans: ['"Switzer"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
    },
    fontSize: {
      'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.04em' }],
      'sm': ['0.875rem', { lineHeight: '1.4' }],
      'base': ['1rem', { lineHeight: '1.6' }],
      'lg': ['1.125rem', { lineHeight: '1.6' }],
      'xl': ['1.25rem', { lineHeight: '1.5' }],
      '2xl': ['1.5rem', { lineHeight: '1.4' }],
      '3xl': ['1.875rem', { lineHeight: '1.3' }],
      '4xl': ['2.5rem', { lineHeight: '1.15' }],
      '5xl': ['3.5rem', { lineHeight: '1.05' }],
      '6xl': ['5rem', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
      '7xl': ['7rem', { lineHeight: '0.95', letterSpacing: '-0.025em' }],
      '8xl': ['10rem', { lineHeight: '0.9', letterSpacing: '-0.03em' }],
    },
    extend: {
      maxWidth: {
        prose: '68ch',
        readable: '78ch',
      },
      spacing: {
        section: '8rem',
      },
    },
  },
  plugins: [],
};
