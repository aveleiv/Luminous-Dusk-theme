/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        background: "#282836",
        secondaryBg: "#2E2E3E",
        divider: "#3C3C4E",
        primaryText: "#E0E0E0",
        secondaryText: "#A5A5B1",
        highlightWhite: "#FFFFFF",
        mintGreen: "#A3E4D7",
        softBlue: "#81C4E9",
        softPink: "#F5A4B7",
        lilacPurple: "#D3B4F0",
        sunshineYellow: "#FFDE7D",
        accentOrange: "#f4a482",
        softCoral: "#FF6F61",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.user-select-none': {
          'user-select': 'none',
        },
        '.user-select-text': {
          'user-select': 'text',
        },
      })
    }
  ],
};
