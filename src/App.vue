<template>
  <div id="app" class="fillcontain">
		    <router-view></router-view>
 </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style  lang="less">
html {
  font-size: 16px; /* 设计稿宽度/100 => 1rem = 16px*/
  min-width: 1366px;
  background: #F2F2F2;
}

@media only screen and (max-width: 1366px) {
  html {
    font-size: 14px; /* 1rem = 13.66px */
  }
}
  @import './style/common';
  .el-table__empty-text{ //没有数据样式
            line-height: 164px;
            height: 64px;
            width: 64px;
            margin: 40px 0;
            background-image: url('./assets/style/image/null.png');
            
        }
  
</style>
