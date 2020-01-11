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
      <el-table-column label="商品图" prop="src" width="120" align="center">
        <template slot-scope="scope">
          <img
            :src="scope.row.src"
            style="width: 50px;height:50px;"
            @click="openImg(scope.row.src)"
          />
        </template>
      </el-table-column>
      <template v-for="(val , i) in tableTypes">
        <el-table-column
          v-if="val.type === 'normal'"
          :key="i"
          :prop="val.props"
          :label="val.lable"
          :width="val.width"
        ></el-table-column>
      </template>
    </el-table>
    <!-- 点击商品图展示框 -->
    <el-dialog width="400px" :visible.sync="imgVisible" class="img-dialog">
      <el-card :body-style="{ padding: '0px' }">
        <img :src="dialogImgUrl" width="100%" height="100%" />
      </el-card>
    </el-dialog>

    <div class="batch">
      <el-button @click="toggleSelection(tableData)">全选</el-button>
      <el-button class="batchBtn" type="danger" @mouseover="this.show=true" @click="del">取消包邮</el-button>
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
      <div class="del-dialog-cnt">是否确定取消包邮？</div>

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
      imgVisible: false, //点击大图展示框
      dialogImgUrl: "", //大图d地址
      value: true,
      input2: "",
      value2: 3,
      badCodeSelection: [],
      idx: ""
    };
  },
  methods: {
    //回复跳转路由
    revert(idx, tableData) {
      idx = (this.currentPage - 1) * this.pagesize + idx || idx; //对应的点击序号
      console.log(tableData[idx]);
      this.$router.push({ path: "/reply/:idx", query: { id: tableData[idx] } });
    },
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
      console.log("取消包邮");
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
    // 点击商品图展示图片
    openImg(url) {
      if (url) {
        this.imgVisible = true;
        this.dialogImgUrl = url;
      }
    }, ///////////分页
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