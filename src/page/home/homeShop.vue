<template>
  <div class="Shop common">
    <!-- <head-top></head-top> -->
    <h1>———— 5步快速开启独立商城 ————</h1>
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="grid-content bg-purple step">
          <div class="left">
            <img src="../../assets/style/image/shangc.png" alt />
          </div>
          <div class="center">
            <h1>首先,上传商品到店铺</h1>
            <p>前往商品中心,创建分类并添加商品,完成后就可以在页面中预览到自己的产品</p>
          </div>
          <div class="right">
            <el-button size="small" class="addBtn">去上传</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="grid-content bg-purple step">
          <div class="left">
            <img src="../../assets/style/image/dianp.png" alt />
          </div>
          <div class="center">
            <h1>接着,装修店铺门面</h1>
            <p>拖拽卡片,个性化搭建商铺,快速直观</p>
          </div>
          <div class="right">
            <el-button size="small" class="addBtn">去装修</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="grid-content bg-purple step">
          <div class="left">
            <img src="../../assets/style/image/wangl.png" alt />
          </div>
          <div class="center">
            <h1>顺便,绑定独立域名</h1>
            <p>绑定自己专属的独立域名,方便买家找到网站并下单</p>
          </div>
          <div class="right">
            <el-button size="small" class="addBtn">去设置</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="grid-content bg-purple step">
          <div class="left">
            <img src="../../assets/style/image/wul.png" alt />
          </div>
          <div class="center">
            <h1>然后,提供物流方案</h1>
            <p>按照重量,数量和固定价格设置模板,让每个商品顺利到达手中</p>
          </div>
          <div class="right">
            <el-button size="small" class="addBtn">去提供</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="10">
        <div class="grid-content bg-purple step">
          <div class="left">
            <img src="../../assets/style/image/shouk.png" alt />
          </div>
          <div class="center">
            <h1>最后,设置收款方式</h1>
            <p>实名认证并配置收款渠道,还差一步,就可以开始正式叛卖商品了</p>
          </div>
          <div class="right">
            <el-button size="small" class="addBtn">去设置</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import headTop from '../components/headTop'
export default {
  data() {
    return {};
  },
  components: {
    // headTop
  }
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.Shop {
  position: relative;
  h1 {
    margin-top: 3rem;
    width: 100%;
    text-align: center;
    padding-bottom: 2rem;
    font-size: 1.5rem;
    color: #333;
    font-weight: 350;
  }
  .step {
    position: relative;
    left: 72%;
    height: 5.5rem;
    margin-bottom: 1rem;
    border-left: 5px solid #7d7dc3;
    display: flex;
    position: relative;

    .left {
      width: 75px;
      height: 100%;
      position: absolute;

      img {
        // border: 1px red solid;
        position: absolute;
        left: 21.5px;
        top: 1.6rem;
      }
    }
    .center {
      flex: 1;
      margin-left: 75px;
      margin-right: 105px;
      h1 {
        font-size: 0.92rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
        padding-top: 13px;
        padding-bottom: 8px;
        text-align: left;
      }
      p {
        font-size: 0.8rem;
        color: #777;
        letter-spacing: 0.5px;
      }
    }
    .right {
      width: 105px;
      height: 100%;
      position: absolute;
      right: 0;
      .addBtn {
        width: 75px;
        background: #7d7dc3;
        color: #fff;
        font-size: 0.9rem;
        border: none;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 1.6rem;
      }
    }
  }
}
</style>
