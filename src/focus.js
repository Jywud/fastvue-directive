const focus = {
  inserted(el, binding) {
    setTimeout(() => {
      if (el.tagName.toLowerCase() === "input") {
        el.focus();
      }
    }, 50);
  },
};

export default focus;
