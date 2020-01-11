<template>
  <div class="page common">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple header">
          <div class="info">
            <img src="../../assets/style/image/info.png" alt />
            <span>您好,您的店铺没有绑定正式域名,客户无法直接输入域名访问网站下单哦!</span>
          </div>
          <div class="btn">
            <div class="icons">
              <el-button class="icon" size="small">绑定已有</el-button>&nbsp;&nbsp;或者
              <el-button class="icon" size="small">注册域名</el-button>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple nav">
          <div class="admin">
            <div class="bor">
              <img src="../../assets/style/image/admin.png" alt />
            </div>
          </div>
          <div class="adminTip">
            <div class="left">
              <h1>
                你好!
                <span>admin</span>
              </h1>
              <p>角色:&nbsp;&nbsp;超级管理员</p>
              <p>上次登录:</p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple nav">
          <div class="admin">
            <div class="bor">
              <img src="../../assets/style/image/admin_order.png" alt />
            </div>
          </div>
          <div class="adminTip">
            <div class="center">
              <p>
                当前需要处理的订单:
                <span>0</span>条
              </p>
              <p>
                当前需要处理的订单:
                <span>0</span>条
              </p>
              <p>
                当前需要处理的订单:
                <span>0</span>条
              </p>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple nav">
          <div class="admin">
            <div class="bor">
              <img src="../../assets/style/image/admin_shop.png" alt />
            </div>
          </div>
          <div class="adminTip">
            <div class="right_order">
              <div class="ad_name">未绑定域名</div>
              <div class="store statu">
                <p>店铺状态&nbsp;:</p>
                <div class="type run">运行中</div>
                <div class="type">试用版</div>
              </div>
              <div class="store"><p>店铺时间&nbsp;:</p><span>{{date}}545</span></div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple main"></div>
      </el-col>
      <el-col :span="8" class="main_right">
        <div class="grid-content bg-purple main_top"></div>
        <div class="grid-content bg-purple main_btn"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <div class="grid-content bg-purple footer"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple footer"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple footer"></div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple base"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import headTop from '../components/headTop'
export default {
  data() {
    return {
      date : new Date()
    };
  },
  components: {
    // headTop
  },
  mounted(){
    let self = this;
    this.timer = setInterval(() =>{
      self.date = new Date();
    } , 1000)
  },
  beforeDestroy(){
    if(this.timer){
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../style/mixin";
.page {
  .header {
    height: 3.5rem;
    display: flex;
    flex-direction: row;
    .info {
      width: 48%;
      height: 100%;
      display: flex;
      flex-direction: row;
      img {
        margin: auto 5px auto 15px;
        display: block;
        width: 32px;
        height: 32px;
      }
      span {
        font-size: 0.9rem;
        line-height: 3.5rem;
        color: #666;
      }
    }
    .btn {
      width: 52%;
      height: 100%;
      display: flex;
      flex-direction: row;
      .icons {
        margin: auto 2px;
        font-size: 0.9rem;
        color: #666;
        .icon {
          width: 7rem;
          height: 30px;
          font-size: 0.92rem;
          background-color: #7d7dc3;
          color: #fff;
          border: none;
          border-radius: 2px;
        }
      }
    }
  }
  .nav {
    height: 6rem;
    display: flex;
    .admin {
      flex: 3;
      position: relative;
      .bor {
        width: 4.3rem;
        height: 4.3rem;
        border: #ddd solid 4px;
        border-radius: 50%;
        margin: 7px auto;
        position: relative;

        img {
          width: 3rem;
          height: 3rem;
          margin: auto;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
      }
    }
    .adminTip {
      flex: 7;
      color: #333;
      .left {
        padding: 0.5rem 0;
        h1 {
          font-size: 1rem;
          font-weight: 400;
          span {
            font-weight: 700;
            padding-left: 8px;
          }
        }
        p {
          font-size: 0.5rem;
          padding-top: 0.5rem;
        }
      }
      .center {
        p {
          font-size: 0.7rem;
          padding-top: 0.65rem;
          span {
            padding-left: 5px;
            padding-right: 3px;
            font-weight: 600;
            color: red;
          }
        }
      }
      .right_order {
        .ad_name {
          padding-top: 0.5rem;
          font-size: 0.9rem;
          font-weight: 700;
          &::after {
            content: "";
            display: inline-block;
            width: 16px;
            height: 16px;
            background-image: url("../../assets/style/image/query.png");
          }
        }
        .statu{
           line-height: 1.7rem;
        }
        .store {
          font-size: 0.78rem;
          padding-top: .2rem;
          display: flex;
          p{
            min-width: 4rem;
            height: 1rem;

          }
          
           span{
            height: 18px;
            padding: 0 5px;
            font-size: 8px;
            font-size: .5rem;
            max-width: 230px;
            overflow: hidden;
          }
          .type{
            margin-bottom: .2rem;
            width: 3.2rem;
            height: 1.5rem;
            border: 1px #666 solid;
            margin-left: 5px;
            border-radius: 5px;
            text-align: center; 
            line-height: 1.5rem;
          }
          .run{
            color: #14D114;
            border: 1px solid #14D114;
          }
        }
      }
    }
  }
  .main {
    height: 20rem;
  }
  .main_right {
    height: 20rem;
    box-sizing: border-box;
    overflow: hidden;
    .main_top {
      height: 15rem;
    }
    .main_btn {
      margin-top: 20px;
      height: 9.6rem;
    }
  }
  .footer {
    height: 10rem;
  }
  .base {
    height: 3rem;
  }
}
</style>
