<template>
  <div class="goods common">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="发货记录" name="first">
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
      plaInput : '请输入订单或物流单号',
      isShow : false,
      types : [
        { lable: "订单号", props: "orderId", type: "normal" },
        { lable: "物流公司/单号", props: "track", type: "normal" },
        { lable: "支付时间/发货时间", props: "delTime", type: "normal" },
        { lable: "上线时间/签收时间", props: "signTime", type: "normal" },
        { lable: "时效", props: "aging", type: "normal" },
        { lable: "追踪", props: "trace", type: "normal" }
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

.goods {
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