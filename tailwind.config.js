/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',      // Pages de l'app router
    './src/components/**/*.{js,ts,jsx,tsx}', // Composants
    './src/**/*.{js,ts,jsx,tsx}',           // Tous les fichiers dans src
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4cc9f0',
        secondary: '#c77dff',
        accent: '#57cc99',
        text: '#171717',
        muted: '#6b7280',
        lightBg: '#f8f9fa',
        darkBg: '#0a0a0a',
        error: '#ef4444',
        success: '#10b981',
      },
      fontFamily: {
        // Police personnalisée pour le titre de la nav
        ostrich: ['OstrichHeavy', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
