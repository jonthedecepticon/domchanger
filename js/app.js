function Nav(emit, refresh) {
  return { render: render };

  function render() {
    return ["nav",
      ['ul',
        ['li', ['a', {href: '#files'}, 'Files']],
        ['li', ['a', {href: '#shared'}, 'Shared']],
        ['li', ['a', {href: '#music'}, 'Music']],
        ['li', ['a', {href: '#photos'}, 'Photos']],
      ]
    ];
  }
}
function FilesTemplate(emit, refresh) {
  return { render: render };

  function render() {
    return ['h1', 'Files'];
  }
}
function SharedTemplate(emit, refresh) {
  return { render: render };

  function render() {
    return ['h1', 'Shared'];
  }
}
function MusicTemplate(emit, refresh) {
  return { render: render };

  function render() {
    return ['h1', 'Music'];
  }
}
function PhotosTemplate(emit, refresh) {
  return { render: render };

  function render() {
    return ['h1', 'Photos'];
  }
}

// Creating a instance attached to document.body
var navbar = domChanger(Nav, document.body);
var filesTemplate = domChanger(FilesTemplate, document.body);
var sharedTemplate = domChanger(SharedTemplate, document.body);
var musicTemplate = domChanger(MusicTemplate, document.body);
var photosTemplate = domChanger(PhotosTemplate, document.body);

// Send in the initial data to render.
navbar.update();

window.onhashchange = function () {
  if (!window.location.hash) window.location.hash = '#files'
  setCurrent(window.location.hash)
}
window.onload = window.onhashchange

function setCurrent(url) {
  switch(url) {
    case '#shared':
      filesTemplate.destory()
      sharedTemplate.update();
      break
    case '#music':
      musicTemplate.update();
      break
    case '#photos':
      photosTemplate.update();
      break
    default:
      filesTemplate.update();
  }
}
