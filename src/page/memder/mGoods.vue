<template>
  <div class="common manage">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="所有评论" name="first">
              <goods-comments :btnShow="isShow" :plaInput="plaInput" :tableData="tableData"></goods-comments>
            </el-tab-pane>
            <el-tab-pane label="隐藏评论(2)" name="second">
              <goods-comments :btnShow="isShow" :plaInput="plaInput" :tableData="tableData"></goods-comments>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <el-button size="small" class="addBtn" @click="comment">添加</el-button>
    <el-button size="mini" class="addBtn2">预览展示效果</el-button>
    <div class="add">
        <add-goods :btnShow="btnShow" @fun="change" v-show="btnShow"></add-goods>
    </div>
  </div>
</template>

<script>
import addGoods from "../../common/addGoods"
import goodsComments from "../../common/goodsComments";
import { getCommo } from "@/api/index.js";
export default {
  data() {
    return {
      tableData: [],
      activeName: "first",
      isShow: true,
      plaInput: "请输入商品编号或名称",
      btnShow : false
    };
  },
  components: {
    goodsComments,
    addGoods
  },
  methods: {
    //回复跳转路由
    comment() {   
      this.btnShow = true;
    },
    async getData() {
      let { tableData } = await getCommo();
      this.tableData = tableData;
    },
    change(data){
      this.btnShow = data;
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
    .add{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 50%;
        margin-top: -6rem;
        z-index: 99;
    }
}
</style>