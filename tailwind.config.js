module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#010b18',
        text: '#C1E8FF',
        accent: '#5483B3',
        primary: '#052659',
        secondary: '#7DA0CA',
      },
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        'plex-sans': ['IBM Plex Sans', 'sans-serif'],
        'plex-serif': ['IBM Plex Serif', 'serif'],
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
