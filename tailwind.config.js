/** @type {import('tailwindcss').Config} */
export default {
  content: ['./*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'dark-grayish-blue': 'hsl(233, 10%, 55%)',
        'very-dark-blue': 'hsl(211, 26%, 19%)',
        'dark-blue': 'hsl(213, 9%, 39%)',
        'light-green': 'hsl(168, 34%, 41%)',
        'green-icons': 'hsl(168, 45%, 32%)',
        'light-yellow': 'hsl(34, 100%, 99%)',
        'light-blue': 'hsl(199, 86%, 71%)',
        green: 'hsl(167, 40%, 24%)',
        cyan: 'hsl(168, 44%, 70%)',
        blue: 'hsl(198, 54%, 27%)',
        yellow: 'hsl(51, 100%, 49%)',
        gray: 'hsl(210, 4%, 67%)'
      }
    },
    backgroundImage: {
      'header-mobile': 'url("/mobile/image-header.jpg")',
      'header-desktop': 'url("/desktop/image-header.jpg")',
      'graphic-design-mobile': 'url("/mobile/image-graphic-design.jpg")',
      'graphic-design-desktop': 'url("/desktop/image-graphic-design.jpg")',
      'image-photography-mobile': 'url("/mobile/image-photography.jpg")',
      'image-photography-desktop': 'url("/desktop/image-photography.jpg")'
    },
    fontFamily: {
      sans: ['Barlow', 'sans-serif'],
      heading: ['Fraunces', 'sans-serif']
    },
    fontSize: {
      h1: '3.5rem', // 56px
      h2: '2.5rem', // 40px
      h3: '2rem', // 32px
      h4: '1.75rem', // 28px
      h5: '1.25rem', // 20px
      'body-1': '1.125rem', // 18px
      'body-2': '0.9375rem' // 15px
    },
    lineHeight: {
      h1: '4.3125rem', // 69px
      h2: '3.0625rem', // 49px
      h3: '2.4375rem', // 39px
      h4: '2.1875rem', // 35px
      h5: '1.5625rem', // 25px
      'body-1': '1.875rem', // 30px
      'body-2': '1.5625rem' // 25px
    },
    screens: {
      xl: '1110px'
    }
  },
  plugins: []
}
