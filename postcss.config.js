module.exports = {
  plugins: [
    require('postcss-normalize')(),
    require('postcss-momentum-scrolling')([
      'scroll',
      'auto'
    ]),
    require('autoprefixer')(),
    require('csswring')({
      preserveHacks: true,
      removeAllComments: true
    })
  ]
};
