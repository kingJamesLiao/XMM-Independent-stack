<template>
  <div class="pay common">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="收款单据" name="first">
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
      plaInput : '请输入订单帐号或流水号',
      isShow : false,
      types : [
        { lable: "流水号", props: "serial", type: "normal" },
        { lable: "订单号", props: "orderId", type: "normal" },
        { lable: "第三方流水号", props: "serialThird", type: "normal" },
        { lable: "支付方式", props: "pay", type: "normal" },
        { lable: "支付金额", props: "payamou", type: "normal" },
        { lable: "状态", props: "status", type: "normal" },
        { lable: "备注", props: "remark", type: "normal" },
        { lable: "操作", props: "oper", type: "normal" }
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

.pay {
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