<template>
  <div>
          <div  class="info">
    <el-form ref="form" :model="sizeForm" label-width="100px" size="mini">
      <el-form-item class="commo" label="所属分类" required>
        <div class="content">
          <el-select class="wrapper" v-model="sizeForm.region" placeholder="请选择分类">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item class="commo" label="附属分类">
        <div class="content rest">
          <span>添加其他分类</span>
        </div>
      </el-form-item>
      <el-form-item class="commo" label="商品首图">
                <div class="upload border" style="width:250px;">
                  <div class="left">
                    <img src="../../../assets/style/image/null.png" id="img" alt />
                  </div>
                  <div class="right">
                    <p>请上传图片</p>
                    <button class="button" @click="onPickFile">本地上传</button>
                    <button class="button2" @click="removeImg">清空所选</button>
                    <input type="file" ref="fileInput" @change="getFile" style="display: none" />
                  </div>
                </div>
      </el-form-item>
      <el-form-item class="commo" label="所属品牌">
        <div class="content">
          <el-select
            class="wrapper"
            style="width:250px;"
            v-model="sizeForm.region"
            placeholder="请选择品牌"
          >
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </div>
      </el-form-item>
      <el-form-item class="commo" label="商品名称" required>
        <div class="content border" style="width:500px;">
            <input type="text">
        </div>
      </el-form-item>
      <el-form-item class="commo" label="商品编号" required>
        <div class="content border" style="width:250px;">
            <input type="text">
        </div>
      </el-form-item>
      <el-form-item class="commo" label="组合编号">
        <div class="content border" style="width:250px;">
            <input type="text">
        </div>
      </el-form-item>
      <el-form-item class="commo" label="默认销量">
        <div class="content border">
            <input type="text">
        </div>
      </el-form-item>
      <el-form-item class="commo" label="收藏数量">
        <div class="content border">
            <input type="text">
        </div>
      </el-form-item>
      <el-form-item class="commo" label="最小订单量">
        <div class="content border">
            <input type="text">
        </div>
      </el-form-item>
      <el-form-item class="commo" label="商品推荐">
        <div class="content" style="width:440px;">
          <el-checkbox class="check" label="New Arrivals"></el-checkbox>
          <el-checkbox class="check" label="Hot Sales"></el-checkbox>
          <el-checkbox class="check" label="Top Sellers"></el-checkbox>
          <el-checkbox class="check" label="Super Deals"></el-checkbox>
        </div>
      </el-form-item>
      <el-form-item class="commo border" label="标签Tags">
        <div class="content" style="width:380px;">添加标签</div>
      </el-form-item>
      <el-form-item class="commo" label="商城状态">
        <div class="content">
          <el-radio class="radio" v-model="radio" label="1">上架</el-radio>
          <el-radio class="radio" v-model="radio" label="2">下架</el-radio>
        </div>
      </el-form-item>
      <el-form-item class="commo" label="排序">
        <div class="content border">
            <input type="text" value="0">
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
      radio: "1"
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
       onPickFile() {
      this.$refs.fileInput.click();
    },
    //第三步: 文件选择后, 后在页面上显示出来    转base64位的操作
    getFile(event) {
      var files = document.querySelector("input[type=file]").files;
      var img = document.getElementById('img');

      // const files = event.target.files;
      function readAndPreview(file) {
        if (/\.(jpe?g|png|gif)$/i.test(file.name)) {
          //读取本地文件，以gbk编码方式输出
          console.log(file.name);
          var reader = new FileReader();
          console.log(reader);
          reader.addEventListener(
            "load",
            function() {
              // this.dialogImageUrl = this.result;
              img.src = this.result;
            },
            false
          );

          reader.readAsDataURL(file);
        } else {
          alert("请上传正确的图片格式");
        }
      }
      files = Array.prototype.slice.call(files);
      files = files.slice(0, 1);
      var arr = [];
      if (files) {
        arr.forEach.call(files, readAndPreview);
      }
    },
    removeImg(){
      var img = document.getElementById('img');
      img.src = '';
    }
  }
};
</script>

<style lang="less" scoped>
.commo /deep/ .el-form-item__label{
        font-size: 10px;
    }
.wrapper /deep/ .el-input__inner {
  height: 20px;
  line-height: 20px;
  border-radius: 1px;
}
.wrapper /deep/ .el-input__icon {
  line-height: 20px;
}
.check /deep/ .el-checkbox__label {
  margin-left: -5px;
  font-size: 10px;
}
.radio /deep/ .el-radio__label {
  padding-left: 2px;
  font-size: 0.4rem;
}
.radio /deep/ .el-radio {
  margin-right: 20px;
  font-size: 12px;
}
.info {

  .commo {
    margin-bottom: 2px;
    .upload {
          display: inline-block;
          margin-left: 120px;
          font-size: 0.6rem;
          color: #666;
          min-width: 8rem;
          height: 54px;
          line-height: 54px;
          position: relative;
          .left {
            position: absolute;
            top: 4px;
            left: 3px;
            width: 44px;
            height: 44px;
            border: 1px solid #dcdfe6;
            img {
              display: block;
              width: 100%;
              height: 100%;
            }
          }
          .right {
            height: 44px;
            width: 200px;
            position: absolute;
            top: 4px;
            left: 50px;

            p {
              height: 20px;
              line-height: 20px;
              padding-left: 10px;
              color: #888;
            }
            .button {
              width: 75px;
              height: 20px;
              background: #4e77b1;
              border-radius: 2px;
              color: #fff;
              font-size: 12px;
              position: absolute;
              left: 8px;
              bottom: 2px;
              padding-left: 10px;
              letter-spacing: 1px;
              cursor: pointer;

              &::before {
                content: "";
                height: 10px;
                width: 10px;
                display: block;
                float: left;
                position: absolute;
                left: 5px;
                top: 5px;
                background-image: url("../../../assets/style/image/addBtn.png");
                background-size: 100% 100%;
              }
            }
            .button2 {
              width: 75px;
              height: 20px;
              background: #666;
              border-radius: 2px;
              color: #fff;
              font-size: 12px;
              position: absolute;
              left: 88px;
              bottom: 2px;
              padding-left: 10px;
              letter-spacing: 1px;
              cursor: pointer;

              &::before {
                content: "";
                height: 10px;
                width: 10px;
                display: block;
                float: left;
                position: absolute;
                left: 5px;
                top: 5px;
                background-image: url("../../../assets/style/image/remove.png");
                background-size: 100% 100%;
              }
            }
          }
        }

    .content {
      display: inline-block;
      margin-left: 120px;
      font-size: 0.6rem;
      color: #666;
      min-width: 8rem;
      height: 18px;
      line-height: 20px;
      input{
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
    .rest::before {
      content: "";
      display: block;
      width: 12px;
      height: 12px;
      background-image: url("../../../assets/style/image/add.png");
      background-size: 100% 100%;
      margin-top: 5px;
      margin-left: 2px;
      margin-right: 4px;
      float: left;
      cursor: pointer;
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