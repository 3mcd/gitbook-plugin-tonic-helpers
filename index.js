var _ = require('lodash');

var tplWebsite = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/templates/website.html")));
var tplEbook = _.template(fs.readFileSync(path.resolve(__dirname, "./assets/templates/ebook.html")));

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

  },

  blocks: {

    tonic: {

      blocks: ['source', 'result'],

      process: function (block) {
        var props = block.blocks.reduce(function (a, x) {
          return (a[x.name] = x.body.trim(), a);
        }, {});

        var tpl = (this.generator === 'website' ? tplWebsite : tplEbook);

        return tpl({ props: props });
      }

    }

  }

};