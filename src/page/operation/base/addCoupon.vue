<template>
  <div class="add common">
    <div class="admin">
      <div class="header">
        <div class="img" @click="goBack">
          <img src="../../../assets/style/image/goback.png" alt />
        </div>
        <p>添加活动</p>
      </div>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple step inp">
            <el-form ref="form" :model="sizeForm" label-width="100px" size="mini">
              <el-form-item class="commo" label="活动名称" required>
                <div class="content border" style="width:350px;">
                  <input type="text" />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="所属会员组">
                <div class="content">
                  <select name id>
                    <option value disabled selected hidden>全部</option>
                    <option value="0">普通会员</option>
                    <option value="1">高级会员</option>
                  </select>
                </div>
              </el-form-item>
              <el-form-item class="commo" label="开始时间" required>
                <div class="content border" style="width:200px;">
                  <el-date-picker v-model="value1" type="date" class="data" placeholder="选择日期"></el-date-picker>
                  <div class="icon"><img src="../../../assets/style/image/time.png" alt=""></div>               
                </div>
              </el-form-item>
              <el-form-item class="commo" label="结束时间" required>
                <div class="content border" style="width:200px;">
                  <el-date-picker v-model="value2" type="date" class="data" placeholder="开始日期的00:00计算"></el-date-picker>
                  <div class="icon"><img src="../../../assets/style/image/time.png" alt=""></div>               
                </div>
              </el-form-item>
              <el-form-item class="commo" label="设备">
                <div class="content">
                  <select name id>
                    <option value disabled selected hidden>所选设备</option>
                    <option value="0">设备1</option>
                    <option value="1">设备2</option>
                  </select>
                </div>
              </el-form-item>
              <el-form-item class="commo" label="是否可叠加">
                <div class="content" style="width:200px;">
                   <el-checkbox label="允是可叠加活动" class="check" name="type"></el-checkbox>
                </div>
              </el-form-item>
              <el-form-item class="commo" label="优惠券类型">
                <div class="content">
                  <el-radio class="radio" v-model="radio" label="1">通用券(一个券码)</el-radio>
                  <el-radio class="radio" v-model="radio" label="2">私人券(没人单独)</el-radio>
              </div>
              </el-form-item>
              <el-form-item class="commo" label="优惠券号码" required>
                <div class="content border" style="width:200px;">
                  <input type="text" />
                </div>&nbsp;优惠券编码生成后自动加前缀&nbsp;<span style="color:red;fontWeight:550;">注意:只能使用英文及数字</span>
              </el-form-item>
              <el-form-item class="commo add"  label="首单限制">
                <div class="content" >
                  <el-radio class="radio" v-model="radio2" label="1">不限制</el-radio>
                  <el-radio class="radio" v-model="radio2" label="2">首次下单</el-radio>
                  <el-radio class="radio" v-model="radio2" label="3">首次支付</el-radio>
                </div>
              </el-form-item>
              <el-form-item class="commo add"  label="条件类型">
                <div class="content" >
                  <el-radio class="radio" v-model="radio3" label="1">全部</el-radio>
                  <el-radio class="radio" v-model="radio3" label="2">分类</el-radio>
                  <el-radio class="radio" v-model="radio3" label="3">品牌</el-radio>
                </div>
              </el-form-item>
              <el-form-item class="commo" label="规则条件" required>
                <div class="content vessel">
                  <div class="left">
                      <div class="back">
                          <el-radio class="radio" v-model="radio4" label="2">买满</el-radio>
                            <div class="rule border" style="width:30px; marginLeft:10px;">
                            <input type="text" />
                            </div>&nbsp;&nbsp;-<div class="rule border" style="width:30px; marginLeft:10px;">
                            <input type="text" />
                            </div>
                      </div>
                      <div  class="back">
                          <el-radio class="radio" v-model="radio5" label="2">买满</el-radio>
                            <div class="rule border" style="width:30px; marginLeft:10px;">
                            <input type="text" />
                            </div>&nbsp;&nbsp;-<div class="rule border" style="width:30px; marginLeft:10px;">
                            <input type="text" />
                            </div>&nbsp;件
                      </div>
                      <div class="back">
                          <el-radio class="radio" v-model="radio6" label="2">无需条件</el-radio>
                      </div>
                  </div>
                  <div class="right">
                      <div class="back">
                          <el-radio class="radio" v-model="radio7" label="2">满减金额</el-radio>
                            <div class="rule border" style="width:30px; marginLeft:10px;">
                            <input type="text" />
                            </div>&nbsp;
                      </div>
                      <div class="back">
                          <el-radio class="radio" v-model="radio8" label="2">折扣</el-radio>
                            <div class="rule border" style="width:30px; marginLeft:10px;">
                            <input type="text" />
                            </div>&nbsp;
                            <span class="ref">如:8.8折</span>
                      </div>
                       <div class="back">
                           <el-radio class="radio" v-model="radio9" label="2">包邮</el-radio>
                       </div>
                      </div>        
                </div>
              </el-form-item>
              <el-form-item class="commo" label="优惠券状态" required>
                <div class="content add">
                  <el-radio class="radio" v-model="radio10" label="2">开启</el-radio>
                  <el-radio class="radio" v-model="radio10" label="3">取消</el-radio>
                </div>
              </el-form-item>
              <el-form-item class="commo" label="活动描述">
                <div class="content">
                  <el-input
                    style="width:350px;"
                    type="textarea"
                    :rows="4"
                    placeholder="尽量60个字符内描述"
                    v-model="textarea"
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
      radio: "",
      radio2: '',
      radio3 : '',
      radio4 : '',
      radio5 : '',
      radio6 : '',
      radio7 : '',
      radio8 : '',
      radio9 : '',
      radio10 : '',
      textarea: "",
      textarea2: "",
      textarea3: "",
      value1 : '',
      value2 : ''
    };
  },

  methods: {
    goBack() {
      this.$router.push({ path: "/coupon" });
    }
  }
};
</script>

<style lang="less" scoped>
.commo /deep/ .el-form-item__label {
  font-size: 10px;
}
.commo /deep/ .el-form-item__content  {
  font-size: 10px;
}
.add /deep/ .el-radio{
    margin-right: 5px;
}
.radio /deep/ .el-radio__label {
  padding-left: 2px;
  font-size: 0.2rem;
}
.add /deep/ .el-radio{
    margin-right: 5px;
}
.data /deep/ .el-input__inner{
    border: none;
    height: 16px;
    line-height: 8px;
    width: 180px;
    padding-left: 30px;
    padding-right: 5px;
}
.data /deep/ .el-input__prefix{
    display: none;
}
.data /deep/ .el-input__suffix{
    right: 15px;
    top: -4px;
}
.check /deep/ .el-checkbox__label{
    font-size: 8px;
    padding-left: 3px;
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
          position: relative;
          .icon{
              width: 16px;
              height: 16px;
              position: absolute;
              left: 5px;
              z-index: 99;
              top: 0px;
          }
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
        }
        .vessel{
            width: 34rem;
            height: 120px;
            border: 1px solid #D5DFDB;
            background-color: #ECFDF7;
            overflow: hidden;
            box-sizing: border-box;
            position: relative;
            padding-right: 15px;

            .left{
                width: 50%;
                height: 100%;
                border-right: solid 1px #D5DFDB;
                padding: 10px;
                
                .back{
                    padding-top: 5px;
                .rule{
                    display: inline-block;
                    margin-left: 120px;
                    font-size: 0.6rem;
                    color: #666;
                    min-width: 4.8rem;
                    height: 14px;
                    line-height: 14px;
                    position: relative;
                }
            }
            }
            .right{
                width: 50%;
                height: 100%;
                position: absolute;
                left: 53%;
                top: 0;
                padding: 10px;
               .back{
                    padding-top: 5px;
                .rule{
                    display: inline-block;
                    margin-left: 120px;
                    font-size: 0.6rem;
                    color: #666;
                    min-width: 4.8rem;
                    height: 14px;
                    line-height: 14px;
                    position: absolute;
                    right: 7.5rem;
                }
                .ref{
                    position: absolute;
                    right: 3.5rem;
                    color: red;
                }
               }
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