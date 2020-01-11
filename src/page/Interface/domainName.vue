<template>
  <div class="list common">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-button size="medium" class="domainBtn">我的域名</el-button>
          <el-button size="medium" class="domainBtn2">注册域名</el-button>
          <el-tabs v-model="activeName" type="card">
            <el-tab-pane label="店铺域名管理" name="first">
              <div class="head">
                <p>系统分配的免费测试域名: xxxx.isXMM.com</p>
                <img @click="alter" src="../../assets/style/image/redact.png" alt />
              </div>
              <div class="domain_center">
                <p>您还没给网站绑定自己的域名哦!</p>
                <el-button class="center_btn">绑定域名</el-button>
              </div>
              <div class="domain_footer">
                <div style="paddingTop:10px;">
                  <p>绑定域名之前,请先做好域名的解析。在我司注册的域名可以直接绑定自动解析。</p>
                  <p>请做好如下解析:</p>
                </div>
                <div class="footer_tit">
                  <el-table
                    ref="singleTable"
                    :data="tableData"
                    highlight-current-row
                    style="width: 100%"
                  >
                    <el-table-column  width="50"></el-table-column>
                    <el-table-column property="hostName" label="主机名" width="120"></el-table-column>
                    <el-table-column property="type" label="类型" width="150"></el-table-column>
                    <el-table-column property="parseValue" label="解析值" width="360"></el-table-column>
                    <el-table-column property="ttl" label="TTL" width="120"></el-table-column>
                    <el-table-column property="explain" label="说明"></el-table-column>
                  </el-table>
                </div>
              </div>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
    <div class="alter">
        <alter-domain v-show="isShow" @fun="change" :isShow="isShow"></alter-domain>
    </div>
  </div>
</template>

<script>
import list from "../../common/commoList";
import alterDomain from "./base/alterDomain"
export default {
  data() {
    return {
      activeName: "first",
      isShow : false,
      tableData: [
        {
          hostName: "@",
          type: "A",
          parseValue: "205.209.165.132",
          ttl : "600" ,
          explain : "跳转"
        },
        {
          hostName: "www",
          type: "CHAME",
          parseValue: "48962.cdn-ent-us01.ymcart.net.",
          ttl : "600" ,
          explain : "PC端"
        },
        {
          hostName: "m",
          type: "CHAME",
          parseValue: "48962.cdn-ent-us01.ymcart.net.",
          ttl : "600" ,
          explain : "移动端"
        }
      ],
      currentRow: null
    };
  },
  components: {
    list,
    alterDomain
  },
  methods: {
      alter(){
          this.isShow = true;
      },
      change(data){
      this.isShow = data;
    }
  }
};
</script>

<style lang="less" scoped>
// @import "../../style/mixin";

.list {
  padding: 20px;
  .menttle {
    padding: 10px;
    position: relative;
    .domainBtn {
      position: absolute;
      right: 10px;
      z-index: 99;
    }
    .domainBtn2 {
      position: absolute;
      right: 115px;
      z-index: 99;
    }
    .head {
      margin-top: 10px;
      width: 99.5%;
      height: 3.8rem;
      border: 1px solid #6c8a8c;
      border-radius: 5px;
      background-color: #e3fdfe;
      line-height: 3.8rem;
      text-indent: 20px;
      display: flex;
      img {
        display: block;
        width: 25px;
        height: 25px;
        cursor: pointer;
        margin: auto 5px;
      }
    }
    .domain_center {
      height: 20rem;
      border-bottom: #ddd solid 1px;
      position: relative;
      p {
        margin: 0 auto;
        letter-spacing: 0.5px;
        color: #999;
        text-align: center;
        position: absolute;
        top: 5.2rem;
        left: 0;
        right: 0;
      }
      .center_btn {
        width: 12.1rem;
        height: 2.9rem;
        margin: auto;
        background-color: #ea374c;
        border: none;
        color: #fff;
        font-size: 1rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        &:hover {
          opacity: 0.7;
        }
      }
    }
    .domain_footer {
      height: 22rem;
      p {
        font-size: 0.8rem;
        padding-top: 5px;
        color: #333;
      }
      .footer_tit{
          margin-top: 20px;
          border: #eee solid 1px; 
          border-bottom: none;
      }
    }
  }
  .alter{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 32%;
        margin-top: -6rem;
        z-index: 99;
    }
}
</style>