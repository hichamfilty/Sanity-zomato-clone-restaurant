/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    (module.exports = {
      content: [
        './screens/**/*.{js,ts,jsx,tsx,html}',
        './App/**/*.{js,ts,jsx,tsx,html}',
        './components/**/*.{js,ts,jsx,tsx,html}',
      ],
      // ...
    }),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
