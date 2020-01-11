<template>
  <div class="psw common">
    <div class="admin">
      <h1>编辑主货币</h1>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple step passw inp">
            <el-form ref="form" :model="sizeForm" label-width="100px" size="mini">
              <el-form-item class="commo" label="货币名称" required>
                <div class="content border" style="width:250px;">
                  <input type="text" value="USD" />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="显示符号" required>
                <div class="content border" style="width:250px;">
                  <input type="text" value="US$" />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="汇率" required>
                <div class="content border" style="width:250px;">
                  <input type="text" value="1.0000" />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="小数点位数" required>
                <div class="content border" style="width:250px;">
                  <input type="text" value="2" />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="标准符" required>
                <div class="content border" style="width:250px;">
                  <input type="text" value="USD" />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="排序">
                <div class="content border" style="width:30px">
                  <input type="text" value="20" />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="状态">
                <div class="content">
                  <el-radio class="radio" v-model="radio" label="1">开启</el-radio>
                </div>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
      <el-button class="btn" type="small">&nbsp;&nbsp;提交&nbsp;&nbsp;</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sizeForm: {},
      radio: "1"
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>

.commo /deep/ .el-form-item__label {
  font-size: 10px;
}

.radio /deep/ .el-radio__label {
  padding-left: 2px;
  font-size: 0.4rem;
}

.psw {
  .admin {
    padding-top: 1rem;
    background: #fafafa;
    margin-left: 15px;
    h1 {
      margin-left: 15px;
      margin-bottom: 15px;
      font-size: 1.5rem;
      font-weight: 100;
      color: #555;
    }
    .passw {
      height: 10rem;
    }
    .btn {
      margin-left: 15px;
      margin-bottom: 15px;
      border-radius: 0;
      background: #7d7dc3;
      border: none;
      color: #fafafa;
    }
    .inp {
      display: -webkit-flex;
      flex-direction: column; //垂直
      justify-content: center;
      font-size: 0.8rem;
      color: #666;
      position: relative;
      height: auto;
      padding: 10px 0;
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
            color: #999;
            font-size: .6rem;
          }
        }
        .border {
          border: 1px solid #dcdfe6;
        }
      }
    }
  }
}
</style>