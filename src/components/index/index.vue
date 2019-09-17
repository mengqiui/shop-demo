<template>
  <!-- 搜索+滚动+商品分类 -->
  <section class="home-index" ref="homePage">
    <search></search>
    <div class="banner-index">
      <el-carousel :interval="5000" height="340px" indicator-position="none">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>Banner {{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="product-type">
      <div class="goods-type">
        <el-card class="box-card" body-style={background-color:#f5a623;}><i class="el-icon-menu"></i>商品分类</el-card>
      </div>
      <div class="module-type">
        <el-card class="box-card" v-for="item in 8" :key="item">
          <div class="item-type">
            <div class="detail-type"><strong>一毛专区</strong><span>比你再便宜一点儿</span></div>
            <div class="go-type">GO</div>
          </div>
        </el-card>
      </div>
    </div>
    <hotgoods></hotgoods>
  </section>
</template>
<script>
 import search from "../common/search"
 import hotgoods from "./hotGoods"
  export default {
    name: "index",
    components:{search,hotgoods},
    data(){
      return{}
    }
  }
</script>
<style lang="scss" scoped>
.home-index {min-height: 600px;margin-top: 50px;margin: 0 -20px;
  .product-type{width:100%;margin:20px auto;width:80%;display: flex; width: 1260px;
    .goods-type{width: 168px;margin-right: 6px; .el-card{width: 168px;height: 145px;border-radius: 4px;margin-right: 6px;display: flex;justify-content: center;align-items: center;flex-direction: column;}}
    .module-type{flex: 1;display: flex;flex-wrap: wrap;align-content:space-between;
      .box-card{display: flex;align-items: center;height: 68px; min-width: 264px;box-sizing: border-box;width: 264px;border-radius: 4px;margin-right: 10px;margin-bottom: 10px;padding: 0 12px;background: #fff;box-shadow: 0 3px 3px rgba(0,0,0,.1);
        .item-type{ flex: 1;display: flex;align-items: center;justify-content: space-between;
          .detail-type{ display: flex;flex-direction: column;justify-content: center;
            strong{ font-size: 18px;line-height: 25px;color: rgba(0,0,0,.85);font-weight: 700;margin-bottom: 2px;}
            span{font-size: 14px;line-height: 20px;color: rgba(0,0,0,.45);font-weight: 400;
            }
          }
          .go-type{width: 50px;height: 22px;
          }
        }
        &:nth-child(4),&:nth-child(8){
          margin-right:0;
        }
      }
    }
  }

}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

</style>




