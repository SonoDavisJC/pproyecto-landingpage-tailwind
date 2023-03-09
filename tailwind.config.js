/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.html"],
  theme: {
    extend: {
      colors: {
        'color-ottica': '#EFF1ED',
        'color-hover': '#71797A',
        'color-grayOttica': '#505A5B',
        'color-storia': '#D36060',
      },
      fontFamily: {
        serif: ['Inter','sans-serif;'],
        sans: ['Playfair Display', 'serif'] 
      },
      backgroundImage: {
        hero: 'url("./assets/img/carlos-vaz-KP4bxnxAilU-unsplash.png")'
      }
    },
  },
  plugins: [],
}
