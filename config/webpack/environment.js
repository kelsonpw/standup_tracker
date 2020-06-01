const { environment } = require('@rails/webpacker');
const { ProvidePlugin } = require('webpack');

environment.plugins.prepend(
  'Provide',
  new ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery',
    jquery: 'jquery',
    'window.Tether': 'tether',
    Popper: ['popper.js', 'default'],
  })
);

module.exports = environment;
