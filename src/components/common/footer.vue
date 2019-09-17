<template>
  <div class="footer-box">
    <el-row>
      <el-col :span="20" :push="2">
        <section class="goods-cell">
          <div class="cell-wrap">
            <div class="cell-item">
              <img src="http://baoyitech.oss-cn-hangzhou.aliyuncs.com/1557876892000f6d597724cf9b0f51ba267bb4c5ced51" alt="降成本" class="cell-img" />
              <div class="desc-text">
                <strong>降成本</strong>
                <span>帮你降低50%发货成本，省去你能想到的所有发货成本</span>
              </div>
            </div>
            <div class="cell-item">
              <img src="http://baoyitech.oss-cn-hangzhou.aliyuncs.com/15578768920003442e7660e90350231602f3e3db2ffe4" alt="去库存" class="cell-img" />
              <div class="desc-text">
                <strong>去库存</strong>
                <span>回收库存/去礼品库存/去自有产品库存</span>
              </div>
            </div>
            <div class="cell-item">
              <img src="http://baoyitech.oss-cn-hangzhou.aliyuncs.com/1557876892000535e69ad1dcff30cae0a0a04e3b3edef" alt="保品质" class="cell-img" />
              <div class="desc-text">
                <strong>保品质</strong>
                <span>同样价格，给你更好的品质；同样品质，给你最低的价格</span>
              </div>
            </div>
            <div class="cell-item">
              <img src="http://baoyitech.oss-cn-hangzhou.aliyuncs.com/1557876892000e921d73f9dbd0e62d90282c19497c237" alt="多选择" class="cell-img" />
              <div class="desc-text">
                <strong>多选择</strong>
                <span>非配重礼品/可配重礼品/高端礼品等</span>
              </div>
            </div>
          </div>
        </section>
        </el-col>
    </el-row>
    <footer class="footer">
      <div class="copyRight">
        <span>Copyright@2017-2019 All Rights Reserved.</span>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "pagefoot"
};
</script>
<style lang="scss" scoped>
.footer-box {border-top: 1px solid rgba(0, 0, 0, 0.05);
.goods-cell {
  background: #fff;
}
.cell-wrap {
  display: flex;
  align-items: center;
  padding: 30px 0;
}
.cell-wrap .cell-item {
  margin-right: 65px;
  display: flex;
  flex: 1;
}
.cell-wrap .cell-item:last-child {
  margin-right: 0;
}
.cell-wrap .cell-item .cell-img {
  width: 50px;
  min-width: 50px;
  height: 56.5px;
  margin-right: 12px;
}
.cell-wrap .cell-item .desc-text {
  display: flex;
  flex-direction: column;
}
.cell-wrap .cell-item .desc-text strong {
  font-size: 14px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 700;
  font-family: 苹方;
  margin-bottom: 2px;
}
.cell-wrap .cell-item .desc-text span {
  font-size: 12px;
  line-height: 17px;
  color: rgba(0, 0, 0, 0.35);
  font-weight: 400;
  letter-spacing: 1px;
}
.footer {
  padding: 20px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
}

.footer .copyRight {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.footer .copyRight span {
  font-size: 12px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 400;
  margin-bottom: 4px;
}
.footer .copyRight .icpText {
  font-size: 12px;
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-weight: 400;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer .copyRight .icpText .icpIcon {
  width: 14px;
  height: 16px;
  background-image: url(http://baoyitech.oss-cn-hangzhou.aliyuncs.com/d23ca154100b4e0ed8bffad5a31ab55b1564974607558);
  background-size: 100% 100%;
  margin-right: 10px;
}
.footer .copyRight .icpText:hover {
  color: #f64f6f;
}
}
</style>