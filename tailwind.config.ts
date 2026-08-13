import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#392B87',
        secondary: '#181617',
        accent: '#E5322D',
        light: '#F0F0F0',
        dark: '#181617',
      },
      spacing: {
        '18': '4.5rem',
      },
      maxWidth: {
        '360': '1440px',
      },
      backgroundColor: {
        'primary': '#392B87',
        'secondary': '#181617',
        'accent': '#E5322D',
      },
      textColor: {
        'primary': '#392B87',
        'accent': '#E5322D',
      },
    },
  },
  plugins: [],
};

export default config;
