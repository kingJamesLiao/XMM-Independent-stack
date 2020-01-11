<template>
  <div class="add common">
    <div class="admin">
      <div class="header">
        <div class="img" @click="goBack">
          <img src="../../../assets/style/image/goback.png" alt />
        </div>
        <p>上传广告图片</p>
      </div>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple step inp">
            <el-form ref="form" :model="sizeForm" label-width="100px" size="mini">
                <el-form-item class="commo" label="广告栏目名称">
                <div class="content " style="width:350px;">
                  首页幻灯片BANNER
                </div>
              </el-form-item>
              <el-form-item class="commo" label="图片要求" required>
                <div class="content ">
                  电脑端 : 像素 1100 * 450
                </div>
                <br >
                <div class="content">
                  移动端 : 宽高比在2:1 - 3:2之间,宽高建议640px以上
                </div>
              </el-form-item>
              <el-form-item class="commo" label="显示标题">
                <div class="content border" style="width:350px;">
                  <input type="text"  />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="广告链接">
                <div class="content border" style="width:350px;">
                  <input type="text"  />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="上传图片"  required>
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
              <el-form-item class="commo" label="显示站点">
                <div class="content">
                  <el-radio class="radio" v-model="radio" label="1">所有站点</el-radio>
                  <el-radio class="radio" v-model="radio" label="2">电脑网站</el-radio>
                  <el-radio class="radio" v-model="radio" label="3">手机网站</el-radio>
                </div>
              </el-form-item>
              <el-form-item class="commo" label="状态">
                <div class="content">
                  <el-radio class="radio" v-model="radio" label="1">显示</el-radio>
                  <el-radio class="radio" v-model="radio" label="2">关闭</el-radio>
                </div>
              </el-form-item>
              <el-form-item class="commo" label="SEO标题">
                <div class="content border" style="width:50px;">
                  <input type="text"  />
                </div>
              </el-form-item>
              <el-form-item class="commo" label="简要描述">
                <div class="content">
                  <el-input
                    style="width:350px;"
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="textarea3"
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
import axios from "axios"; //获取上传的链接
export default {
  data() {
    return {
      sizeForm: {},
      textarea: "",
      textarea2: "",
      textarea3: "",
      dialogImageUrl: "../../../assets/style/image/null.png",
      imgSrc: "../../../assets/style/image/null.png",
      radio : ''
    };
  },
  //  mounted() {
  //   //第一步:先请求一下api,看看需要上传到哪里去,存到postUrl里面 ( 做了跨域配置,所以直接写成了api )
  //   axios.get("api/getHello").then(res => {
  //     if (res.status === 200 && res.data) {
  //       let data = res.data.data;
  //       let postUrl = data.url;
  //       console.log(postUrl); //页面挂载后,先打印一下,拿到了需要上传到的url地址   ( 第一次有效打印 )
  //       this.postUrl = postUrl; //把地址保存下来
  //     }
  //   });
  // },
  methods: {
    goBack() {
      this.$router.push({ path: "/homeSlide" });
    },
    //第二步:再来写个方法, button代替input选择图片
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
.commo /deep/ .el-form-item__label {
  font-size: 10px;
}
.add /deep/ .el-radio{
    margin-right: 5px;
}
.radio /deep/ .el-radio__label {
  padding-left: 2px;
  font-size: 0.4rem;
}
.add {
    padding: 20px;
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
          input {
            border: none;
            width: 100%;
            height: 80%;
            text-indent: 2px;
            color: #999;
            font-size: 0.6rem;
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