<template>
  <div class="common manage">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="商品分类" name="first">
              <classify-manage :btnShow="isShow" :plaInput="plaInput" :types="types"></classify-manage>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <el-button class="addBtn">添加主分类</el-button>
    <el-button class="addBtn2">批量添加主分类</el-button>
  </div>
</template>

<script>
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
        { lable: "序号", props: "order", type: "normal" },
        { lable: "分类名称", props: "sortName", type: "normal" },
        { lable: "属性模板", props: "tamp", type: "normal" },
        { lable: "排序", props: "sort", type: "normal" }
      ]
    };
  },
  components: {
    classifyManage
  },
  methods: {}
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
    background: #ff5858;
    color: #fff;
    border: none;
    position: absolute;
    top: 55px;
    right: 130px;
  }
}
</style>