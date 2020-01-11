<template>
  <div class="add">
    <el-form ref="form" :model="sizeForm"  size="mini">
      <el-form-item class="commo" label="导航类型">
          <p>&nbsp;</p>
        <div class="content">
          <el-radio class="radio" v-model="radio" label="1">自定义内容</el-radio>
          <el-radio class="radio" v-model="radio" label="2">自定义URL</el-radio>
        </div>
      </el-form-item>
      <el-form-item class="commo" required label="导航名称">
        <p>&nbsp;</p>
        <div class="content">
         <input type="text" placeholder="feedback">
        </div>
      </el-form-item>
      <el-form-item class="commo" label="状态">
          <p>&nbsp;</p>
        <div class="content">
          <el-radio class="radio" v-model="radio2" label="1">开启</el-radio>
          <el-radio class="radio" v-model="radio2" label="2">关闭</el-radio>
        </div>
      </el-form-item>
      <el-form-item class="commo" label="SEO标题">
        <p>&nbsp;</p>
        <div class="content">
         <input type="text">
        </div>
      </el-form-item>
      <el-form-item class="commo" label="SEO关键字">
        <p>&nbsp;</p>
                <div class="content">
                  <el-input
                    style="width:99%; marginTop:10px;"
                    type="textarea"
                    :rows="4"
                    placeholder="尽量60个字符内描述"
                    v-model="keyWord"
                  ></el-input>
                </div>
      </el-form-item>
      <el-form-item class="commo" label="SEO描述">
        <p>&nbsp;</p>
                <div class="content">
                  <el-input
                    style="width:99%; marginTop:10px;"
                    type="textarea"
                    :rows="4"
                    placeholder="尽量60个字符内描述"
                    v-model="describe"
                  ></el-input>
                </div>
      </el-form-item>
      <el-form-item class="commo" label="详情">
        <p>&nbsp;</p>
                <div class="content">
                  <el-input
                    style="width:99%; marginTop:10px;"
                    type="textarea"
                    :rows="4"
                    placeholder="尽量60个字符内描述"
                    v-model="details"
                  ></el-input>
                </div>
      </el-form-item>
    </el-form>
    <el-button size="small" class="submit">&nbsp;&nbsp;提交&nbsp;&nbsp;</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        sizeForm : {},
        radio : "1",
        radio2 : "1",
        keyWord : "",
        describe : "",
        details : ""
    };
  },

  methods: {}
};
</script>

<style lang="less" scoped>
.commo /deep/ .el-form-item__label{
        font-size: 10px;
    }
.radio /deep/ .el-radio__label {
  padding-left: 2px;
  font-size: 0.4rem;
}
.add {
  width: 60%;
  height: 100%;
  margin: 0 auto;
  padding-top: 20px;
  .commo{
      width: 100%;
      height: auto;
      .content{
          width: 100%;
          height: auto;
          input{
              width: 99%;
              height: 30px;
              margin-top: 5px;
              border-radius: 2px;
              border: 1px solid #DCDFE6;
              text-indent: 5px;
          }
      }
  }
  .submit {
        background: #7474bc;
        color: #FFF;
        border: none;
        text-align: center;
        width: 5rem;
        height: 2.3rem;
        cursor: pointer;
      }
}
</style>