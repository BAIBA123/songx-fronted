const base = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  8: '2rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
  56: '14rem',
  64: '16rem'
}

const extra = {
  72: '18rem',
  80: '20rem',
  88: '22rem',
  96: '24rem',
  104: '26rem',
  112: '28rem',
  120: '30rem',
  128: '32rem',
  136: '34rem',
  144: '36rem',
  152: '38rem',
  160: '40rem'
}

const percent = {
  '1/2': '50%',
  '1/3': '33.33%',
  '2/3': '66.66%',
  '1/4': '25%',
  '3/4': '75%',
  '1/5': '20%',
  '2/5': '40%',
  '3/5': '60%',
  '4/5': '80%'
}

module.exports = {
  important: true,
  purge: [
    './src/**/*.html',
    './src/**/*.jsx'
  ],
  theme: {
    extend: {
      maxWidth: Object.assign({ '1200px': '1200px', '800px': '800px' }, base, extra, percent),
      width: Object.assign({ '300px': '300px', '800px': '800px' }, base, extra, percent),
      height: Object.assign({}, base, extra, percent),
      margin: Object.assign({ '600px': '600px' }),
      inset: Object.assign({}, percent),
      rounded: Object.assign({}),
      lineHeight: Object.assign({}, base),
      backgroundSize: Object.assign({}, { '100%': '100%', '120%': '120%' })
    }
  },
  variants: {},
  plugins: []
}
