<template>
    <div>
         <div class="inp">
            <el-input
              placeholder="请输入订单编号或支付流水号"
              suffix-icon="el-icon-search"
            ></el-input>
          </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tableData : []
        }
    }
}
</script>

<style lang="less" scoped>
    .inp{
        width: 20rem;
        height: 50px;
        border-radius: 2px;
        display: flex;
        .sousuo{
            border:1px solid #DCDFE6;
            width: 8rem;
            height: 40px;
            margin-left: 2px;
            border-radius: 4px;
            font-size: .9rem;
            color: #aaa;
            background: none;
            text-align: center;
            line-height: 40px;
        }
    }
  
</style>