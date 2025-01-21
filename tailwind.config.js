

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
        instrument : ['Instrument Serif', 'serif'],
        dmSans: ['DM Sans', 'sans-serif'],
        robotoCondensed: ['Roboto Condensed', 'sans-serif'],
        plusJakartaSans: ['Plus Jakarta Sans', 'serif']
      },
      fontSize: {
        10 : '10rem',
        11 : '12rem',
        large: '20rem',
        giant: '22rem',
        massive : '23rem',
        humongous : '25rem'
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
      },
      colors: {
        'hot-pink': '#FF2E5F',
        accentColor: "#FF2E8D",
      },
      slide: {
        "0%": { transform: "translateY(100%)", opacity: 0.1 },
        "15%": { transform: "translateY(0)", opacity: 1 },
        "30%": { transform: "translateY(0)", opacity: 1 },
        "45%": { transform: "translateY(-100%)", opacity: 1 },
        "100%": { transform: "translateY(-100%)", opacity: 0.1 },
      },
    },
  },
  plugins: [],
};
