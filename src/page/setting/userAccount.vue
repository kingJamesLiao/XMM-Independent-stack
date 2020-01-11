<template>
  <div class="common manage">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="员工账号" name="first">
              <user-id
                :tableTypes="types"
                :tableData="tableData"
              ></user-id>
            </el-tab-pane>
            <el-tab-pane label="登录日志" name="second">
              <user-id
                :tableTypes="types"
                :tableData="tableData"
              ></user-id>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <el-button size="small" @click="editUser" class="addBtn">添加</el-button>
  </div>
</template>

<script>
import userId from "./base/userId.vue";
import editUser from "./base/editUser.vue"
import { getCommo } from "@/api/index.js";
export default {
  data() {
    return {
      tableData: [],
      activeName: "first",
      isShow: false,
      plaInput: "请输入活动名称或券号",
      types: [
        { lable: "员工账号", props: "staffId", type: "normal" },
        { lable: "真实名字", props: "realName", type: "normal" },
        { lable: "角色名字", props: "cosName", type: "normal" },
        { lable: "前台客服", props: "services", type: "normal" },
        { lable: "创建时间", props: "setTime ", type: "normal" }
      ]
    };
  },
  components: {
    userId,
    editUser
  },
  methods: {
    editUser(){
       this.$router.push({ path: "/editUser" });
    },
    async getData() {
      let { tableData } = await getCommo();
      this.tableData = tableData;
    },
    //回复跳转路由
    addGoods() {
      this.$router.push({ path: "/addGoods" });
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