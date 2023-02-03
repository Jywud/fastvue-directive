# @fastvue/directive

##### vue2 的常用指令集合

### 安装

##### 使用 npm

```javascript
npm install @fastvue/directive --save
```

##### 使用 yarn

```javascript
yarn add @fastvue/directive
```

### 使用

```javascript
import Vue from "vue";
import Directives from "@fastvue/directive";
Vue.use(Directives);
```

### 例子

#### 按钮点击防抖

```js
<template>
  // 不传时间默认1000ms
  <button v-debounce="debounceClick">防抖按钮</button>
  <button v-debounce:2000="debounceClick">防抖按钮</button>
</template>

<script>
export default {
  methods: {
    debounceClick () {
      console.log('触发一次')
    }
  }
}
</script>

```

#### 一键复制文本

```js
<template>
  <button v-copy="copyConfig">复制</button>
</template>

<script> export default {
    data() {
      return {
        copyConfig: {
          text: '复制的内容XXX', //复制的内容
          onSuccess: ()=> {}  //复制成功后的回调
        }
      }
    },
  }
</script>
```

#### 图片懒加载

将组件内 标签的 src 换成 v-LazyLoad
```js
<img v-LazyLoad="xxx.jpg" />
```

#### 添加水印

使用，设置水印文案，颜色，字体大小即可
```js
<template>
  <div v-waterMarker="{text:'dayu',textColor:'#ddd'}"></div>
</template>
```
#### 元素拖拽

使用: 在 Dom 上加上 v-draggable 即可
```js
<template>
  <div v-draggable></div>
</template>
```

#### 限制输入框特殊字符输入

将需要校验的输入框加上 v-emoji 即可
```js
<template>
  <input type="text" v-model="note" v-emoji />
</template>
```
