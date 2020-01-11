<template>
  <div class="manage_page fillcontain">
	  <head-top></head-top>
    <el-row style="height: 100%; ">
      <el-col :span="3" style="min-height: 100%; min-width: 200px; background-color: #FF6666;">
        <!-- :default-active="defaultActive" -->
        <el-menu style="min-height: 100%; background-color: #FF6666; " router>
          <!-- <el-menu-item index="manage">
             <i class="el-icon-menu"></i>主页
          </el-menu-item> -->
		  <el-submenu index="1">
            <template style="color: #f40" slot="title">
              <i class="el-icon-menu"></i>主页
            </template>
            <el-menu-item index="/homePage">面板主页</el-menu-item>
            <el-menu-item index="/homeShop">开店向导</el-menu-item>
            <el-menu-item index="/homePsw">更改密码</el-menu-item>
            <el-menu-item index="/homeOut"><el-button style="color:#303133" type="text" @click="open">退出登录</el-button></el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template style="color: #f40" slot="title">
              <i class="el-icon-shopping-cart-2"></i>订单
            </template>
            <el-menu-item index="/orderMent">订单管理</el-menu-item>
            <el-menu-item index="/orderPay">收款记录</el-menu-item>
            <el-menu-item index="/orderGoods">发货记录</el-menu-item>
            <el-menu-item index="/orderExport">订单导出</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-sold-out"></i>商品
            </template>
            <el-menu-item index="/cManage">商品管理</el-menu-item>
            <el-menu-item index="/sortManage">分类管理</el-menu-item>
			<el-menu-item index="/brandManage">品牌管理</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-user-solid"></i>会员
            </template>
            <el-menu-item index="/mManage">会员管理</el-menu-item>
			<el-menu-item index="/messList">留言列表</el-menu-item>
			<el-menu-item index="/mCollect">会员收藏</el-menu-item>
			<el-menu-item index="/mGoods">商品评论</el-menu-item>
            <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-edit"></i>运营
            </template>
            <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
            <el-menu-item index="operOffer">特价设置</el-menu-item>
			<el-menu-item index="/postage">包邮设置</el-menu-item>
			<el-menu-item index="/activity">全场活动</el-menu-item>
			<el-menu-item index="/coupon">优惠券</el-menu-item>
			<el-menu-item index="/news">新闻管理</el-menu-item>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-picture"></i>界面
            </template>
            <el-menu-item index="/pcPlate">pc模板</el-menu-item>
			<el-menu-item index="/phonePlate">手机模板</el-menu-item>
			<el-menu-item index="/domainName">店铺域名</el-menu-item>
			<el-menu-item index="/homeSlide">首张幻灯片</el-menu-item>
			<el-menu-item index="/helpCenter">帮助中心</el-menu-item>
            <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-setting"></i>配置
            </template>
            <el-menu-item index="/crrencyMent">主货币管理</el-menu-item>
			<el-menu-item index="/payMent">支付管理</el-menu-item>
			<el-menu-item index="/userAccount">员工账号</el-menu-item>
          </el-submenu>
		<el-submenu index="8">
            <template slot="title">
              <i class="el-icon-share"></i>推广
            </template>
			<el-menu-item index="">XMM开户</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-col>
      <el-col :span="20" style="height: 100%;overflow: auto;">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import headTop from '../components/headTop'
export default {
  computed: {
    // defaultActive: function(){
    // 	return this.$route.path.replace('/', '');
    // }
  },
  components: {
	  headTop
  },
  methods: {
      open() {
        this.$confirm('此操作将退出XMM后台管理系统, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消退出'
          });          
        });
      }
    }
};
</script>


<style lang="less">
@import "../style/mixin";
.manage_page{

.menuitem{
	width: 260px;
}
.el-submenu__title{
	
	color:#fff;
	&:hover{
		color: #000;
		i{
			color: black;
		}
	}
	i{
		color: #fff;
	}
}
}
</style>
