  module.exports = {
      mode: 'jit',
      purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
      theme: {
          extend: {
            colors: {
              customGreen: 'rgba(99,198,67,0.7)',
              hoverGreen: 'rgba(99,198,67,0.3)',
              backgroundColorNews: '#FAF8F8',
            },
        },
      },
      variants: {},
      plugins: [],
    }