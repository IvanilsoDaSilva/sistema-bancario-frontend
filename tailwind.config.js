/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF00FF",
        secondary: "#FFFFFF",
        tertiary: "#111827",
        quarter: "#374151",
      },
      backgroundImage: {
        admin: "url('/src/assets/admin-banner.png')",
        client: "url('/src/assets/client-banner.png')",
      },
      keyframes: {
        fall: {
          "0%": { transform: "rotate(0deg) translateY(0px)" },
          "4%": { transform: "rotate(20deg) translateY(10px)" },

          "100%": { transform: " translateY(500px)" },
        },
        "rotate-z": {
          "0%": { transform: "rotate(-10deg)" },

          "100%": { transform: "rotate(-10deg)" },
        },
        "scale": {
          "0%": { transform: "scale(1.10)" },

          "100%": { transform: "scale(1.10)" },
        },
        "top-down": {
          "0%": { transform: "translateY(-100px)" },

          "100%": { transform: "translateY(0px)" },
        },
        "down-top": {
          "0%": { transform: "translateY(100px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        fall: "fall 3s linear",
        "rotate-z": "rotate-z 0.1s linear infinite",
        "scale": "scale 0.1s linear infinite",
        "top-down": "top-down 0.5s linear",
        "down-top": "down-top 0.5s linear",
      },
    },
  },
  plugins: [],
};
