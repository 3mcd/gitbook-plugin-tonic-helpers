require(['gitbook'], function (gitbook) {

  function slice(arr) {
    var args = arguments.length > 1 ? slice(arguments).slice(1) : [];
    return Array.prototype.slice.apply(arr, args);
  }

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

  gitbook.tonic = {
    success: success,
    failure: failure
  };

});