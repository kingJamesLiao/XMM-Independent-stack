<template>
  <div class="add common">
    <div class="admin">
      <div class="header">
        <div class="img" @click="goBack">
          <img src="../../../assets/style/image/goback.png" alt />
        </div>
        <p>编辑员工账号</p>
      </div>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple step inp">
            <el-form ref="form" :model="sizeForm" label-width="100px" size="mini">
              <el-form-item class="commo" label="登录名" required>
                <div class="content border" style="width:250px;">
                  <input type="text" />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="真实名字" required>
                <div class="content border" style="width:250px;">
                  <input type="text" value="0" />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="密码" required>
                <div class="content border" style="width:250px;">
                  <input type="text" />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="确认密码" required>
                <div class="content border" style="width:250px;">
                  <input type="text" value="0" />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="状态">
                <div class="content">
                  <el-radio class="radio" v-model="radio" label="1">启用</el-radio>
                  <el-radio class="radio" v-model="radio" label="2">禁止</el-radio>
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

  methods: {
    goBack() {
      this.$router.push({ path: "/userAccount" });
    }
  }
};
</script>

<style lang="less" scoped>
.commo /deep/ .el-form-item__label {
  font-size: 13px;
}

.radio /deep/ .el-radio__label {
  padding-left: 2px;
  font-size: 0.4rem;
}
.add {
  .admin {
    background: #fafafa;
    margin-left: 15px;
    .header {
      height: 55px;
      position: relative;
      .img {
        display: block;
        width: 55px;
        height: 55px;
        background: #eee;
        cursor: pointer;
        position: absolute;
        img {
          background-size: 100% 100%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 20px;
        }
      }
      p {
        padding-left: 65px;
        line-height: 55px;
        font-size: 1.0rem;
        color: #666;
      }
    }
    .btn {
      width: 7.2rem;
      height: 2.2rem;
      margin-left: 15px;
      margin-bottom: 15px;
      border-radius: 0;
      background: #7d7dc3;
      border: none;
      color: #fafafa;
      font-size: 0.9rem;
    }
    .inp {
      display: -webkit-flex;
      flex-direction: column; //垂直
      justify-content: center;
      font-size: 0.8rem;
      padding: 10px 0;
      color: #666;
      position: relative;
      .commo {
        margin-bottom: 8px;
        .content {
          display: inline-block;
          margin-left: 120px;
          font-size: 0.6rem;
          color: #666;
          min-width: 8rem;
          height: 25px;
          line-height: 25px;
          input {
            border: none;
            width: 100%;
            height: 80%;
            text-indent: 2px;
            color: #999;
            font-size: 0.9rem;
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