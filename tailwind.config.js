// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: "class",
//   content: [
//     "./index.html",
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "surface-dark": "#0F1124",
      },
      borderColor: {
        "white/8": "rgba(255,255,255,0.08)",
        "white/15": "rgba(255,255,255,0.15)",
      }
    },
  },
  plugins: [],
}