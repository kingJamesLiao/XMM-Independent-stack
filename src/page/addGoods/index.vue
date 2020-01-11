<template>
  <div class="common manage">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple menttle">
          <el-tabs v-model="activeName"  type="border-card">
            <el-tab-pane label="基本信息" name="first">
                <basic-info></basic-info>
            </el-tab-pane>
            <el-tab-pane label="规格属性" name="second">
                <shuxing></shuxing>
            </el-tab-pane>
            <el-tab-pane label="商品相册" name="third">
                <goods-photo></goods-photo>
            </el-tab-pane>
            <el-tab-pane label="SEO设置" name="fourth">
                <seo-set></seo-set>
            </el-tab-pane>
            <el-tab-pane label="图文描述" name="fifth">
                <image-text></image-text>
            </el-tab-pane>
            <el-tab-pane label="商品关联" name="sixth">
      
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>

import basicInfo from './base/basicInfo'
import shuxing from './base/shuxing'
import goodsPhoto from './base/goodsPhoto'
import seoSet from './base/seoSet'
import imageText from './base/imageText'

export default {
  data() {
    return {
      activeName: "first"
    };
  },
  components : {
      basicInfo,
      shuxing,
      goodsPhoto,
      seoSet,
      imageText
  }
};
</script>

<style lang="less" scoped>

.manage {
  position: relative;
  
  .menttle {
    padding: 10px;
    background: #FAFAFA;
    
  }
}
</style>