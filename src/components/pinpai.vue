<template>
  <div>
    <div class="panel panel-primary">
      <div class="panel-heading">
        <h3 class="panel-title">添加品牌</h3>
      </div>
      <div class="panel-body form-inline">
        <label>
          ID:<input type="text" class="form-control" v-model="id">
        </label>
        <label>
          Name:<input type="text" class="form-control" v-model="name">
        </label>
        <input type="button" value="添加" class="btn btn-primary" @click="add">
        <label>
          输入搜索关键词:<input type="text" class="form-control" v-model="keywords">
        </label>
      </div>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="ID" :label-width="formLabelWidth">
            <el-input v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="ok">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <table class="table table-bordered table-hover table-striped">
      <thead >
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Ctime</th>
        <th>Operation</th>
      </tr>
      </thead>
      <tbody>
      <!--search方法-->
      <tr v-for="item in search(keywords)" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.ctime|dataFormat}}</td>
        <td> <el-button :plain="true" @click="del(item.id)">删除 </el-button><el-button @click="edit(item.id)">修改 </el-button> </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from 'jquery'
import Vue from 'vue'
import axios from 'axios'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
$(function () {
  // alert(123)
})
Vue.filter('dataFormat', function (dataStr) {
  var dt = new Date(dataStr)
  var yy = dt.getFullYear()
  var mm = dt.getMonth() + 1
  var dd = dt.getDate()
  return yy + '/' + mm + '/' + dd
})
export default {
  name: 'pinpai',
  beforeCreate () {
    var _this = this
    axios.get(' http://127.0.0.1:1555')
      .then(function (response) {
        console.log(response)
        if (response.data.success) {
          _this.$data.list = response.data.data
        }
      }
      )
      .catch(function (error) {
        console.log(error)
      })
      // this.list
  },
  data () {
    return {
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        id: '',
        name: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      id: '',
      name: '',
      keywords: '',
      list: []
    }
  },
  methods: {
    add () {
      var car = {id: this.id, name: this.name, ctime: new Date()}
      this.list.push(car)
    },
    del (id) {
      this.$message({
        message: '恭喜你，删除成功',
        type: 'success'
      })
      this.list.some((item, i) => {
        if (item.id === id) {
          this.list.splice(i, 1)
          return true
        }
      })
    },
    edit (id) {
      var _this = this
      this.list.some((item, i) => {
        if (item.id === id) {
          // console.log(newsl.name)
          _this.form.id = _this.list[i].id
          _this.form.name = _this.list[i].name
          _this.dialogFormVisible = true
          return true
        }
      })
    },
    ok () {
      var _this = this
      _this.list.some((item, i) => {
        if (item.id === _this.form.id) {
          // console.log(newsl.name)
          // this.list[i].id = this.from.id
          _this.list[i].name = _this.form.name
          _this.dialogFormVisible = false
        }
      })
    },
    search (keywords) {
      var newlist = []
      this.list.forEach(item => {
        if (item.name.indexOf(keywords) !== -1) {
          newlist.push(item)
        }
      })
      return newlist
    }
  }
}
</script>

<style scoped>

</style>
