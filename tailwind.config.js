/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    extend: {
      colors: {
        primary: "#1e293b",
        secondary: "#94a3b8",
        accent: {
          DEFAULT: "#2ACFCF",
          hover: "#22d3ee",
        },
        body: "#e2e8f0",
      },
      backgroundImage: {
        "boost-desktop": "url('/bg-boost-desktop.svg')",
        "boost-mobile": "url('/bg-boost-mobile.svg')",
        "shorten-desktop": "url('/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('/bg-shorten-mobile.svg')",
      },
    },
  },
  plugins: [],
};
