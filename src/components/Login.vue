<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="姓名">
        <el-input v-model="formname" @blur="foname"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model.lazy="formpassword"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即登录</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      formname: 'admin',
      formpassword: 'admin',
      namet: '',
      pass: ''
    }
  },
  methods: {
    foname () {
      debugger
      if (this.formname !== 'admin') {
        alert('账号不正确')
      } else {
        this.namet = true
      }
    },
    onSubmit () {
      this.foname()
      if (this.namet === true) {
        this.$router.replace('/Home')
      }
    }
  }
}
</script>

<style scoped>
.el-form{
  width: 400px;
  height: auto;
  margin: 120px auto;
  background-color: white;
;}

</style>
