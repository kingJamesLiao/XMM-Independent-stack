<template>
  <div class="common manage">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="上架中商品" name="first">
              <goods-list :btnShow="isShow" :plaInput="plaInput" :tableTypes="types" :tableData="tableData"></goods-list>
            </el-tab-pane>
            <el-tab-pane label="已下架商品" name="second">
              <goods-list :btnShow="isShow" :plaInput="plaInput" :tableTypes="types" :tableData="tableData"></goods-list>
            </el-tab-pane>
            <el-tab-pane label="回收站" name="third">
              <goods-list :btnShow="isShow" :plaInput="plaInput" :tableTypes="types" :tableData="tableData"></goods-list>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <el-button size="small" class="addBtn" @click="addGoods">添加</el-button>
  </div>
</template>

<script>
import goodsList from "../../common/goodsList";
import { getCommo } from "@/api/index.js";
export default {
  data() {
    return {
      tableData: [],
      activeName: "first",
      isShow: true,
      plaInput: "请输入商品名称",
      types: [
        { lable: "商品名称/编号/主分类", props: "tradeName", type: "normal" },
        { lable: "商品价格", props: "pries", type: "normal" },
        { lable: "业务数据", props: "busData", type: "normal" },
        { lable: "排序", props: "sort", type: "normal" }
      ]
    };
  },
  components: {
    goodsList
  },
  methods: {
    //回复跳转路由
    addGoods() {   
      this.$router.push({ path: "/addGoods" });
    },
    async getData() {
      let { tableData } = await getCommo();
      this.tableData = tableData;
      console.log(tableData)
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
}
</style>