<template>
    <div class="psw common">
        <div class="admin">
            <h1>更改密码</h1>
            <el-row :gutter="20">
            <el-col :span="24">
                <div class="grid-content bg-purple step passw inp">
                    <div class="alter">
                        <span class="item" is-dot>登录名</span>
                        <span class="item adminname" is-dot>admin</span>
                    </div>
                    <div class="alter"><el-badge :is-dot="isshow" class="item">密码
                        </el-badge>
                        <el-input v-model="input" class="pass1"  @input="ref()" clearable placeholder="请输入内容"></el-input>
                        </div>
                    <div class="alter"><el-badge :is-dot="isshows" class="item">确认密码</el-badge>
                    <el-input v-model="input2"  class="pass1" @input="refs()" clearable placeholder="请输入内容"></el-input></div>
                </div>
            </el-col>
            </el-row>
             <el-button class="btn" @click="open" >&nbsp;&nbsp;提交&nbsp;&nbsp;</el-button>
        </div>
    </div>
</template>

<script>
export default {

    data(){
        return{
            input : '',
            input2 : '',
            isshow : true,
            isshows : true
        }
    },
    methods: {
        open(){
            if(this.input === '' || this.input2 === ''){
               this.$message({
                    showClose: true,
                    message: '密码不能为空,请重新输入!',
                    type: 'error'
                });
            }else if(this.input != this.input2){
                 this.$message({
                    showClose: true,
                    message: '两次密码输入不一致!',
                    type: 'warning'
                });
            }
        },
        ref(){
            if(this.input != ''){
                this.isshow = false
            }else{
                this.isshow = true
            }
        },
        refs(){
            if(this.input2 != ''){
                this.isshows = false
            }else{
                this.isshows = true
            }
        }
    }
}
</script>

<style lang="less" scoped>
@import "../../style/mixin";
    .psw{

        .admin{
            padding-top:1rem;
            background: #FAFAFA;
             margin-left: 15px;
            h1{
                margin-left: 15px;
                margin-bottom: 15px;
                font-size: 1.5rem;
                font-weight: 100;
                color: #555;
            }
            .passw{
                height: 10rem;;
            }
            .btn{
                margin-left: 15px;
                margin-bottom: 15px;
                border-radius: 0;
                background: #7D7DC3;
                border: none;
                color: #FAFAFA;
            }
            .inp{
                display: -webkit-flex;
                flex-direction: column;//垂直
                justify-content: center;
               font-size: .8rem;
               color: #666;
               position: relative;
     
                .alter{
                margin-left: 15px;
                margin-top: 15px;
                flex: 1;
                .pass1{
                    max-width: 280px;
                    max-height: 50px;
                    position: absolute;
                    left: 8rem;
                    margin-top: -12px;
                }
                .adminname{
                     position: absolute;
                     left: 8rem;
                }
            }
            }
        }
    }
</style>