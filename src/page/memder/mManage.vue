<template>
  <div class="manage common">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <div class="btn">
            <el-button size="small">&nbsp;&nbsp;导入&nbsp;&nbsp;</el-button>
            <el-button size="small">&nbsp;&nbsp;导出&nbsp;&nbsp;</el-button>
          </div>
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="会员列表" name="first">
              <list :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
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
      plaInput: "请输入邮箱名称",
      isShow: true,
      types: [
        { lable: "国家", props: "nation", type: "normal" },
        { lable: "邮箱/附属联系", props: "email", type: "normal" },
        { lable: "注册", props: "register", type: "normal" },
        { lable: "级别/归属", props: "rank", type: "normal" },
        { lable: "购物车", props: "cart", type: "normal" },
        { lable: "订单", props: "order", type: "normal" },
        { lable: "成交", props: "make", type: "normal" },
        { lable: "业务来源", props: "business", type: "normal" },
        { lable: "操作", props: "oper", type: "normal" }
      ]
    };
  },
  components: {
    list
  }
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";

.manage {

  .menttle {
    padding: 10px;

    position: relative;
    .btn {

      position: absolute;
      z-index: 10000;
      top: 10px;
      right: 10px;
    }
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