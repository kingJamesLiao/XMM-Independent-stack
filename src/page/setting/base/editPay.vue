<template>
  <div class="add common">
    <div class="admin">
      <div class="header">
        <div class="img" @click="goBack">
          <img src="../../../assets/style/image/goback.png" alt />
        </div>
        <p>编辑支付方式</p>
      </div>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple step inp">
            <el-form ref="form" :model="sizeForm" label-width="100px" size="mini">
              <el-form-item class="commo" label="支付名称" required>
                <div class="content border" style="width:200px;">
                  <input type="text"  />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="接口类型">
                <div class="content border" style="width:200px;">
                  <input type="text"  />
                </div>
                <br />
                <div class="content" style="width:250px;">
                  测试模式&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;是(非XMM官方技术,请不要打开)
                </div>
                <br />
                <div class="content" style="width:250px;">
                  授权绑定&nbsp;Paypal&nbsp;:&nbsp;&nbsp;&nbsp;
                  <div class="root">授权绑定&nbsp;Paypal</div>
                </div>
              </el-form-item>
              <el-form-item class="commo" label="手续费用">
                <div class="content">
              <select name id>
                <option value disabled selected hidden>固定值+订单*百分比</option>
                <option value="0">固定值+百分比</option>
                <option value="1">固定值+百分比</option>
              </select>
              <br />
                固定值
                 <div class="content border" style="width:30px; marginLeft :20px;marginTop:5px;">
                  <input type="text"  />
                </div>
                <br />
                百分比(%)
                 <div class="content border" style="width:30px; marginLeft :20px;marginTop:5px;">
                  <input type="text"  />
                </div>
            </div>
              </el-form-item>
              <el-form-item class="commo" label="站点类型">
                <div class="content">
                  <el-radio class="radio" v-model="radio" label="1">所有站点</el-radio>
                  <el-radio class="radio" v-model="radio" label="2">PC端</el-radio>
                  <el-radio class="radio" v-model="radio" label="3">手机端</el-radio>
                </div>
              </el-form-item>
              <el-form-item class="commo" label="显示排序">
                <div class="content border" style="width:50px;">
                  <input type="text" />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="状态">
                <div class="content add">
                  <el-radio class="radio" v-model="radio" label="2">确定</el-radio>
                  <el-radio class="radio" v-model="radio" label="3">否</el-radio>
                </div>
              </el-form-item>
              <el-form-item class="commo" label="账单地址">
                <div class="content add">
                  <el-radio class="radio" v-model="radio" label="2">是</el-radio>
                  <el-radio class="radio" v-model="radio" label="3">否</el-radio>
                </div>
              </el-form-item>
              <el-form-item class="commo" label="备注">
                <div class="content">
                  <el-input
                    style="width:350px;"
                    type="textarea"
                    :rows="4"
                    placeholder="选填,下单流程显示,尽量60个字符内描述"
                    v-model="textarea"
                  ></el-input>
                </div>
              </el-form-item>
              <el-form-item class="commo" label="收款账号描述">
                <div class="content">
                  <el-input
                    style="width:350px;"
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="textarea2"
                  ></el-input>
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
      radio: "1",
      textarea: "",
      textarea2: "",
      textarea3: "",
  
    };
  },
 
  methods: {
    goBack() {
      this.$router.push({ path: "/payMent" });
    },
  
  }
};
</script>

<style lang="less" scoped>
.commo /deep/ .el-form-item__label {
  font-size: 10px;
}

.radio /deep/ .el-radio__label {
  padding-left: 2px;
  font-size: 0.2rem;

}
.add /deep/ .el-radio{
    margin-right: 5px;
}
.add {

  .admin {
    background: #fafafa;

    .header {
      height: 35px;
      position: relative;
      .img {
        display: block;
        width: 35px;
        height: 35px;
        background: #eee;
        cursor: pointer;
        position: absolute;
        img {
          background-size: 100% 100%;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: 9px;
        }
      }
      p {
        padding-left: 45px;
        line-height: 35px;
        font-size: 0.9rem;
        color: #666;
      }
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
      padding: 10px 0;
      color: #666;
      position: relative;
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
            font-size: 0.6rem;
          }
         select {
          border: 1px solid #dcdfe6;  
          width: 200px;
          height: 21px;
          text-indent: 2px;
          color: #666;
          font-size: 0.6rem;
          margin-bottom: 5px;
          }
          .root{
            width: 7rem;
            height: 23px;
            background: #7d7dc3;
            float: right;
            cursor: pointer;
            color: #fff; 
            line-height: 23px;
            text-align: center; 
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