<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>import Hello from './components/Hello'
export default {
  name: 'App',
  components: {
    Hello
  }
}
</script>

<style>
  body,html{
    height: 100%;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*background-color: #2c3e50;*/
  margin-top: 0px;
  height: 100%;
  overflow: hidden;
}
</style>
