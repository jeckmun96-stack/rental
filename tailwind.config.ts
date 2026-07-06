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
        surface: '#FFFBF3',
        mutedSurface: '#FDF1E4',
        ink: '#4A3B2E',
        subInk: '#9C8879',
        accent: '#F4966B',
        trust: '#7FB89A',
        warning: '#E08669',
        line: '#F2E4D3',
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
