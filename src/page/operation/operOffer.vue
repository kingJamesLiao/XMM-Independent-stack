<template>
  <div class="offer common">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <div class="btn">
            <el-button size="small"  @click="comment" style="background: #7d7dc3;border:none;color:#fff;">添加</el-button>
          </div>
          <el-button size="mini" class="preview">预览展示效果</el-button>
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="特价商品" name="first">
              <list :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
            </el-tab-pane>
            <el-tab-pane label="已过期特价商品" name="second">
              <list :btnShow="isShow" :plaInput="plaInput" :tableTypes="types"></list>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <div class="add">
        <add-goods :btnShow="btnShow" @fun="change" v-show="btnShow"></add-goods>
    </div>
  </div>
</template>

<script>
import list from "../../common/commoList";
import addGoods from "../../common/addGoods";
export default {
  data() {
    return {
      activeName: "first",
      plaInput: "请输入商品编号",
      isShow: false,
      btnShow : false,
      types: [
        { lable: "商品价格", props: "price", type: "normal" },
        { lable: "状态", props: "statu", type: "normal" },
        { lable: "折扣", props: "discount", type: "normal" },
        { lable: "开始时间", props: "airTime ", type: "normal" },
        { lable: "结束时间", props: "endTime", type: "normal" },
        { lable: "首页排序", props: "homePage", type: "normal" }
      ]
    };
  },
  components: {
    list,
    addGoods
  },
  methods : {
    comment() {   
      this.btnShow = true;
    },
    change(data){
      this.btnShow = data;
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";

.offer {

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