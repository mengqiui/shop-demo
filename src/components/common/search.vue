<template>
  <div class="search-index">
    <div class="search-box">
      <div class="inputs">
        <i class="el-icon-search search-icon"></i>
        <input type="text" placeholder="search..." class="search-input">
        <b class="search-btn">搜索</b>
      </div>
      <div class="keys-list"><span>抽纸</span><span>洗衣液</span><span>梳子</span><span>牙刷</span></div>
    </div>
  </div>
</template>
<script>
export default {
  name:"search"
}
</script>
<style lang="scss" scoped>
  .search-index{
    .search-box{width: 530px;margin: 0 auto;padding: 20px 0 10px;display: flex;justify-content: center;align-items: center;flex-direction: column; position: relative;
      .inputs{background: #fff;box-sizing: border-box;border-radius: 2px;border: 2px solid;-o-border-image: linear-gradient(38deg,#ff4573,#ff6767) 2 2;border-image: linear-gradient(38deg,#ff4573,#ff6767) 2 2;height: 46px;width: 100%;display: flex;margin-bottom: 4px;position: relative;
        .search-icon{font-size: 16px;line-height: 1;color: #dbdbdb;font-weight: 400;position: absolute;left: 10px;width: 16px;height: 16px;top: 0;bottom: 0;margin: auto 0;}
        .search-input{flex: 1;height: 100%;box-sizing: border-box;font-size: 14px;line-height: 20px;color: #000;font-weight: 400;padding: 0 32px;
        &:active,&:focus{outline: none;}
        }
        .search-btn{height:100%;width:106px;display:flex;justify-content:center;align-items:center;flex-direction:row;background:linear-gradient(308deg,#ff4573,#ff6767);font-size: 20px;line-height: 28px;color: #fff;font-weight: 400;letter-spacing: 2px;cursor: pointer;}
      }
      .keys-list{display: flex;justify-content: flex-start;align-items: center;width: 100%;margin: 6px 0;
        span{font-size: 12px;line-height: 1;color: rgba(0,0,0,.35);font-weight: 400;padding: 0 10px;border-right: 1px solid #ddd;cursor: pointer;}
      }
    }
  }
</style>