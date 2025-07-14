/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f7f8f3',
          100: '#eef0e6',
          200: '#dde2cd',
          300: '#c6d0aa',
          400: '#aab885',
          500: '#8f9f66',
          600: '#6d7b4f',
          700: '#545f3f',
          800: '#444d35',
          900: '#3a412e',
        },
        walnut: {
          50: '#faf8f3',
          100: '#f4f0e6',
          200: '#e8dcc7',
          300: '#d7c2a0',
          400: '#c4a274',
          500: '#b18552',
          600: '#9b6f42',
          700: '#7d5936',
          800: '#674830',
          900: '#563c2a',
        },
        cream: {
          50: '#fefdfb',
          100: '#fdfbf6',
          200: '#faf6eb',
          300: '#f6efdc',
          400: '#f0e5c8',
          500: '#e8d7ae',
          600: '#d9c088',
          700: '#c7a464',
          800: '#a5864f',
          900: '#866c41',
        }
      },
      fontFamily: {
        'serif': ['EB Garamond', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'wood-grain': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23674830\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        'leaf-pattern': "url('data:image/svg+xml,%3Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"%23545f3f\" fill-opacity=\"0.03\"%3E%3Cpath d=\"M10 3c-3.87 0-7 3.13-7 7s3.13 7 7 7 7-3.13 7-7-3.13-7-7-7zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z\"/%3E%3C/g%3E%3C/svg%3E')"
      }
    },
  },
  plugins: [],
}