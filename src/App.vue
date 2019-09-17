<template>
  <div id="app">
    <el-container>
      <el-header><pagehead :isfixed="isfixed"></pagehead></el-header>
      <el-main ref="mainpage"><router-view/></el-main>
      <el-footer><pagefoot></pagefoot></el-footer>
    </el-container>
  </div>
</template>

<script>
import pagehead from './components/common/header'
import pagefoot from './components/common/footer'
export default {
  name: 'App',
  data(){
    return{isfixed:false}
  },
  components:{pagehead,pagefoot},
  methods:{
    handleScroll(){
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let offsetTop = this.$refs.mainpage.$el.offsetTop;
      scrollTop > offsetTop ? this.isfixed = true : this.isfixed = false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="scss">
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color:$fcolor;
    font-size:$fsize;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
</style>
