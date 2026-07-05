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
        surface: '#FAFAF9',
        mutedSurface: '#F1F3F0',
        ink: '#1A2333',
        subInk: '#5B6474',
        accent: '#0E7C7B',
        warning: '#B5533C',
        line: '#E4E7E2',
        tripcom: '#2B4C8C',
        klook: '#F26B21'
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
