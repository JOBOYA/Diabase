/** @type {import('tailwindcss').Config} */
import prelinePlugin from 'preline/plugin';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',  // Ajout de cette ligne
  ],
  theme: {
    extend: { 
      screens: {
        'custom': '1091px',
      },
  },
  },
  plugins: [
    prelinePlugin,  // Ajout de cette ligne
  ],
}
