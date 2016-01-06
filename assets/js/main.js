require(['gitbook'], function (gitbook) {

  function slice(arr) {
    var args = arguments.length > 1 ? slice(arguments).slice(1) : [];
    return Array.prototype.slice.apply(arr, args);
  }

  function init() {
    gitbook.state.$book.find('[data-tonic-embed]').each(function () {
      initEmbed(this);
    });
  }

  function initEmbed(el) {
    var results = [];

    function success() {
      removeActiveClasses(el);
      el.dataset.message = ['Success!'].concat(slice(arguments)).join(' ');
      el.classList.add('is-success');
    }

    function failure() {
      removeActiveClasses(el);
      el.dataset.message = ['Failure.'].concat(slice(arguments)).join(' ');
      el.classList.add('is-failure');
    }

    Tonic.createNotebook({
      element: el,
      source: el.dataset.tonicSource,
      onResult: function (res) {
        var handler = new Function('result', 'results', 'success', 'failure', el.dataset.tonicResult).toString();
        eval('(' + handler + ')(res, results, success, failure);');
      }
    });
  }

  gitbook.events.bind('page.change', function () {
    init();
  });

});