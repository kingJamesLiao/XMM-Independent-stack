<template>
  <div class="list">
    <div class="inp">
      <el-input :placeholder="plaInput" suffix-icon="el-icon-search" v-model="input2"></el-input>
      <button v-show="btnShow" class="sousuo">高级搜索</button>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData && tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange"
      row-key="id"
      :header-cell-style="{background:'#d3dce6',color:'#606266'}"
    >
      <!-- row-key="id"  :reserve-selection="true" 实现分页记忆功能 -->
      <el-table-column type="selection" :reserve-selection="true" width="45"></el-table-column>
      <template v-for="(val , i) in types">
      <el-table-column  
         v-if="val.type === 'normal'"
        :key="i"
        :prop="val.props" 
        :label="val.lable"
        :width="val.width">
      </el-table-column>
      </template>
      <!-- <el-table-column label="序号" prop="tradeName"></el-table-column>
      <el-table-column label="分类名称" prop="pries"></el-table-column>
      <el-table-column label="属性模板" prop="busData"></el-table-column>
      <el-table-column label="排序" prop="sort"></el-table-column> -->
      <el-table-column label="状态">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.on"
            on-color="#00A854"
            on-text="启动"
            on-value="1"
            off-color="#F04134"
            off-text="禁止"
            off-value="0"
            @change="changeSwitch(scope.row)"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-dropdown size="mini" split-button type="primary">
            编辑
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>添加子类</el-dropdown-item>
              <el-dropdown-item>批量添加</el-dropdown-item>
              <el-dropdown-item @click.native="handleDelete(scope.$index, tableData)">删除</el-dropdown-item>
              <el-dropdown-item>预览</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>

    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-sizes="[6, 8, 10, 12]"
        :page-size="6"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData && tableData.length"
      ></el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  props: ["btnShow", "plaInput", "types"],
  data() {
    return {
      currentPage: 1,
      pagesize: 6, //默认每页显示6条
      multipleSelection: [],
      value: true,
      input2: "",
      isShow : false,
      tableData : []
    };
  },
  components : {
  },
  methods: {
    changeSwitch(data) {
      console.log(data);
      console.log(this.badCodeSelection);
    },
    handleSelectionChange(val) {
      // 用一个变量来存放被选中的index
      this.badCodeSelection = val;
    },
    handleDelete(index, rows) {
      rows.splice(index, 1);
    },
     ///////////分页
    handleSizeChange: function(size) {
      //pagesize改变时触发
      this.pagesize = size;
    },
    handleCurrentChange: function(currentPage) {
      // currentPage改变时会触发
      this.currentPage = currentPage;
    }
  }
};
</script>

<style lang="less" scoped>
.list {

  .inp {
    width: 22rem;
    height: 50px;
    border-radius: 2px;
    display: flex;
    .sousuo {
      border: 1px solid #dcdfe6;
      width: 6rem;
      height: 40px;
      margin-left: 2px;
      border-radius: 4px;
      font-size: 0.8rem;
      color: #aaa;
      background: none;
      text-align: center;
      line-height: 40px;
    }
  }

  
  .block {
    margin-top: 20px;
    float: right;
  }

}
</style>