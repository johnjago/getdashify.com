/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "layouts/**/*.html",
    "content/**/*.md",
    "data/**/*.toml"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
