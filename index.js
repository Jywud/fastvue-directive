let debounce = require('./src/debounce.js')
let copy = require('./src/copy.js')
let LazyLoad = require('./src/LazyLoad.js')
let waterMarker = require('./src/waterMarker.js')
let draggable = require('./src/draggable.js')
let emoji = require('./src/emoji.js')

const directives = {
    debounce,
    copy,
    LazyLoad,
    waterMarker,
    draggable,
    emoji
}

module.exports = {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
