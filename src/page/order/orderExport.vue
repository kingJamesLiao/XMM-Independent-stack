<template>
  <div class="export common">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="订单导出" name="first">
              <list  :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
            </el-tab-pane>
            <el-tab-pane label="导出格式" name="second">
              <list  :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
            </el-tab-pane>
          </el-tabs>
           
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import list from "../../common/commoList";
export default {
  data() {
    return {
      activeName: "first",
      plaInput : '请输入邮箱或订单号',
      isShow : true,
      types : [
        { lable: "设备/订单号", props: "orderId", type: "normal" },
        { lable: "会员名", props: "id", type: "normal" },
        { lable: "业务员", props: "clerk", type: "normal" },
        { lable: "支付方式/时间", props: "delTime", type: "normal" },
        { lable: "金额", props: "money", type: "normal" },
        { lable: "订单状态", props: "orderStatus", type: "normal" },
        { lable: "业务来源", props: "source", type: "normal" }
      ] 
    };
  },
  components : {
      list
  }
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";

.export {
  .menttle {
    padding: 10px;

    .inp {
      width: 20rem;
      height: 50px;
      border-radius: 2px;
      display: flex;
      .sousuo {
        border: 1px solid #dcdfe6;
        width: 8rem;
        height: 40px;
        margin-left: 2px;
        border-radius: 4px;
        font-size: 0.9rem;
        color: #aaa;
        background: none;
        text-align: center;
        line-height: 40px;
      }
    }
  }
}
</style>