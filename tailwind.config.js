/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        noto:[`var(--font-noto)`]
      },
      colors: {
        whiteBG:"#F1F1F1",
        dark:"#323232",
        gray:"#585858",
        ruya:"#66BFE5"
      },
    },
  },
  plugins: [],
};
