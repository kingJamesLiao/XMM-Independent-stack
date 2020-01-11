<template>
        <div class="header_container">
            <div class="logo">{{tle}}</div>
            <div class="sub">{{title}}</div>
            <div class="side">
                <ul>
                    <li class="ref"><img src="../assets/style/image/off.png" alt=""></li>
                    <li><i class="el-icon-question"></i>&nbsp;帮助中心</li> 
                    <li><i class="el-icon-full-screen"></i>&nbsp;手机访问</li>
                    <li><i class="el-icon-folder-delete"></i>&nbsp;缓存清理</li>
                </ul>
            </div>
        </div>
</template>

<script>
export default {
    name: 'HeadTop',
    data (){
        return {
            tle : 'XMM引擎',
            title : '独立商城'
        }
    }
}
</script>

<style lang="less" scoped>
    @import '../style/mixin';
    .header_container{
        background: #000;
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 20px;
        .logo{
            color: #ffffff;
            font-size: 2rem;
            font-weight: 800;
            padding-right: 2.5rem;
            min-width: 176px;
        }
        .sub{
            color: #ffffff;
            font-size: 1.2rem;
            flex: 1;
            font-weight: 800;
            float: left;
        }
        .side{
           flex: 1;
           min-width: 2rem;
           height: 100%;
           box-sizing: border-box;
            ul{
                float: right;
                height: 100%;
                right: 0;
                min-width: 400px;
                box-sizing: border-box;
               
                li{
                    line-height:60px ;
                    color: #ffffff;
                     width: 23%;
                    background-color: #333333;
                    height: 100%;
                    font-size: .9rem;
                    letter-spacing:1px;
                    padding-right: 5px;
                    padding-left: 5px;
                    float: right;
                    cursor: pointer;

                    &:hover{
                        background:#222;
                    }

                    &.ref{
                        background: #FF5858;
                        width: 60px;
                        height: 60px;
                        padding: 0;
                        position: relative;

                        img{
                            text-align: center;
                            position: absolute;
                            left:22px;
                            top: 22px;
                            
                        }
                    }
                }
            }
        }
    }
</style>