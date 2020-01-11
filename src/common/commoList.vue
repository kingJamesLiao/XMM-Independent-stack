<template>
  <div>
    <div class="inp">
      <el-input :placeholder="plaInput" suffix-icon="el-icon-search" v-model="input2"></el-input>
      <button v-show="btnShow" class="sousuo">高级搜索</button>
    </div>
    <el-table
      :data="tableData && tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%"
      highlight-current-row
      stripe
      :header-cell-style="{background:'#d3dce6',color:'#606266'}"
    >  
    <template v-for="(val , i) in tableTypes">
      <el-table-column  
         v-if="val.type === 'normal'"
        :key="i"
        :prop="val.props" 
        :label="val.lable"
        :width="val.width">
      </el-table-column>
      <!-- <el-table-column prop="commo" :label="types" width="180"></el-table-column>
      <el-table-column prop="money" label="金额" width="180"></el-table-column>
      <el-table-column prop="address" label="订单状态"></el-table-column>
      <el-table-column prop="pay" label="支付方式"></el-table-column>
      <el-table-column prop="id" label="会员名"></el-table-column> -->
    </template>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="tableData && tableData.length"
      ></el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  props: ['tableData', 'tableTypes','btnShow' ,'plaInput'],
  data() {
    return {
      currentPage: 1,
      pagesize: 10,
      input2: ''
    };
  },
  computed: {
    
  },
  methods: {
    handleSizeChange: function(size) { //pagesize改变时触发
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) { // currentPage改变时会触发
      this.currentPage = currentPage;
    }
  }
};
</script>

<style lang="less" scoped>
     .inp{
        width: 22rem;
        height: 50px;
        border-radius: 2px;
        display: flex;
        .sousuo{
            border:1px solid #DCDFE6;
            width: 6rem;
            height: 40px;
            margin-left: 2px;
            border-radius: 4px;
            font-size: .8rem;
            color: #aaa;
            background: none;
            text-align: center;
            line-height: 40px;
        }
    }
  
</style>

