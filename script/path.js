function loadScript(src) {
  var script = document.createElement('script');
  script.src = src;
  document.head.appendChild(script);
}

loadScript('greeting.js');

loadScript('parallax.js');

loadScript('detect.js');

loadScript('script.js');

loadScript('typing.js');
