import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'txt-white': '#c7c7c7',
        "bg-custom-gray": '#222',
        "button-custom-lime": '#d3e97a',
      },
      maxWidth: {
        '1440': '1440px',
      },
      fontFamily: {
        roboto: 'Roboto, sans-serif',
        inter: 'Inter, sans-serif',
        manrope: 'Manrope, sans-serif',
        BebasNeue: 'Bebas Neue, cursive',
      },
      screens:{
        mobile: "410px",
      },
      borderRadius:{
        '100px': '100px',
      }
    },
  },
  plugins: [],
};
export default config;
