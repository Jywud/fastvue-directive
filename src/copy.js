const copy = {
  bind(el, { value }) {
    el.$value = value.text;
    el.$onSuccess = value.onSuccess;
    el.handler = () => {
      if (!el.$value)  return;

      const textarea = document.createElement("textarea");
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = "readonly";
      textarea.style.position = "absolute";
      textarea.style.left = "-9999px";
      textarea.value = el.$value;

      document.body.appendChild(textarea);
      // 选中值并复制
      textarea.select();
      const result = document.execCommand("Copy");

      // 执行自定义的成功回调
      if (result && typeof el.$onSuccess === "function") {
        el.$onSuccess();
      }
      document.body.removeChild(textarea);
    };

    el.addEventListener("click", el.handler);
  },
  // 当传进来的值更新的时候触发
  componentUpdated(el, { value }) {
    el.$value = value.text;
    el.$onSuccess = value.onSuccess;
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind(el) {
    el.removeEventListener("click", el.handler);
  },
};
