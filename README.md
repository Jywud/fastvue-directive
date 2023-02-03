# @fastvue/directive
##### vue2的常用指令集合

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
import Vue from 'vue'
import Directives from '@fastvue/directive'
Vue.use(Directives)
```

### 例子
```js
<template>
// 不传时间默认1000ms
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