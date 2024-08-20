/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8FDF9",
        primary: "#45CE52",
        secondary: "#4F45A5",
        txt: "#051408",
        txtDim : 'rgba(5,20,8,0.83)',
        accent: "#4C729F",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        secondary : ["Kode Mono", 'monospace']
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}


