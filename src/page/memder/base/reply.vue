<template>
  <div class="psw common">
    <div class="admin">
      <h1>评论回复</h1>
      <el-row :gutter="20">
        <el-col :span="24">
          <div class="grid-content bg-purple step passw inp">
            <el-form ref="form"  label-width="80px" size="mini">
              <el-form-item label="商品">
                <div class="content">
                  <img :src="this.$route.query.id.src" alt />
                </div>
              </el-form-item>
              <el-form-item label="评论人名">
                <div class="content">向日葵向日葵向日葵</div>
              </el-form-item>
              <el-form-item label="邮箱">
                <div class="content">1264495127@qq.com</div>
              </el-form-item>
              <el-form-item label="评论内容">
                <div class="content">{{this.$route.query.id.tradeName}}</div>
              </el-form-item>
              <el-form-item label="评分">
                <div class="content">
                  <el-rate
                    v-model="this.$route.query.id.evaValue"
                    :allow-half="true"
                    disabled
                    text-color="#ff9900"
                  ></el-rate>
                </div>
              </el-form-item>
              <el-form-item label="回复内容">
                <div class="content">
                  <el-input
                    style="width:300px;"
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    v-model="textarea3"
                  ></el-input>
                </div>
              </el-form-item>
              <el-form-item size="large">
                <el-button type="primary">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        textarea: "",
        textarea3: ''
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
@import "../../../style/mixin";
.psw {
  .admin {
    padding-top: 1rem;
    background: #fafafa;
    margin-left: 15px;
    h1 {
      margin-left: 15px;
      margin-bottom: 15px;
      font-size: 1.2rem;
      font-weight: 100;
      color: #555;
    }
    .inp {
      padding: 20px 0;
      .content {
        display: inline-block;
        margin-left: 120px;
        font-size: 0.6rem;
        color: #666;
        img {
          width: 80px;
          height: 60px;
        }
      }
    }
  }
}
</style>