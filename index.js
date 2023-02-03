let debounce = require('./src/debounce.js')

const directives = {
    debounce
}

module.exports = {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
    });
  },
};
