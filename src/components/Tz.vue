<template>
  <div class="navbar">
    <ul id="main">
      <h1>商品1</h1>
    </ul>
    <!-- 路由匹配到的组件将显示在这里 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'tz'
}
</script>

<style scoped>
.navbar{
  width: 100px;
  height: 100px;
background-color: white}
</style>
