const debounce = {
  inserted(el, { arg = 1000, value }) {
    let timer;
    let timeout = Number(arg);
    el.addEventListener("click", () => {
      if (timer) {
        clearTimeout(timer);
      }

      timer = setTimeout(() => {
        if (typeof value === "function") {
          value();
        }
      }, timeout);
    });
  },
};

export default debounce;
