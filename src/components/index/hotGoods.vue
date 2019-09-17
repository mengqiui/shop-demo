<template>
    <!-- hot goods -->
    <section class="goods-module">
      <div class="goods-hot">
        <div class="goods-title">
          <strong>热销产品</strong>
          <span>多种商品满足你的需求</span>
        </div>
        <div class="goods-box">
          <div class="goods">
            <img src="http://baoyitech.oss-cn-hangzhou.aliyuncs.com/155790081965413cdb71f58255a6ba901942b03c8af3b" alt="每日更新新品上市" class="day-hot-img">
          </div>
          <div class="goods-list">
            <router-link :to="{path:'/giftShop/shopDetail',query:{ goodinfo:item }}" v-for="item in 8" :key="item" class="goods-card">
              <good>
                <img slot="img" src="http://baoyitech.oss-cn-hangzhou.aliyuncs.com/1565167717406e334f8557bd4bd277e0bea1e8270f513" alt="纸否抽纸">
                <p slot="title" class="good-title">我是礼品商城</p>
                <!-- <div slot="info"><span>重量：16.5kg</span></div> -->
              </good>
            </router-link>
          </div>
        </div>
      </div>       
      <div class="goods-hot">
        <div class="goods-title">
          <strong>新品上新</strong>
          <span>多种商品满足你的需求</span>
        </div>
        <div class="news-list">
          <router-link :to="{path:'/giftShop/shopDetail',query:{ goodinfo:item }}" v-for="item in 5" :key="item" class="news-card">
            <good>
              <img slot="img" src="http://baoyitech.oss-cn-hangzhou.aliyuncs.com/1565167717406e334f8557bd4bd277e0bea1e8270f513" alt="纸否抽纸" class="news-img">
              <p slot="title" class="news-title">新品</p>
            </good>
          </router-link>
        </div>
      </div>
    </section>
</template>
<script>
import good from '../common/good'
export default {
  name: "hotgoods",
  data() {
    return {};
  },
  components:{
    good
  }
}
</script>
<style lang="scss" scoped>
  .goods-module{background-color:rgb(244, 244, 244);width:100%;
    .goods-hot{width:80%;width:1260px;margin:0 auto;
      .goods-title{height: 40px;padding: 8px 0;display: flex;align-items: center;
        strong{margin-right:12px;}
        span{font-size: 12px;line-height: 17px;color: rgba(0,0,0,.45);font-weight: 400;}
      }
      .goods-box{display: flex;
        .goods{width: 240px;height: 756px;position: relative;
          .day-hot-img{position: absolute;top: 0;left: 0;width: 100%;height: 100%;}
        }
        .goods-list{flex: 1;display: flex;flex-wrap: wrap;position: relative;
          .goods-card{text-decoration: none;width: 240px;height: 370px;display: flex;flex-direction: column;padding: 5px;box-sizing: border-box;border: 1px solid rgba(0,0,0,.1);border-radius: 2px;margin-left: 15px;transition: all .2s;background: #fff;
          &:nth-child(-n+4){margin-bottom: 15px;}
          }
        }
      }
        .news-list{-webkit-box-flex: 1;-ms-flex: 1;flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    position: relative;
        .news-card{margin-right:22px;
        width: 234px;
    display: flex;
    flex-direction: column;
    transition: all .2s;
    padding: 3px;
    box-sizing: border-box;
        &:last-child{
          margin-right:0;
        }
        // text-decoration: none;width:230px;height: 370px;display: flex;flex-direction: column;padding: 5px;box-sizing: border-box;border: 1px solid rgba(0,0,0,.1);border-radius: 2px;transition: all .2s;background: #fff;
        
        }
      }
    }
  }

</style>