<template>
  <div class="page common">
    <h1>支付方式</h1>
    <el-button class="addBtn">+添加</el-button>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple header">
          <div class="left">
            <img src="../../assets/style/image/paypal.jpg" alt />
            <p>Paypal</p>
            <div class="open">已开启</div>
          </div>
          <div class="right">
            <img src="../../assets/style/image/del.png" alt />
            <img  @click="addPay" src="../../assets/style/image/redact.png" alt />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods : {
    addPay(){
      this.$router.push({path : '/editPay'})
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  padding-left: 40px;
  padding-top: 0;
  position: relative;
  h1 {
    padding: 20px 0;
    font-size: 1.4rem;
    font-weight: 500;
  }
  .addBtn {
    width: 7rem;
    height: 2.2rem;
    background: #7d7dc3;
    color: #fff;
    border: none;
    position: absolute;
    border-radius: 2px;
    top: 15px;
    right: 0px;
    letter-spacing: 2px;
  }
  .header {
    height: 4rem;
    position: relative;

    .left {
      width: 20rem;
      height: 100%;
      position: absolute;
      margin-left: 20px;
      img {
        display: block;
        width: 8rem;
        height: 90%;
        top: 2px;
        left: 5px;
        position: absolute;
      }
      p {
        padding-left: 9rem;
        line-height: 4rem;
        font-size: 0.9rem;
        color: #333;
      }
      .open {
        margin-left: 5px;
        width: 3rem;
        height: 1.1rem;
        background-color: #ed592b;
        border-radius: 50px;
        position: absolute;
        left: 12rem;
        top: 1.45rem;
        color: #fff;
        font-size: 0.4rem;
        text-align: center;
        line-height: 1.1rem;
      }
    }
    .right {
      width: 20rem;
      height: 100%;
      position: absolute;
      right: 0;
      padding-right: 15px;
      img {
        width: 1.6rem;
        display: block;
        float: right;
        padding-top: 1.2rem;
        padding-right: 20px;
        cursor: pointer;
      }
    }
  }
}
</style>