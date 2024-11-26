/** @type {import('tailwindcss').Config} */
module.exports = {
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
      },
      fontFamily: {
        instrument : ['Instrument Serif', 'serif']
      },
      fontSize: {
        massive : ['23rem']
      },
      lineHeight: {
        11 : '3rem',
        12 : '4rem',
        13 : '5rem',
        14 : '6rem',
        15 : '7rem',
        16 : '8rem',
        17 : '9rem',
        18 : '10rem',
        19 : '11rem',
        20 : '12rem',
        21 : '13rem',
        22 : '14rem',
        23 : '15rem',
        24 : '16rem',
        25 : '17rem',
        26 : '18rem',
        27 : '19rem',
        28 : '20rem',
        29 : '21rem',
        30 : '22rem',
      }
    },
  },
  plugins: [],
};
