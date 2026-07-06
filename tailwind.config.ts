import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        surface: '#FFFBF5',
        mutedSurface: '#FFF6EA',
        ink: '#2B2A28',
        subInk: '#8A8580',
        accent: '#FF8A5B',
        trust: '#3AA787',
        warning: '#B5533C',
        line: '#F0E9DE',
        tripcom: '#2557D6',
        klook: '#FF5722',
        agoda: '#2557D6'
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Segoe UI',
          'sans-serif'
        ]
      },
      boxShadow: {
        soft: '0 10px 30px rgba(26, 35, 51, 0.06)'
      }
    }
  },
  plugins: []
};

export default config;
