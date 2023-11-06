/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Oswald",
      secondary: "Raleway",
      tertiary: "Rozha One",
    },
    container: {
      padding: {
        DEFAULT: "20px",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    extend: {
      colors: {
        dark: "#111111",
        grey: {
          DEFAULT: "#555555",
        },
      },
      backgroundImage: {
        hero: "url('/images/hero/bg.jpg')",
        about: "url('/images/about/image.png')",
        interview: "url('/images/interview/bg.png')",
      },
      content: {
        outlineText: 'url("/images/hero/outline-text.svg")',
      },
    },
  },
  plugins: [],
};
