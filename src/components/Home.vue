<template>
  <div id="homemain">
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              @select="handleSelect"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>导航一</span>
                </template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
              </el-submenu>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>导航二</span>
                </template>
                <el-menu-item index="2-1"><router-link :to="{name: 'seller'}" >我的足迹</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link :to="{name: 'food'}" >我的足迹</router-link></el-menu-item>
              </el-submenu>
              <el-submenu index="3">
                <template slot="title">
                  <i class="el-icon-document"></i>
                  <span>导航三</span>
                </template>
                <el-menu-item index="3-1">选项1</el-menu-item>
                <el-menu-item index="3-2">选项2</el-menu-item>
                <el-menu-item index="3-3">选项3</el-menu-item>
                <el-menu-item index="3-4">选项4</el-menu-item>
                <el-menu-item index="3-5">选项5</el-menu-item>
                <el-menu-item index="3-6">选项6</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>导航四</span>
                </template>
                <el-menu-item index="4-1">选项1</el-menu-item>
                <el-menu-item index="4-2">选项2</el-menu-item>
              </el-submenu>
              <el-submenu index="5">
                <template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>导航五</span>
                </template>
                <el-menu-item index="5-1"><router-link :to="{name: 'pinpai'}" >品牌</router-link></el-menu-item>
                <el-menu-item index="5-2">选项2</el-menu-item>
              </el-submenu>
              <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                <span slot="title">导航六</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main id="doman">
          <router-view></router-view>
          <!--<Tz></Tz>-->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import Router from 'vue-router'
import Tz from '@/components/Tz'
Vue.use(Router)
export default {
  name: 'home',
  data () {
    return {
      searchCriteria: '',
      breadcrumbItems: ['导航一']
    }
  },
  components: {
    Tz
  },
  methods: {
    login () {
      this.$router.replace('/Login')
    },
    handleSelect (key, keyPath) {
      switch (key) {
        case '1-1':
          this.$router.push('/Login')
          this.breadcrumbItems = ['导航一选项1']
          break
        case '1-2':
          this.$router.push('/Login')
          this.breadcrumbItems = ['导航二选项2']
          break
      }
    }
  }
}
</script>

<style scoped>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    color: #333;
    text-align: center;
    /* line-height: 160px; */
  }
  #homemain{
    position: relative;
    width: 100%;
    height: 100%;
  }
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-container{
    height: 100%;
  }
  .el-menu-vertical-demo.el-menu{
    position: fixed;
    width: 200px;
    height: 100%;
    top: 0;
    bottom: 0;
  }
</style>
