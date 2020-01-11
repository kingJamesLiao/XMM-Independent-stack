<template>
  <div>
    <div class="info">
      <el-form ref="form" :model="sizeForm" label-width="100px" >
        <el-form-item class="commo" label="SEO标题" required>
          <div class="content border" style="width:400px;">
            <input type="text" />
          </div>
        </el-form-item>
        <el-form-item class="commo" label="SEO关键字" required>
          <div class="content" style="width:400px;">
            <el-input
                    style="width:300px;"
                    type="textarea"
                    :rows="4"
                    placeholder="请输入关键字"
                    v-model="textarea2"
                  ></el-input>
          </div>
        </el-form-item>
        <el-form-item class="commo" label="SEO描述" required>
          <div class="content" style="width:400px;">
            <el-input
                    style="width:300px;"
                    type="textarea"
                    :rows="4"
                    placeholder="请输入描述"
                    v-model="textarea3"
                  ></el-input>
          </div>
        </el-form-item>
      </el-form>
    </div>
    <el-button size="small" class="addBtn">&nbsp;&nbsp;提交&nbsp;&nbsp;</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeForm: {},
      textarea2: '',
      textarea3: ''
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="less" scoped>
.commo /deep/ .el-form-item__label {
  font-size: 10px;
}
.info {
  .commo {
    margin-bottom: 2px;

    .content {
      display: inline-block;
      margin-left: 120px;
      font-size: 0.6rem;
      color: #666;
      min-width: 8rem;
      height: 18px;
      line-height: 20px;

      input {
        border: none;
        width: 100%;
        height: 80%;
        text-indent: 2px;
        color: #666;

      }
    }
    .border {
      border: 1px solid #dcdfe6;
    }
  }
}
.addBtn {
  background: #7d7dc3;
  color: #fff;
  border: none;
  border-radius: 2px;
  margin: 10px 20px;
}
</style>