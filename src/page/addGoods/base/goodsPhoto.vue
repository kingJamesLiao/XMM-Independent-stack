<template>
  <div>
    <div class="albumvideo">
      <div>
        <div class="upload">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            multiple
            :limit="9"
          >
            <div class="type_title">
              <i class="el-icon-plus avatar-uploader-icon"></i>
              <br />
              <span>上传图片</span>
            </div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="80%" :src="dialogImageUrl" alt />
          </el-dialog>
        </div>
        <div class="upload">
          <el-upload
            class="avatar-uploader"
            action="/api/video"
            v-bind:on-progress="uploadVideoProcess"
            v-bind:on-success="handleVideoSuccess"
            v-bind:before-upload="beforeUploadVideo"
            v-bind:show-file-list="false"
          >
            <div class="type_title">
              <i class="el-icon-plus avatar-uploader-icon"></i>
              <br />
              <span>引入视频</span>
            </div>
          </el-upload>
          <video
            v-if="videoForm.showVideoPath !='' && !videoFlag"
            v-bind:src="videoForm.showVideoPath"
            class="avatar video-avatar"
            controls="controls"
          >您的浏览器不支持视频播放</video>
        </div>
      </div>
      <el-progress
        v-if="videoFlag == true"
        type="circle"
        v-bind:percentage="videoUploadPercent"
        class="plan"
      ></el-progress>
      <p class="Upload_pictures">
        <span>1.每张图片建议800*800以上像素</span>
        <span>2.颜色相册可使不同颜色,显示不同图片</span>
        <span>3.为达到最佳效果,图片最好以纯白色作为背景图</span>
        <span>4.什么是颜色相册?</span>
        <span>5.最多可以上传1个视频，建议大小50M，推荐格式mp4</span>
      </p>
    </div>
    <el-button @click="getData" size="small">按我</el-button>
  </div>
</template>
<script>
import axios from "axios";
// import url from '@/http/http'
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      videoFlag: false,
      //是否显示进度条
      videoUploadPercent: "",
      //进度条的进度，
      isShowUploadVideo: false,
      //显示上传按钮
      videoForm: {
        showVideoPath: ""
      }
    };
  },
  methods: {
    getData() {
      axios
        .get("/api/getHello", {
          params: {
            id: 123,
            name: "henty",
            age: 18
          }
        })
        .then(function(data) {
          console.log(data);
        });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //上传前回调
    beforeUploadVideo(file) {
      var fileSize = file.size / 1024 / 1024 < 50;
      if (
        [
          "video/mp4",
          "video/ogg",
          "video/flv",
          "video/avi",
          "video/wmv",
          "video/rmvb",
          "video/mov"
        ].indexOf(file.type) == -1
      ) {
        alert("请上传正确的视频格式");
        return false;
      }
      if (!fileSize) {
        alert("视频大小不能超过50MB");
        return false;
      }
      this.isShowUploadVideo = false;

      //  let fd = new FormData();
      // fd.append("files", file); //传文件
      // // fd.append('id',this.srid);//传其他参数
      // console.log(fd.get('files'))
      // axios.post("/api/video", fd).then(function(res) {
      //     console.log(res)
      // });
      // return false; //屏蔽了action的默认上传
    },
    //进度条
    uploadVideoProcess(event, file, fileList) {
      this.videoFlag = true;
      this.videoUploadPercent = file.percentage.toFixed(0) * 1;
    },
    //上传成功回调
    handleVideoSuccess(res, file) {
      console.log(res);
      console.log(file);
      this.isShowUploadVideo = true;
      this.videoFlag = false;
      this.videoUploadPercent = 0;

      // 前台上传地址
      if (file.status == "success") {
        this.videoForm.showVideoPath = file.url;
      } else {
        alert("上传失败，请重新上传");
      }

      // //后台上传地址
      // if (res.Code == 0) {
      //   this.videoForm.showVideoPath = res.Data;
      // } else {
      //   alert(res.Message);
      // }
    }
  }
};
</script>

<style lang="less" scoped>
.albumvideo {
  min-height: 300px;

  .upload {
    float: left;
    .pic {
      margin-left: 60px;
    }
    .type_title {
      position: relative;
      width: 60px;
      height: 60px;
      margin: 10px;
      background: black;
      opacity: 0.4;
      font-size: 0.7rem;

      .el-icon-plus {
        font-size: 20px;
        color: #fff;
        position: absolute;
        top: 12px;
        left: 50%;
        transform: translateX(-50%);
        text-align: center;
      }
      span {
        color: #fff;
        position: absolute;
        left: 5px;
        bottom: 5px;
      }
    }
  }
  .plan {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%;);
  }
  .Upload_pictures {
    clear: both;
    font-size: 0.6rem;
    color: red;
    padding: 10px;
    span {
      display: block;
      padding-bottom: 2px;
    }
  }
}
</style>