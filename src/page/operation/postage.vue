<template>
  <div class="common manage">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="包邮商品" name="first">
              <baoyou :btnShow="isShow" :plaInput="plaInput" :tableTypes="types" :tableData="tableData"></baoyou>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <el-button size="small" @click="comment" class="addBtn">添加</el-button>
    <el-button size="mini" class="addBtn2">预览展示效果</el-button>
    <div class="add">
        <add-goods :btnShow="btnShow" @fun="change" v-show="btnShow"></add-goods>
    </div>
  </div>
</template>

<script>
import baoyou from "./base/baoyou";
import addGoods from "../../common/addGoods"
import { getCommo } from "@/api/index.js";
export default {
  data() {
    return {
      tableData: [],
      activeName: "first",
      isShow: true,
      plaInput: "请输入商品编号或名称",
      btnShow : false,
      types: [
        { lable: "商品名称/编号/主分类", props: "tradeName", type: "normal" },
        { lable: "商品价格", props: "price", type: "normal" },
        { lable: "状态", props: "status", type: "normal" },
        { lable: "是否包邮", props: "mailed ", type: "normal" }
      ]
    };
  },
  components: {
    baoyou,
    addGoods
  },
  methods: {
    async getData() {
      let { tableData } = await getCommo();
      this.tableData = tableData;
    },
    comment() {   
      this.btnShow = true;
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