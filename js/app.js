function Nav(emit, refresh) {
  return { render: render };

  function render() {
    var thing = '';
    return ["nav",
      ['ul',
        ['li', {onclick: urlChange}, ['a$thing', {href: '#files', value: thing}, 'Files']],
        ['li', ['a', {href: '#shared'}, 'Shared']],
        ['li', ['a', {href: '#music'}, 'Music']],
        ['li', ['a', {href: '#photos'}, 'Photos']],
      ]
    ];
  }
}
function Template(emit, refresh) {
  return { render: render };

  function render() {
    return ['h1', 'Files'];
  }
}

function urlChange(listItem, a) {
  console.log(listItem);
  console.log(a);
}

// Creating a instance attached to document.body
var navbar = domChanger(Nav, document.body);
var template = domChanger(Template, document.body);

window.onhashchange = function () {
  if (!window.location.hash) window.location.hash = '#files'
  setCurrent(window.location.hash)
}
window.onload = window.onhashchange

function setCurrent(url) {
  navbar.update();
  template.update();
  switch(url) {
    case '#shared':
      break
    case '#music':
      break
    case '#photos':
      break
    default:
  }
}
