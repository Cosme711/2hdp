module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    colors: {
      gray: "#D8D8D8",
      darkgray: "#4B5563",
      white: "#FFFFFF",
      black: "#000000",
      yellow: "#FEE600",
      orange: "#ffae00",
      test: "#2F4858",
      whiteblue: "#C0FAFF",
      blue: "338DFF",
      green: "#1DD05D"
    },
    screens: {
      'test': "520px",
      'sm': "640px",
      'md': "768px",
      'test2': "950px",
      'lg': "1260px",
      '2xl': "1600px"
    },
    backgroundSize: {
      'cover': 'cover'
    },
    maxWidth: {
      'small': "15rem"
    }
  },
  variants: {},
  plugins: [],
}
