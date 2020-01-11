<template>
  <div class="list common">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <div class="btn">
            <el-button size="small" @click="addGoods" style=" background: #7d7dc3;border:none;color:#fff;">添加</el-button>
          </div>
          <el-button size="mini" class="preview">预览展示效果</el-button>
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="活动列表" name="first">
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
      plaInput: "请输入活动名称",
      isShow: false,
      types: [
        { lable: "活动名称", props: "activityName", type: "normal" },
        { lable: "已使用", props: "used", type: "normal" },
        { lable: "活动开始时间", props: "airTime ", type: "normal" },
        { lable: "活动结束时间", props: "endTime", type: "normal" },
        { lable: "状态", props: "statu", type: "normal" },
        { lable: "操作", props: "oper", type: "normal" }
      ]
    };
  },
  components: {
    list
  },
  methods : {
    //回复跳转路由
    addGoods() {   
      this.$router.push({ path: "/addActivities" });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";

.list {

  .menttle {
    padding: 10px;
    position: relative;

    .btn {
      
      position: absolute;
      z-index: 10000;
      top: 10px;
      right: 10px;
    }
    .preview{
      position: absolute;
      right: 10px;
      top: 60px;
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