/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    // Docs: https://tailwindcss.com/docs/typography-plugin
    // require('@tailwindcss/typography'),
    // Docs: https://daisyui.com/docs
    require('daisyui'),
  ],
  daisyui: {
    themes: ['luxury'], // ここの値を変える
  },
}
