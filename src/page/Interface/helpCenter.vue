<template>
  <div class="page">
    <div class="head">
      <div class="left">
        <div class="del">
          <p>帮助中心</p>
          <img src="../../assets/style/image/del.png" alt />
        </div>
        <div v-for="(item ,index) in todos" :key="index" :class="'select'">
          <div class="check">
            <label for>
              <i
                @click="oper(index)"
                :class="item.isShow ? 'el-icon-minus icon' : 'el-icon-plus icon'"
              ></i>
              {{item.name}}
            </label>
            <el-checkbox class="box"></el-checkbox>
          </div>
          <div v-show="item.isShow">
            <div v-for="(item2 ,index2) in item.data"
             :key="index2"
             :class="current == index2 ? 'cur' : 'checkColor'"
              @click="getItem(index2)">

              <item-list :item2="item2" :item="item" :index2="index2"></item-list>
            </div>
            <div v-show="item[index] === isShow ? true : false" class="checkColor add" ></div>
            <div class="checkColor add" @click="add(item.data ,index)">
              <i class="el-icon-circle-plus-outline"></i>
              添加新的二级
            </div>
            <div style="paddingTop:10px;"></div>
          </div>
        </div>
        <div class="select add">
          <i class="el-icon-circle-plus-outline"></i>
          添加新的一级
        </div>
        <div class="type">回到旧版</div>
      </div>
      <div class="right">
        <div class="head">Feedback</div>
        <div class="content">
          <feedback></feedback>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as todoTypes from "../../store/todo-types";
import { getTodos } from "@/api/index.js";


import itemList from "./base/itemList";
import feedback from "./base/feedback";
export default {
  data() {
    return {
      currentIcon: 0,
      current: 0,
      isShow : ''
    };
  },
  components: {
    itemList,
    feedback
  },
  methods: {
    add(item ,idx) {
 
      if (item.length > 4) {
        this.$message({
          showClose: true,
          message: "最多只能添加5个栏目",
          type: "error"
        });
      }else{ 
         this.$message({
          showClose: true,
          message: "程序开发中...",
          type: "warning"
        });
      }
    },
    oper(idx) {
      this.todos[idx].isShow = !this.todos[idx].isShow;
    },
    async getData() {
      let { itemList } = await getTodos();
      this.$store.dispatch(todoTypes.INIT, { itemList });
    },
     getItem(index) {
      this.current = index; // 把当前点击元素的index，赋值给activeClass
    }
  },
  activated() {
    this.getData();
  },
  computed: {
    todos() {
      return this.$store.state.todos; //获取全部栏目
    }
  }
};
</script>

<style lang="less" scoped>
.page {
  padding: 20px;
  .head {
    display: flex;
    width: 100%;
    height: 100vh;

    .left {
      flex: 2;
      margin-right: 10px;
      position: relative;
      .select,
      .type,
      .del {
        width: 100%;
        background: #f9f9f9;
        margin-bottom: 10px;
      }
      .icon {
        cursor: pointer;
      }
      .del {
        height: 6%;
        background: #f9f9f9;
        line-height: 55px;
        text-indent: 15px;
        color: #333;
        img {
          display: block;
          width: 1.2rem;
          height: 1.2rem;
          position: absolute;
          top: 1.25rem;
          right: 20px;
          cursor: pointer;
        }
      }
      .select {
        background: #fff;
        .cur,.checkColor {
          margin-left: 9%;
          background-color: #efefef;
          width: 83%;
          height: 2.8rem;
          font-size: 0.6rem;
          color: #333;
          line-height: 2.5rem;
          border-radius: 2px;
          text-indent: 10px;
          margin-bottom: 10px;
        }
        .cur {
          background-color: #7474bc;
          color: #fff;
        }
        .add {
          color: #7474bc;
          text-align: center;
          cursor: pointer;
        }
        
        .check {
          padding: 20px 0;
          padding-left: 20px;
          font-size: 0.8rem;
          color: #666;
          .box {
            position: absolute;
            right: 30px;
          }
        }
      }
      .type {
        height: 7.3%;
        background: #f9f9f9;
        text-align: center;
        font-size: 0.9rem;
        line-height: 70px;
        color: #666;
      }

      .add {
        color: #7474bc;
        text-align: center;
        line-height: 70px;
        cursor: pointer;
      }
    }
    .right {
      flex: 8;
      margin-left: 10px;
      .head {
        width: 100%;
        height: 6%;
        background: #f9f9f9;
        line-height: 55px;
        text-indent: 15px;
        color: #333;
      }
      .content {
        width: 100%;
        height: 94%;
        background: #fff;
      }
    }
  }
}
</style>