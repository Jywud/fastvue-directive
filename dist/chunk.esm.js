var e={install:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{default:""},o=n.default;t.directive("lazy",{bind:function(t,n,i){var a=i.data.attrs["data-src"];e.init(t,a,o)},inserted:function(t){IntersectionObserver?e.observe(t):e.listenerScroll(t)}})},init:function(e,t,n){e.setAttribute("data-src",t),e.removeAttribute("src")},observe:function(e){new IntersectionObserver((function(t){var n=e.dataset.src;t[0].isIntersecting&&n&&(e.src=n,e.removeAttribute("data-src"))})).observe(e)},listenerScroll:function(t){var n=e.throttle(e.load,300);e.load(t),window.addEventListener("scroll",(function(){n(t)}))},load:function(e){var t=document.documentElement.clientHeight,n=e.getBoundingClientRect().top,o=e.getBoundingClientRect().bottom,i=e.dataset.src;n-t<0&&o>0&&i&&(e.src=i,e.removeAttribute("data-src"))},throttle:function(e,t){var n,o;return function(){for(var i=arguments.length,a=new Array(i),u=0;u<i;u++)a[u]=arguments[u];var r=Date.now(),c=this;if(o||(o=r),clearTimeout(n),r-o>t)return o=r,e.apply(c,a),void clearTimeout(n);n=setTimeout((function(){o=Date.now(),n=null,e.apply(c,a)}),t)}}};var t={debounce:{inserted:function(e,t){var n,o=t.arg,i=void 0===o?1e3:o,a=t.value,u=Number(i);e.addEventListener("click",(function(){n&&clearTimeout(n),n=setTimeout((function(){"function"==typeof a&&a()}),u)}))}},copy:{bind:function(e,t){var n=t.value;e.$value=n.text,e.$onSuccess=n.onSuccess,e.handler=function(){if(e.$value){var t=document.createElement("textarea");t.readOnly="readonly",t.style.position="absolute",t.style.left="-9999px",t.value=e.$value,document.body.appendChild(t),t.select(),document.execCommand("Copy")&&"function"==typeof e.$onSuccess&&e.$onSuccess(),document.body.removeChild(t)}},e.addEventListener("click",e.handler)},componentUpdated:function(e,t){var n=t.value;e.$value=n.text,e.$onSuccess=n.onSuccess},unbind:function(e){e.removeEventListener("click",e.handler)}},LazyLoad:e,waterMarker:{bind:function(e,t){!function(e,t,n,o){var i=document.createElement("canvas");t.appendChild(i),i.width=200,i.height=150,i.style.display="none";var a=i.getContext("2d");a.rotate(-20*Math.PI/180),a.font=n||"16px Microsoft JhengHei",a.fillStyle=o||"rgba(180, 180, 180, 0.3)",a.textAlign="left",a.textBaseline="Middle",a.fillText(e,i.width/10,i.height/2),t.style.backgroundImage="url("+i.toDataURL("image/png")+")"}(t.value.text,e,t.value.font,t.value.textColor)}},draggable:{inserted:function(e){e.style.cursor="move",e.onmousedown=function(t){var n=t.pageX-e.offsetLeft,o=t.pageY-e.offsetTop;document.onmousemove=function(t){var i=t.pageX-n,a=t.pageY-o,u=document.body.clientWidth-parseInt(window.getComputedStyle(e).width),r=document.body.clientHeight-parseInt(window.getComputedStyle(e).height);i<0?i=0:i>u&&(i=u),a<0?a=0:a>r&&(a=r),e.style.left=i+"px",e.style.top=a+"px"},document.onmouseup=function(){document.onmousemove=document.onmouseup=null}}}},emoji:{bind:function(e,t,n){var o,i,a=/[^\u4E00-\u9FA5|\d|\a-zA-Z|\r\n\s,.?!，。？！…—&$=()-+/*{}[\]]|\s/g,u=(i="input",(o=e).tagName.toLowerCase()===i?o:o.querySelector(i));e.$inp=u,u.handle=function(){var e=u.value;u.value=e.replace(a,""),function(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}(u,"input")},u.addEventListener("keyup",u.handle)},unbind:function(e){e.$inp.removeEventListener("keyup",e.$inp.handle)}},focus:{inserted:function(e,t){setTimeout((function(){"input"===e.tagName.toLowerCase()&&e.focus()}),50)}}},n={install:function(e){Object.keys(t).forEach((function(n){e.directive(n,t[n])}))}};export{n as default};
