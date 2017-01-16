<template>
  <div id="app">
    <router-link to="/learn1">learn1</router-link>
    <router-link to="/learn2">learn2</router-link>
    <router-link to="/learn3">learn3</router-link>
    <router-link to="/learn4">learn4</router-link>
    <router-link to="/learn5">learn5</router-link>
    <router-link to="/learn6">learn6</router-link>
    <router-link to="/learn7">learn7</router-link>
    <router-link to="/learn8">learn8</router-link>
    <router-link to="/learn9">learn9</router-link>
  </div>
</template>


<script>
  /* eslint-disable no-new */
  import learn1 from '../learn1'
  import style from './app.less'
  console.log(learn1, style)
  export default {
    name: 'app',
    components: {
      // learn1
    }
  }
  /* eslint-disable no-new */
</script>

