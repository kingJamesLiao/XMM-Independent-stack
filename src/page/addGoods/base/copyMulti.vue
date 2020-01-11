<template>
  <div class="el-table-box">
    <el-table :data="tableData">
      <el-table-column label="状态" prop="guige"></el-table-column>
      <el-table-column label="图片" ref="uploadElement">
        <template slot-scope>
          <!-- <div @click="addImage" class="add_img">
            +
          </div>
          <div class="show_img">
            <img src="../../../assets/style/image/admin_shop.png" alt="">
            <span>X</span>
          </div>-->
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :limit="1"
            :on-remove="handleRemove"
            :on-change="show"
            :class="{hide:hideUpload}"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt />
          </el-dialog>
        </template>
      </el-table-column>
      <el-table-column label="SKU编号">
        <template slot-scope>
          <input type="text" />
        </template>
      </el-table-column>
      <el-table-column label="名称">
        <template slot-scope>
          <input type="text" />
        </template>
      </el-table-column>
      <el-table-column label="原价">
        <template slot-scope>
          <input type="text" />
        </template>
      </el-table-column>
      <el-table-column label="售价">
        <template slot-scope>
          <input type="text" />
        </template>
      </el-table-column>
      <el-table-column label="二级售价">
        <template slot-scope>
          <input type="text" />
        </template>
      </el-table-column>
      <el-table-column label="二级起售量">
        <template slot-scope>
          <input type="text" />
        </template>
      </el-table-column>
      <el-table-column label="重量">
        <template slot-scope>
          <input type="text" />
        </template>
      </el-table-column>
    </el-table>
    <div @click="del" class="del"></div>
    <div class="copySpec">
         <h1>规格:</h1>
      <div v-for="(sedList ,ind) in inpList">
        <input :key="ind" type="text" v-model="sedList.name" />
      </div>
      <div class="add" @click="addSedSize"></div>
       <div class="minus" @click="minusSize"></div>
      <span>约扣除运费: 53THB + 35THB</span>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      comName: [],
      inpList: [
        {
          name: ""
        } 
      ],
      tableData: [{ guige: "单规格", time: "2019-12-06" }],
      dialogImageUrl: "",
      dialogVisible: false,
      hideUpload: false,
      limitCount: 1
    };
  },
  methods: {
    handleRemove(file, fileList) {
      // this.hideUpload = fileList.length >= this.limitCount;
      // console.log(fileList.length,this.hideUpload)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;  
    },
    show(file, fileList) {
      console.log(file,fileList)
      // this.hideUpload =  fileList.length >= this.limitCount;
      // console.log(this.hideUpload)
    },
    del() {
      this.$emit("func", "");
    },
    //添加尺码
    addSedSize() {
      this.inpList.push({
        name : "",
      });
    },
     minusSize(){
      if(this.inpList.length> 1){
         this.inpList.pop()
      }else{
        this.$message({
            showClose: true,
            message: "至少填写一个规格!",
            type: "error"
          });
      }
    }
  }
};
</script>

<style lang="less" scoped>
/deep/ .el-upload--picture-card {
  width: 70px;
  height: 70px;
  line-height: 80px;
}
/deep/ .el-upload-list--picture-card .el-upload-list__item {
  width: 80px;
  height: 80px;
}
.hide /deep/ .el-upload--picture-card {
  display: none;
}

.el-table-box {
  position: relative;
  p {
    position: absolute;
    right: 1.8rem;
    top: 15px;
    font-size: 0.4rem;
    color: #094599;
    font-weight: 666;
    cursor: pointer;
  }
  span {
    font-size: 0.9rem;
    color: red;
    width: 100%;
    display: block;
    height: 35px;
    line-height: 35px;
    font-weight: 600;
    text-align: right;
    // border-bottom: 1px #eee solid;
  }
  
}
.commo {
  font-size: 10px;
  margin-bottom: 2px;
  .content {
    display: inline-block;
    margin-left: 80px;
    font-size: 0.6rem;
    color: #666;
    min-width: 8rem;
    height: 18px;
    line-height: 20px;
    .freight {
      margin-left: -25px;
      width: 50px;
    }
  }
}
input {
  border: 1px #bbb solid;
  max-width: 100px;
  &::placeholder {
    color: #aaa;
    font-size: 0.8rem;
    text-indent: 2px;
  }
}
.del {
  width: 16px;
  height: 16px;
  position: absolute;
  right: 3px;
  top: 15px;
  z-index: 999;
  background-image: url("../../../assets/style/image/del.png");
  background-size: 100% 100%;
  cursor: pointer;
}
 .copySpec {
    font-size: 0.9rem;
    width: 100%;
    height: 35px;
    line-height: 35px;
    display: flex;
    position: relative;
    align-items: center;
    span {
      display: block;
      font-weight: 550;
      position: absolute;
      right: 0;
      color: red;
      max-width: 240px;
    }
    h1 {
      font-size: 0.6rem;
      color: #666;
      font-weight: 600;
    }
    input {
      width: 60px;
      height: 15px;
      color: #666;
      margin-left: 5px;
    }
    .add{
      width: 12px;
      height: 12px;
      margin-left: 5px;
      cursor: pointer;
      background-image: url("../../../assets/style/image/addInp.png");
      background-size: 100% 100%;
    }
    .minus{
      width: 12px;
      height: 12px;
      margin-left: 5px;
      background-image: url("../../../assets/style/image/minusInp.png");
      background-size: 100% 100%;
      cursor: pointer;
    }
  }
</style>