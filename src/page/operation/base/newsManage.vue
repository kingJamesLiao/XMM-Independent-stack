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
      <template v-for="(val , i) in tableTypes">
        <el-table-column
          v-if="val.type === 'normal'"
          :key="i"
          :prop="val.props"
          :label="val.lable"
          :width="val.width"
        ></el-table-column>
      </template>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-dropdown size="mini" split-button type="primary">
            编辑
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="handleDelete(scope.$index, tableData)">删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>

    <div class="batch">
      <el-button @click="toggleSelection(tableData)">全选</el-button>
      <el-button class="batchBtn" type="danger" @mouseover="this.show=true" @click="del">批量删除</el-button>
    </div>

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
    <!-- 删除多个 -->
    <el-dialog title="提示" :visible.sync="delVisible" width="300px" center>
      <div class="del-dialog-cnt">删除不可恢复，是否确定删除？</div>

      <span slot="footer" class="dialog-footer">
        <el-button @click="delVisible = false">取 消</el-button>

        <el-button type="primary" @click="badCodeRemoveHandle">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["btnShow", "plaInput", "tableData", "tableTypes"],
  data() {
    return {
      currentPage: 1,
      pagesize: 6, //默认每页显示6条
      multipleSelection: [],
      delVisible: false, //删除提示弹框的状态
      delarr: [], //存放删除的数据
      value: true,
      input2: "",
      value2: 3,
      badCodeSelection: [],
      idx: ""
    };
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
    del() {
      this.delVisible = true;
    },
    badCodeRemoveHandle() {
      this.badCodeSelection.forEach(item => {
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].id === item.id) {
            this.tableData.splice(i, 1);
            break;
          }
        }
      });
      this.badCodeSelection = [];
      this.delVisible = false; //关闭删除提示模态框
    },
    handleDelete(index, rows) {
      rows.splice(index, 1);
    },
    toggleSelection(rows) {
      if (rows) {
        this.$refs.multipleTable.clearSelection(); //全选之前情空
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.checkedGameId : [];
      this.isIndeterminate = false;
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
  .batch {
    margin-top: 20px;
    position: relative;
    .batchBtn {
      &:hover {
        opacity: 0.9;
      }
    }
    .block {
      margin-top: 20px;
    }
  }

  .block {
    margin-top: 20px;
    float: right;
  }
  .img-dialog {
    .el-dialog__header {
      padding: 0 !important;
    }
  }
}
</style>