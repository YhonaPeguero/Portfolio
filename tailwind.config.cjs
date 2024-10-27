module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#ccd6f6',
        accent: '#pink-600'
      }
    }
  },
  variants: {
    extend: {
      scale: ['hover', 'group-hover'],
      rotate: ['group-hover'],
      translate: ['hover', 'group-hover']
    }
  }
};
