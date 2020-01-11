<template>
  <div class="add">
    <div class="header">
      <h1>修改免费测试域名</h1>
      <span @click="close">X</span>
    </div>
    <div class="inp">
        <input type="text" placeholder="输入新域名">
        .isXMMyy.com
        <div class="save">确认</div>
    </div>
    <div class="remind">
        <p>1.只允许字母、数字及横杠(-)符号。长度为4~20个字符。</p>
        <p>2.修改后将同时修改手机站、企业站的免费测试域名。</p>
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
    }
  }
};
</script>

<style lang="less" scoped>
.add {
  width: 34rem;
  height: 20rem;
  position: relative;
  background-color: #fff;
  border: 1px #ddd solid;
  .header {
    width: 100%;
    height: 50px;
    border-bottom: 1px #ddd solid;
    background-color: #f6f6f6;
    position: absolute;
    h1 {
      font-size: 0.95rem;
      color: #333;
      line-height: 50px;
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
  .inp{
      position: absolute;
      top: 6rem;
      left: 50%;
      transform: translateX(-50%);
      width: 75%;
      height: 2.6rem;
      font-size: .8rem;
      color: #888;
      border: 1px #ddd solid;

      input{
          width: 58%;
          padding-left: 1rem;
          height: 100%;
      }
      .save{
          width: 3rem;
          height: 2.6rem;
          background-color: #7474BC;
          float:right;
          border: 1px solid #7474BC;
          margin-top: -1px;
          color: #fff;
          text-align: center;
          line-height: 2.6rem;  
          cursor: pointer;

      }
  }
  .remind{
      width: 75%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 10rem;
      p{
          color: #888;
          font-size: .9rem;
          padding-top: 3px;
      }
  }
}
</style>