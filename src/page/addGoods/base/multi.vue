<template>
  <div class="el-table-box">
    <el-table :data="tableData" @change="changeTable">
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
            action="api/getHello"
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
          <input type="text" v-model="SKU" @change="changeTable" />
        </template>
      </el-table-column>
      <el-table-column label="名称">
        <template slot-scope>
          <input type="text" v-model="name" @change="changeTable" />
        </template>
      </el-table-column>
      <el-table-column label="原价">
        <template slot-scope>
          <input type="text" v-model="price" @change="changeTable" />
        </template>
      </el-table-column>
      <el-table-column label="售价">
        <template slot-scope>
          <input type="text" v-model="shoujia" @change="changeTable" />
        </template>
      </el-table-column>
      <el-table-column label="二级售价">
        <template slot-scope>
          <input type="text" v-model="secondPrice" @change="changeTable" />
        </template>
      </el-table-column>
      <el-table-column label="二级起售量">
        <template slot-scope>
          <input type="text" v-model="secondSales" @change="changeTable" />
        </template>
      </el-table-column>
      
      <el-table-column label="重量">
        <template slot-scope>
          <input type="text" v-model="weight" @change="changeTable" />
        </template>
      </el-table-column>
    </el-table>
    <p>*规则</p>
    <div class="spec">
     <h1>规格:</h1>
      <div v-for="(list ,index) in inpList">
        <input :key="index" type="text" v-model="list.name">       
      </div>
      <div class="add" @click="addSize"></div>
       <div class="minus" @click="minusSize"></div>
    <span>约扣除运费: 53THB + 35THB</span>
    </div>
    <div @click="tianjia" class="tianjia"></div>
    <component
      v-for="(item,index) in comName"
      :is="item.name"
      :key="index"
      @func="getContent(index)"
    ></component>
  </div>
</template>

<script>
import copyMulti from "./copyMulti";
export default {
  data() {
    return {
      comName: [],
      inpList :[{
        name  : ''
      }],
      tableData: [{ guige: "单规格", time: "2019-12-06" }],
      SKU: "",
      name: "",
      price: "", //原价
      shoujia: "", //售价
      secondPrice: "", //二级售价
      secondSales: "", //二级起售量
      guige: "", //规格
      weight: "", //重量
      dialogImageUrl: "",
      dialogVisible: false,
      hideUpload: false,
      limitCount: 1
    };
  },
  components: {
    copyMulti
  },
  methods: {
    changeTable() {
      this.$emit("func", {
        inpList : this.inpList,
        SKU: this.SKU,
        name: this.name,
        price: this.price,
        shoujia: this.shoujia,
        secondPrice: this.secondPrice,
        secondSales: this.secondSales,
        guige: this.guige,
        weight: this.weight,
        dialogImageUrl: this.dialogImageUrl
      });
    },
    handleRemove(file, fileList) {
      // this.hideUpload = fileList.length >= this.limitCount;
      console.log(fileList.length, this.hideUpload);
    },
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    show(file, fileList) {
      // console.log(file)
      // var tianjia = document.getElementsByClassName("el-upload")
      // tianjia[0].style.width = 180 + 'px'
      // this.hideUpload = fileList.length >= this.limitCount;
    },
    getContent(index) {
      console.log(index)
      this.comName.splice(index, 1);//s
    },
    tianjia() {
      this.comName.push({
        name: "copyMulti"
      });
    },//添加尺码
    addSize(){
      this.inpList.push({
        name : ''
      })
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
  .spec {
    font-size: 0.9rem;
    width: 100%;
    height: 35px;
    line-height: 35px;
    display: flex;
    position: relative;
    align-items: center;        
    // border-bottom: 1px #eee solid;
    span{
      display: block;
      font-weight: 550;
      position: absolute;
      right: 0;
      color: red;
    }
    h1{
      font-size: .6rem;
      color:#666;
      font-weight: 600;
    }
    input{
      width: 60px;
      height: 15px;
      color: #666;
      margin-left: 5px;
    }
    .add{
      width: 12px;
      height: 12px;
      margin-left: 5px;
      background-image: url("../../../assets/style/image/addInp.png");
      background-size: 100% 100%;
      cursor: pointer;
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
.tianjia {
  width: 16px;
  height: 16px;
  position: absolute;
  right: 2px;
  top: 16px;
  z-index: 999;
  background-image: url("../../../assets/style/image/addInp.png");
  background-size: 100% 100%;
  cursor: pointer;
}
</style>