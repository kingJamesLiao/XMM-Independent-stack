<template>
  <div class="collect common">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="收藏列表" name="first">
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
      plaInput: "请输入留言标题或邮箱",
      isShow: false,
      types: [
        { lable: "留言标题", props: "messHeader", type: "normal" },
        { lable: "用户名", props: "username", type: "normal" },
        { lable: "业务员", props: "salesman", type: "normal" },
        { lable: "是否处理", props: "isPose", type: "normal" },
        { lable: "会员阅读", props: "read", type: "normal" },
        { lable: "留言日期", props: "mData", type: "normal" },
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

.collect {

  .menttle {
    padding: 10px;

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