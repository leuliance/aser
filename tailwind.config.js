module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: 'Proxima Nova',
    container:{
      center:true
    },
    extend: {
      colors:{
        'green':'#1DB954',
        'dark':'#121212',
        'light':'#282828',
        'lightest':'#B3B3B3',
        'darkest':'#191414'
      },
      // backgroundImage: theme => ({
      //   'main-background': "url('/background.jpg')"
      // })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}