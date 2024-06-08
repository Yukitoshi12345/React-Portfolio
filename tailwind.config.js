/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      ssm: "375px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1024px",
      xxl: "1440px",
    },
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      keyframes: {
        horizontalSlide: {
          "0%": { 
            transform: "translateX(0)", 
            color: "#4682b6" // Steel blue color
          },
          "20%": { 
            transform: "translateX(2px)", 
            color: "#4682c6" // Slightly different shade of blue
          },
          "40%": {
            transform: "translateX(5px)", 
            color: "#4382b6" // Another shade of blue
          },
          "60%": {
            transform: "translateX(7px)", 
            color: "#4622c6" // A purple shade
          },
          "80%": {
            transform: "translateX(9px)", 
            color: "#ff6347" // Tomato color
          },
          "100%": { 
            transform: "translateX(10px)", 
            color: "#4682b6" // Returning to the initial Steel blue color
          }
        },
      },
      animation: {
        "horizontal-slide": "horizontalSlide 0.8s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
};
