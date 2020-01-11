import Vue from 'vue'
import Router from 'vue-router'

import login from '@/page/login.vue'
import headTop from '@/components/headTop.vue'
import manage from '@/page/manage.vue'

//主页
import homePage from '@/page/home/homePage'
import homeShop from '@/page/home/homeShop'
import homePsw from '@/page/home/homePsw'
import homeOut from '@/page/home/homeOut'

//订单区
import orderMent from '@/page/order/orderMent'
import orderPay from '@/page/order/orderPay'
import orderGoods from '@/page/order/orderGoods'
import orderExport from '@/page/order/orderExport'

//商品区
import cManage from '@/page/commodity/cManage'
import sortManage from '@/page/commodity/sortManage'
import brandManage from '@/page/commodity/brandManage'
import brankList from '@/page/commodity/base/brankList'

//会员区 
import mManage from '@/page/memder/mManage'
import messList from '@/page/memder/messList'
import mCollect from "@/page/memder/mCollect"
import mGoods from '@/page/memder/mGoods'
import reply from '@/page/memder/base/reply.vue'

//运营区
import operOffer from '@/page/operation/operOffer'
import postage from '@/page/operation/postage'
import activity from '@/page/operation/activity'
import coupon from '@/page/operation/coupon'
import news from '@/page/operation/news'
import addActivities from '@/page/operation/base/addActivities'
import addCoupon from '@/page/operation/base/addCoupon'
import addNews from '@/page/operation/base/addNews'

//添加商品
import index  from '@/page/addGoods/index'

//配置
import crrencyMent from '@/page/setting/crrencyMent'
import payMent from '@/page/setting/payMent'
import userAccount from '@/page/setting/userAccount'
import editUser from '@/page/setting/base/editUser'
import editPay from '@/page/setting/base/editPay'

//界面
import pcPlate from '@/page/interface/pcPlate'
import domainName from '@/page/interface/domainName'
import alterDomain from '@/page/interface/base/alterDomain'
import phonePlate from '@/page/interface/phonePlate'
import homeSlide from '@/page/interface/homeSlide'
import uploadAD from '@/page/interface/base/uploadAD'
import help from '@/page/interface/helpCenter'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/manage',
      name: '',
      component: manage,
      children: [{
          path: '/homePage',
          component: homePage,
          meta: ['主页', '面板主页'],
        },
        {
          path: '/homeShop',
          component: homeShop,
          meta: ['主页', '开店向导']
        },
        {
          path: '/homePsw',
          component: homePsw,
          meta: ['主页', '更改密码']
        },
        {
          path: '/homeOut',
          component: homeOut,
          meta: ['主页', '退出登录']
        },
        {
          path: '/orderMent',
          component: orderMent,
          meta: ['订单', '订单管理']
        },
        {
          path: '/orderPay',
          component: orderPay,
          meta: ['订单', '收款记录']
        },
        {
          path: '/orderGoods',
          component: orderGoods,
          meta: ['订单', '发货记录']
        },
        {
          path: '/orderExport',
          component: orderExport,
          meta: ['订单', '订单导出']
        },
        {
          path: '/cManage',
          component: cManage,
          meta: ['商品', '商品管理']
        },
        {
          path: '/sortManage',
          component: sortManage,
          meta: ['商品', '分类管理']
        },
        {
          path: '/brandManage',
          component: brandManage,
          meta: ['商品', '品牌管理']
        },
        {
          path: '/mManage',
          component : mManage,
          meta : ['会员' , '会员管理']
        },
        {
          path : '/brankList',
          component : brankList,
          meta : ['品牌列表' , '添加']
        },
        {
          path: '/messList',
          component : messList,
          meta : ['会员' , '留言列表']
        },
        {
          path: '/mCollect',
          component : mCollect,
          meta : ['会员' , '会员收藏']
        },
        {
          path: '/mGoods',
          component : mGoods,
          meta : ['会员' , '商品评论']
        },
        {
          path : '/reply/:id',
          component : reply,
          meta : ['会员' , '商品评论' , '回复']
        },
        {
          path: '/operOffer',
          component : operOffer,
          meta : ['运营' , '特价设置']
        },
        {
          path: '/postage',
          component : postage,
          meta : ['运营' , '包邮设置']
        },
        {
          path: '/activity',
          component : activity,
          meta : ['运营' , '全场活动']
        },
        {
          path: '/coupon',
          component : coupon,
          meta : ['运营' , '优惠券']
        },
        {
          path: '/news',
          component : news,
          meta : ['运营' , '新闻管理']
        },
        {
          path : '/addNews',
          component : addNews,
          meta : ['新闻' , '添加新闻']
        },
        {
          path : '/addActivities',
          component : addActivities , 
          meta : ['全场活动' , '添加活动']
        },
        {
          path : '/addCoupon',
          component : addCoupon , 
          meta : ['优惠券' , '添加优惠券']
        },
        {
          path: '/addGoods',
          component : index,
          meta : ['添加商品' , '基本信息']
        },
        {
          path : '/crrencyMent',
          component : crrencyMent,
          meta : ['配置' , '主货币管理']
        },
        {
          path : '/payMent' ,
          component : payMent ,
          meta : ['配置' , '支付管理']
        },
        {
          path : '/userAccount' , 
          component : userAccount , 
          meta : ['配置' , '员工账号']
        },
        {
          path : '/editUser' , 
          component : editUser , 
          meta : ['员工日志' , '添加']
        },
        {
          path : '/editPay' ,
          component : editPay,
          meta : ['支付管理' , '编辑支付方式']
        },
        {
          path : '/pcPlate' ,
          component : pcPlate ,
          meta : ['界面' , 'pc模板']
        },
        {
          path : '/domainName' ,
          component : domainName , 
          meta : ['界面' , '店铺域名']
        },
        {
          path : '/alterDomain',
          component : alterDomain,
          meta : [ '店铺域名' , '修改域名']
        },
        {
          path : '/phonePlate' ,
          component : phonePlate , 
          meta : [ '界面' , '手机模板']
        },
        {
          path : '/homeSlide',
          component : homeSlide ,
          meta : [ '界面' , '首页幻灯片']
        },
        {
          path : '/uploadAD',
          component : uploadAD , 
          meta : ['首页幻灯片' , '添加']
        },
        {
          path : '/helpCenter',
          component : help , 
          meta : ['界面' , '帮助中心']
        }
      ]
    }
  ]
})
