<template>
  <div>
    <label @dblclick="setEdit(true)">{{item2.name}}</label>
    <input
      class="inp"
      ref="txt"
      v-show="onEdit"
      type="text"
      v-bind:value="item2.name"
      @keyup.enter="setEdit(false)"
    />
    <el-checkbox class="box"></el-checkbox>
    {{item2.id}}
  </div>
</template>

<script>
import * as todoTypes from "../../../store/todo-types"
export default {
  props: ["item" ,"item2", "index2"],
  data() {
    return {
      onEdit: false,
      current: 0
    };
  },
  methods: {
    setEdit(trueorfalse) {
      this.onEdit = trueorfalse;
      //当结束编辑的时候，要发送请求
      if(trueorfalse == false){
          this.$store.dispatch(todoTypes.UPDATE , {
              "name" : this.item.name,
              "checked" : this.item2.name,
              "title" : this.$refs.txt.value
          })
      }
    
    }
  }
};
</script>

<style lang="less" scoped>

  .box {
    position: absolute;
    right: 30px;
  }
  .inp {
    height: 1.5rem;
    width: 10rem;
    position: absolute;
    left: 30px;
    margin-top: 0.6rem;
  }


</style>