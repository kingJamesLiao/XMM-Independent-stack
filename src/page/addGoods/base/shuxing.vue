<template>
  <div class="info">
    <el-form ref="form" :model="sizeForm" label-width="120px" size="mini">
      <el-form-item class="commo" label="购物参数模式" required>
        <div class="content">
          <el-radio class="radio" @change="changeHandler" v-model="radio" label="1">多规格现成</el-radio>
          <el-radio class="radio" @change="changeHandler" v-model="radio" label="2">拼单商品</el-radio>
        </div>
      </el-form-item>
      <el-form-item class="commo" label="详情页定制留言" required>
        <div class="content">
          <el-radio class="radio" v-model="radio2" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio2" label="2">否</el-radio>
        </div>
      </el-form-item>
      <el-form-item class="commo" label="缺货预定" required>
        <div class="content">
          <el-radio class="radio" v-model="radio3" label="1">是</el-radio>
          <el-radio class="radio" v-model="radio3" label="2">否</el-radio>
        </div>
      </el-form-item>
      <el-form-item class="commo" label="运输方式" required>
        <div class="content">
          <el-radio class="radio" v-model="radio4" label="1">陆运</el-radio>
          <el-radio class="radio" v-model="radio4" label="2">海运</el-radio>
        </div>
      </el-form-item>
      <el-form-item class="commo" label="运费" required>
        <div class="content">
          <el-radio class="radio" v-model="radio5" label="1">包邮</el-radio>
          <el-radio class="radio" v-model="radio5" label="2">运费</el-radio>
          <input class="freight" type="text" />
        </div>
      </el-form-item>
      <el-form-item class="commo" label="货币" required>
        <div class="content">
          <el-radio class="radio" v-model="radio6" label="1">泰铢</el-radio>
        </div>
      </el-form-item>
    </el-form>
    
    <multi v-show="isShowMulti" @func="getMsgFormSon"></multi>
  
    <share v-show="!isShowMulti"></share>
    <el-button size="small" class="addBtn" @click="submit">&nbsp;&nbsp;提交&nbsp;&nbsp;</el-button>
  </div>
</template>

<script>
import multi from "./multi";
import share from "./share";
export default {
  data() {
    return {
      sizeForm: {},
      radio: "1",
      radio2: "1",
      radio3: "2",
      radio4: "2",
      radio5: "1",
      radio6: "1",
      isShowMulti: true,
      data : {}
    };
  },
  components: {
    multi,
    share
  },
  methods: {
    changeHandler(value) {
      if (value === "1") {
        this.isShowMulti = true;
      } else {
        this.isShowMulti = false;
      }
    },
    submit() {
      console.log(this.data);
    },
    getMsgFormSon(data) {
      this.data = data;
    }
  }
};
</script>

<style lang="less" scoped>
.info {
  .commo /deep/ .el-form-item__label {
    font-size: 10px;
  }
  .radio /deep/ .el-radio__label {
    padding-left: 2px;
    font-size: 0.4rem;
  }

  .commo {
    font-size: 10px;
    margin-bottom: 2px;
    .content {
      display: inline-block;
      margin-left: 80px;
      font-size: 0.6rem;
      color: #666;
      min-width: 8rem;
      height: 18px;
      line-height: 20px;
      .freight {
        margin-left: -25px;
        width: 50px;
      }
    }
  }
  input {
    border: 1px #bbb solid;
    max-width: 100px;
    &::placeholder {
      color: #aaa;
      font-size: 0.8rem;
      text-indent: 2px;
    }
  }
  .addBtn {
    background: #7d7dc3;
    color: #fff;
    border: none;
    border-radius: 2px;
    margin: 10px 0;
  }
}
</style>