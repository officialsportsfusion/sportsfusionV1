/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'app-black': '#0D0D0D',
        'app-orange': '#FF6B00',
        'app-orange-light': '#FFCEAA',
        'app-orange-thick': '#FF7D20',
        'app-white': '#FFF3EB',
        'app-white-500': '#FFFBF8',
        'app-sky': '#29A5FF',
        'app-green': '#0C9700',
        'app-red': '#CE2E1C',
        'app-red-dark': '#D53838',
        'app-dark-light': '#212427'
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'app-black': '#0D0D0D',
        'app-orange': '#FF6B00',
        'app-orange-light': '#FFCEAA',
        'app-orange-thick': '#FF7D20',
        'app-white': '#FFF3EB',
        'app-white-500': '#FFFBF8',
        'app-sky': '#29A5FF',
        'app-green': '#0C9700',
        'app-red': '#CE2E1C',
        'app-red-dark': '#D53838',
        'app-dark-light': '#212427'
      }
    },
  },
  plugins: [],
}
