<template>
  <div class="common manage">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="新闻管理" name="first">
              <baoyou :btnShow="isShow" :plaInput="plaInput" :tableTypes="types" :tableData="tableData"></baoyou>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <el-button size="small" @click="addNews" class="addBtn">添加</el-button>
    <el-button size="mini" class="addBtn2">预览展示效果</el-button>
  </div>
</template>

<script>
import baoyou from "./base/newsManage.vue";
import { getCommo } from "@/api/index.js";
export default {
  data() {
    return {
      tableData: [],
      activeName: "first",
      isShow: true,
      plaInput: "请输入新闻标题",
      types: [
        { lable: "标题", props: "title", type: "normal" },
        { lable: "创建时间", props: "createTime", type: "normal" }
      ]
    };
  },
  components: {
    baoyou
  },
  methods: {
     //回复跳转路由
    addNews() {   
      this.$router.push({ path: "/addNews" });
    },
    async getData() {
      let { tableData } = await getCommo();
      this.tableData = tableData;
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