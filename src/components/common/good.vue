<template>
  <div class="good-simple" >
    <slot name="img"></slot>
    <slot name="title"></slot>
    <slot name="info"></slot>
    <!-- <img src="http://baoyitech.oss-cn-hangzhou.aliyuncs.com/1565167717406e334f8557bd4bd277e0bea1e8270f513" alt="纸否抽纸">
    <p>我是礼品商城</p> -->
  </div>
</template>
<script>
export default {
  name: 'good'
}
</script>
<style lang="scss" scoped>
  .good-simple{
    img{width: 230px;
    height: 243px;
    margin-bottom: 7px;
    align-self: center;
    }
    .good-title{font-size: 14px;
    line-height: 16px;
    color: rgba(0,0,0,.65);
    font-weight: 400;
    height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    margin-bottom: 8px;
    box-sizing: border-box;
    letter-spacing: .7px;
    -webkit-box-orient: vertical;
    }
    .new-img{
      width: 227px;
    height: 227px;
    margin-bottom: 2px;
    }
    .news-title{
font-size: 14px;
    line-height: 20px;
    color: rgba(0,0,0,.55);
    font-weight: 400;
    letter-spacing: .7px;
    margin-bottom: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    height: 40px;
    -webkit-box-orient: vertical;
    }
    div{
          padding: 7px 0 2px;
    display: flex;
    align-items: flex-end;
    border-top: 1px solid rgba(0,0,0,.1);
    span{
          font-size: 14px;
    line-height: 20px;
    color: rgba(0,0,0,.35);
    font-weight: 400;
    letter-spacing: 3px;
    margin-right: 5px;
    }
    }
  }
</style>