<template>
  <div class="common manage">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="优惠券活动" name="first">
              <baoyou :btnShow="isShow" :plaInput="plaInput" :tableTypes="types" :tableData="tableData"></baoyou>
            </el-tab-pane>
            <el-tab-pane label="优惠券事件" name="second">
              <baoyou :btnShow="isShow" :plaInput="plaInput" :tableTypes="types" :tableData="tableData"></baoyou>
            </el-tab-pane>
            <el-tab-pane label="优惠券号码" name="third">
              <baoyou :btnShow="isShow" :plaInput="plaInput" :tableTypes="types" :tableData="tableData"></baoyou>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <el-button size="small" @click="addGoods" class="addBtn">添加</el-button>
  <el-button size="mini" class="addBtn2">预览展示效果</el-button>
  </div>
</template>

<script>
import baoyou from "./base/youhuiquan.vue";
import { getCommo } from "@/api/index.js";
export default {
  data() {
    return {
      tableData: [],
      activeName: "first",
      isShow: false,
      plaInput: "请输入活动名称或券号",
      types: [
        { lable: "优惠券活动", props: "coupon", type: "normal" },
        { lable: "券名(前缀、通用券)", props: "couponName", type: "normal" },
        { lable: "预览", props: "preview", type: "normal" },
        { lable: "已经使用", props: "use ", type: "normal" },
         { lable: "开始时间", props: "airTime ", type: "normal" },
        { lable: "结束时间", props: "endTime", type: "normal" },
      ]
    };
  },
  components: {
    baoyou
  },
  methods: {
    async getData() {
      let { tableData } = await getCommo();
      this.tableData = tableData;
    },
     //回复跳转路由
    addGoods() {   
      this.$router.push({ path: "/addCoupon" });
    }
  },
  activated() {
    this.getData();
  }
};
</script>

<style lang="less" scoped>
.manage {
  position: relative;
  .menttle {
    padding: 10px;
  }
  .addBtn {
    background: #7d7dc3;
    color: #fff;
    border: none;
    position: absolute;
    top: 55px;
    right: 15px;
  }
  .addBtn2 {
    position: absolute;
    top: 110px;
    right: 15px;
  }
}
</style>