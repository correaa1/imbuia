/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
    "./src/app/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        'warm-orange': '#f7941d',
        'warm-brown': '#8b4513',
        'dark-wood': '#5a3d1c',
      },
      fontFamily: {
        display: ['var(--font-geist-sans)', 'sans-serif'],
        body: ['Arial', 'Helvetica', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}

