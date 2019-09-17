<template>
  <el-row>
    <el-col :span="20" :push="2">
      <el-menu :default-active="defaultActive"
       :class="isfixed?'isfixed':''"  
       class="head-box"  mode="horizontal" active-text-color="#f64f6f" text-color="#666" router >
        <el-menu-item class="logo-box">
          <img src="../../assets/logo.png" />
          <p class="logo-name">
            <strong>拾货</strong>
            <span>shihuo.com</span>
          </p>
        </el-menu-item>
        <el-menu-item index="/">首页</el-menu-item>
        <el-menu-item index="/giftShop">礼品商城</el-menu-item>
        <el-menu-item index="/admin">我的后台</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "pagehead",
  props: ['isfixed'],
  data() {
    return {};
  },
  computed:{
    defaultActive(){
      let activeVal = this.$route.path;
      let pathArr = this.$route.path.split("/").reverse().filter(d=>d);
      if(pathArr.length>=2){
        if(pathArr.includes('giftShop')){ activeVal = '/giftShop'; }
        if(pathArr.includes('admin')){ activeVal = '/admin'; }
      }
      return activeVal;
    }
  }
}
</script>
<style lang="scss" scoped>
.head-box{position: absolute;width: 100%;top: 0;left: 0;z-index: 998; opacity: 1;-webkit-animation: slideup 0.5s linear;animation: slideup 0.5s linear;
  .el-menu-item:not(:first-child){margin:0 40px;font-size:18px;}
  .logo-box{display: flex;justify-content: center;align-items: center;flex-direction: row;cursor: pointer;
    img{width:50px;height:50px;margin-right: 6px;}
    .logo-name{display: flex;justify-content: center;align-items: center;flex-direction: column;align-items: flex-start;max-width: 180px;
      strong{font-size: 24px;line-height: 30px;color: rgb(99, 72, 72);font-weight: 400; width: 100%;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
      span{font-size: 12px;line-height: 14px;color: #666;font-weight: 400; width: 100%;white-space: nowrap;text-overflow: ellipsis;overflow: hidden;}
    }
  }
}
.isfixed{
  position: fixed;padding-left:8.3%;
  -webkit-animation: sildedown 0.5s linear;
  animation: sildedown 0.5s linear;
}
@-webkit-keyframes slideup {
  0% {
    opacity: 0;
    top: -68px;
  }
  to {
    opacity: 1;
    top: 0;
  }
}
@keyframes slideup {
  0% {
    opacity: 0;
    top: -68px;
  }
  to {
    opacity: 1;
    top: 0;
  }
}

@-webkit-keyframes sildedown {
  0% {
    top: -68px;
  }
  to {
    top: 0;
  }
}
@keyframes sildedown {
  0% {
    top: -68px;
  }
  to {
    top: 0;
  }
}
</style>