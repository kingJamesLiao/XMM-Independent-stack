<template>
  <div class="ment common">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName">
            <el-tab-pane label="订单列表" name="first">
              <list :tableData="tableData" :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
            </el-tab-pane>
            <el-tab-pane label="未付款" name="second">
              <list :tableData="notPay" :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
            </el-tab-pane>
            <el-tab-pane label="支付失败" name="third">
              <list :tableData="defaPay" :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
            </el-tab-pane>
            <el-tab-pane label="支付确认中" name="fourth">
              <list :tableData="payCon" :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
            </el-tab-pane>
            <el-tab-pane label="已付款" name="fifth">
              <list :tableData="paidPay" :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
            </el-tab-pane>
            <el-tab-pane label="已发货" name="sixth">
              <list :tableData="shipped" :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
            </el-tab-pane>
            <el-tab-pane label="已取消" name="seventh">
              <list :tableData="canceled" :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
            </el-tab-pane>
            <el-tab-pane label="已完成" name="eighth">
              <list :tableData="donePay" :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getMent } from "@/api/index.js";

import list from "../../common/commoList";
export default {
  data() {
    return {
      activeName: "first",
      tableData: [], //全部数据
      notPay: [], //未付款
      defaPay: [], //支付失败
      payCon: [], //支付确认中
      paidPay: [], //已付款
      shipped: [], //已发货
      canceled: [], //已取消
      donePay: [], //已完成
      types: [ //数据类型
        { lable: "商品", props: "commo", type: "normal" },
        { lable: "金额", props: "money", type: "normal" },
        { lable: "订单状态", props: "address", type: "normal" },
        { lable: "支付方式", props: "pay", type: "normal" },
        { lable: "会员名", props: "id", type: "normal" }
      ],
      isShow : true, //启动高级搜索
      plaInput : '请输入邮箱或订单号' //动态input框默认文本
    };
  },
  components: {
    list
  },
  activated() {
    this.getData();
  },
  methods: {
    async getData() {
      let { tableData } = await getMent();
      let notPay, defaPay, payCon, paidPay, shipped, canceled, donePay;
      notPay = tableData.filter(item => {
        return item.pay === "未付款";
      });
      defaPay = tableData.filter(item => {
        return item.pay === "支付失败";
      });
      payCon = tableData.filter(item => {
        return item.pay === "支付确认中";
      });
      paidPay = tableData.filter(item => {
        return item.pay === "已付款";
      });
      shipped = tableData.filter(item => {
        return item.address === "已发货";
      });
      canceled = tableData.filter(item => {
        return item.address === "已取消";
      });
      donePay = tableData.filter(item => {
        return item.address === "已完成";
      });
      this.tableData = tableData;
      this.notPay = notPay;
      this.defaPay = defaPay;
      this.payCon = payCon;
      this.paidPay = paidPay;
      this.shipped = shipped;
      this.canceled = canceled;
      this.donePay = donePay;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.ment {
  .menttle {
    padding: 10px;
  }
}
</style>