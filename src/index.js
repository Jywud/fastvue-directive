import debounce from './debounce.js'
import copy from './copy.js'
import LazyLoad from './LazyLoad.js'
import waterMarker from './waterMarker.js'
import draggable from './draggable.js'
import emoji from './emoji.js'
import focus from './focus.js'

const directives = {
    debounce,
    copy,
    LazyLoad,
    waterMarker,
    draggable,
    emoji,
    focus
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
