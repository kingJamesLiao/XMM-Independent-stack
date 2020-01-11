<template>
  <div class="add">
    <div class="header">
      <h1>选择商品</h1>
      <span @click="close">X</span>
    </div>
    <div class="main">
      <div class="left">
        <div class="content">
          <input type="text" placeholder="请输入商品名称或编号" />
        </div>
        <div class="content">
          <select name id>
            <option value disabled selected hidden>请输入品牌</option>
            <option value="0">品牌1</option>
            <option value="1">品牌2</option>
          </select>
        </div>
        <div class="content">
          <select name id>
            <option value disabled selected hidden>全部状态</option>
            <option value="0">展示</option>
            <option value="1">隐藏</option>
          </select>
        </div>
        <div class="content">
          <input type="text" placeholder="请输入主分类" />
        </div>
        <div class="content">
          <input type="text" placeholder="批量输入商品编号,用逗号隔开" />
        </div>
        <div class="content">
          <select name id>
            <option value disabled selected hidden>销量排序</option>
            <option value="0">排序1</option>
            <option value="1">排序2</option>
          </select>
        </div>
        <div class="hr">
          <p>已经选中0个商品</p>
        </div>
        <el-button class="btn" type="small">&nbsp;&nbsp;确认选择&nbsp;&nbsp;</el-button>
      </div>

      <div class="right">
        <div class="show"></div>
        <div class="page">
          <el-pagination
            @size-change="handleSizeChange" 
            @current-change="handleCurrentChange"
            layout="prev, pager, next"
            :total="tableData && tableData.length"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData : []
    };
  },
  methods: {
    close() {
      this.$emit("fun", false); //改变父组件的状态
    },
     handleSizeChange: function(size) { //pagesize改变时触发
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) { // currentPage改变时会触发
      this.currentPage = currentPage;
    }
  }
};
</script>

<style lang="less" scoped>
.add {
  width: 36rem;
  height: 24rem;
  position: relative;
  background-color: #fff;
  border: 1px #eee solid;
  .header {
    width: 100%;
    height: 35px;
    border-bottom: 1px #eee solid;
    background-color: #f6f6f6;
    position: absolute;
    h1 {
      font-size: 0.95rem;
      color: #333;
      line-height: 35px;
      padding-left: 10px;
      -moz-user-select: none; /*火狐*/ //双击文字不可选中
      -webkit-user-select: none; /*webkit浏览器*/
      -ms-user-select: none; /*IE10*/
      user-select: none;
    }
    span {
      width: 18px;
      height: 18px;
      display: block;
      border-radius: 50%;
      background-color: #999;
      cursor: pointer;
      position: absolute;
      right: 5px;
      top: 5px;
      font-size: 13px;
      text-align: center;
      line-height: 18px;
      color: #333;
    }
  }
  .main {
    box-sizing: border-box;
    position: relative;
    .left {
      width: 30%;
      height: 20rem;
      margin-top: 40px;
      margin-left: 10px;
      position: absolute;
      .content {
        margin-top: 9px;
        min-width: 6rem;
        height: 18px;
        line-height: 18px;
        width: 10rem;
        border: 1px solid #dcdfe6;
        select,
        input {
          border: none;
          width: 100%;
          height: 90%;
          text-indent: 2px;
          color: #666;
          font-size: 0.6rem;
        }
      }
      .hr {
        border-top: 1px solid #dcdfe6;
        width: 10rem;
        margin-top: 10px;
        p {
          padding: 15px 0;
          text-align: center;
          font-size: 0.9rem;
          color: #333;
          font-weight: 600;
        }
      }
      .btn {
        width: 10rem;
        height: 1.6rem;
        border-radius: 0;
        background: #333;
        border: none;
        color: #fafafa;
        font-size: 0.6rem;
        line-height: 0.6rem;
      }
    }
    .right {
      width: 70%;
      height: 20rem;
      margin-top: 40px;
      .page,.show {
        border: 1px solid #dcdfe6;
        width: 90%;
        margin-top: 8px;
        margin-left: 15px;
        height: 4rem;
      }
      .page{
        border: none;
        height: 2rem;
        margin-top: 0;
      }
    }
  }
}
</style>