/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "drop-down-100-frame": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "drop-up-20-frame": {
          "0%": { transform: "translateY(10%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
      },
      animation: {
        "drop-down": "drop-down-100-frame ease-in-out 1.5s",
        "drop-up": "drop-up-20-frame ease-in-out 1.5s",
      },
    },
    fontFamily: {
      sans: [
        "SF Pro Text",
        "SF Pro Icons",
        "Helvetica Neue",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
  },
  plugins: [],
};
