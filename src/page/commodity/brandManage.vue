<template>
  <div class="common manage">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="品牌列表" name="first">
              <classify-manage :btnShow="isShow" :plaInput="plaInput" :types="types"></classify-manage>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <el-button size="small" class="addBtn" @click="addGoods">添加</el-button>
    <el-button size="mini" class="addBtn2">品牌索引页</el-button>
  </div>
</template>

<script>
import goodsList from "../../common/goodsList";
import classifyManage from "../../common/classifyManage";
import { getCommo } from "@/api/index.js";
export default {
  data() {
    return {
      tableData: [],
      activeName: "first",
      isShow: false,
      plaInput: "请输入分类名称",
      types: [
        { lable: "品牌名称", props: "brandName", type: "normal" },
        { lable: "关联商品", props: "goods", type: "normal" },
        { lable: "排序", props: "sort", type: "normal" }
      ]
    };
  },
  components: {
    classifyManage
  },
  methods: {
    //回复跳转路由
    addGoods() {   
      this.$router.push({ path: "/brankList" });
    }
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