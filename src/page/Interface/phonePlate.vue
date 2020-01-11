<template>
   <div class="page common">
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple header">
            <div class="left">
                <h1>当前皮肤</h1>
                <div class="add">  
                </div>
                <div class="add_til"> 
                    <div class="font_pad">
                        <h1>默认皮肤 t2532</h1>
                        <p>编号: 20191214-t2532-1</p>
                        <p>时间: 2019-12-14</p>
                        <div class="btn">
                            <el-button class="el_btn cur">参数配置</el-button>
                        </div> 
                        <div class="btn">         
                            <el-button class="el_btn">预览</el-button>
                        </div> 
                        <p>模板由XMM开发并且提供服务</p>
                    </div>
                </div>
            </div>
            <div class="grid-content bg-purple right">
            <div style="padding: 2.5rem;" >
                <h1>我的皮肤</h1>
                <div style="width :48rem;">
                    <div class="add">
                    <img src="../../assets/style/image/add_skin.png" alt="">
                    </div>
                    <div class="add">
                        <img src="../../assets/style/image/add_skin.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        </div>      
      </el-col>
    </el-row>
   </div>
</template>

<script>
export default {
    data () {
        return{
            current : 0,
            itemList : [
                { 'name' : '参数配置'},
                { 'name' : '预览'}
            ]
        }
    },
    methods : {
        getItem(index){
            this.current = index; // 把当前点击元素的index，赋值给activeClass
        }
    }
}
</script>

<style lang="less" scoped>
    .page{
        padding: 20px;
        position: relative;
        
        .header{
            height: 100vh;
            position: relative;
            overflow: hidden;
            .left{
               padding: 2.5rem;
               height: 100%;
            h1{
                font-size: 1.1rem;
                color: #2F2B2A;
            }
            .add{
                width: 17rem;
                height: 32rem;
                margin-top: 1.6rem;
                border: #aaa solid 1px;
                border-radius: 25px;

            }
            .add_til{
                width: 30rem;
                height: 18rem;
                border-radius: 2px;
                position: absolute;
                top:3rem;
                left: 22rem;
                .font_pad{
                    padding-top: 3rem;
                    padding-left: 20px;
                    h1{
                        font-size: .95rem;
                        font-family: "Microsoft YaHei";
                    }
                    p{
                        font-size: .6rem;
                        color: #999;
                        padding-top: 1.2rem;
                    }
                    .btn{
                        padding-top: .2rem;
                        width: 8.5rem;
                        height: auto;
                        .el_btn{
                            width:15rem;
                            height: 3rem;
                            margin-top: .9rem;
                            border: #7575B6 1px solid;
                            border-radius: 3px;
                            color: #7575B6;
                            font-size: .9rem;
                            &:hover{
                                color:#7575B6;
                                background: #fff;
                            }
                        }
                        .cur{
                             width:15rem;
                            height: 3rem;
                            border: #7575B6 1px solid;
                            border-radius: 3px;
                            background-color:#7575B6;
                            font-size: .9rem;
                            color: #fff;
                            &:hover{
                                background-color:#7575B6;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
        .right{
            height: 95vh;
            position: absolute;
            left: 45rem;
            top: 1.5rem;
            border-left: #aaa solid 1px;
            h1{
                font-size: 1.1rem;
                color: #2F2B2A;
            }
            .add{
                width: 22rem;
                height: 25rem;
                margin-top: 2.2rem;
                border: #aaa solid 1px;
                border-radius: 3px;
                float: left;
                display: flex;
                margin-right: 1rem;
                img{
                    margin: auto;
                    cursor: pointer;
                }
            }
            @media screen and (max-width: 1835px){
                .add{
                    clear: both;
                     height: 20rem;
                }
            }
        }
        }
    }
</style>