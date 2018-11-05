<template>
    <div style=" color: white" id="sss">
      我是food页面
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
      <router-view></router-view>
    </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default {
  name: 'food'
}
</script>

<style scoped>

</style>
