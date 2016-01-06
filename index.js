var _ = require('lodash');

module.exports = {
  website: {
    assets: './assets',
    css: [
      'css/TonicEmbed.css'
    ],
    js: [
      'js/main.js'
    ],
    html: {
      'body:end': function () { return '<script src="https://embed.tonicdev.com"></script>'; }
    }
  }
};