function fullscreen(el) {
  var element = document.querySelector(el);

  element.style.height = window.innerHeight + 'px';
}

function init(x) {
  fullscreen(x);

  window.onresize = function () {
    fullscreen(x);
  };
}

init('[data-fullscreen]');
