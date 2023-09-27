/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
   theme: {
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1200px",
      // => @media (min-width: 1200px) { ... }
    },
    container: {
      center: true,
      padding: "1rem",
    },
    
    extend: {
      colors: {
        "status-stone": {
          0: "#fafaf9",
          10: "#f5f5f4",
          20: "#e7e5e4",
          30: "#d6d3d1",
          40: "#a8a29e",
          50: "#78716c",
          60: "#57534e",
          70: "#44403c",
          80: "#292524",
          90: "#1c1917",
          100: "#0c0a09",
        },

        "status-purple": {
          0: "#FAF5FF",
          10: "#F3E8FF",
          20: "#E9D5FF",
          30: "#D8B4FE",
          40: "#C084FC",
          50: "#A855F7",
          60: "#9333CA",
          70: "#7E22CE",
          80: "#6B21A8",
          90: "#581C87",
          100: "#3B0764",
        },
      },
    },
  },
  plugins: [],
}
