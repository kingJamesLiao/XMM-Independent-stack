<template>
   <div class="page common">
    <el-row :gutter="20">
      <el-col :span="24">
       <div class="grid-content bg-purple header">
           首页幻灯片
           <el-button @click="upload" class="head_btn">添加</el-button>
       </div>   
       <div class="banner">
           <div class="banner_left">
               <img src="../../assets/style/image/banner1.jpg" alt="">
               <p>bannner 01</p>
               <div class="banner_footer">
                   <div class="btn">所有网站</div>
                   <div class="edit"></div>
                   <div class="del"></div>
               </div>
           </div>
           <div class="banner_right">
               <img src="../../assets/style/image/banner2.jpg" alt="">
               <p>bannner 02</p>
               <div class="banner_footer">
                   <div class="btn">所有网站</div>
                   <div class="edit"></div>
                   <div class="del"></div>
               </div>
           </div>
       </div>  
      </el-col>
    </el-row>
   </div>
</template>
<script>
export default{
    data(){
        return{

        }
    },
    methods : {
        upload(){
            this.$router.push({path : '/uploadAD'})
        }
    }
}
</script>
<style lang="less" scoped>
     .page{
        padding: 20px;
        .header{
            height: 4rem;
            background: #F8F8F8;
            line-height: 4rem;
            color: #333;
            text-indent: 15px;
            position: relative;
            .head_btn{
                position: absolute;
                top: .8rem;
                right: 20px;
                width: 5.5rem;
                height: 2.3rem;
                background-color: #7474BC;
                border: none;
                color: #fff;
            }
        }
        .banner{
            width: 100%;
            height: 25rem;
            margin-top: 15px;
            display: flex;
            overflow: hidden;
            .banner_right,.banner_left{
                flex: 1;
                margin-right: 15px;
                border-radius: 5px;
                background-color: #fff;
                padding: 15px;
                img{
                    display: block;
                    width: 100%;
                    height: 82%;
                 
                    overflow: hidden;
                }
                p{
                    padding: 5px 0 0 0;
                    color: #666;
                }
                .banner_footer{
                    width: 100%;
                    height: 10%;
                    padding-top: 10px;
                    position: relative;
                    .btn{
                        
                        width: 5.7rem;
                        height: 1.6rem;
                        border-radius: 50px;
                        background-color: #939393;
                        color: #fff;
                        text-align: center;
                        font-size: .95rem;
                        line-height: 1.6rem;
                    }
                    .del ,.edit{
                        height: 1.8rem;
                        width: 1.8rem;
                        position: absolute;
                        right: 45px;
                        top: 10px;
                        background-image: url("../../assets/style/image/redact.png");
                        background-size: 100% 100%;
                        cursor:pointer;
                    }
                    .del{
                        right:0px;
                        background-image: url("../../assets/style/image/del.png")
                    }
                }
            }
             .banner_right{
                flex: 1;
                margin-left: 15px;
                border-radius: 5px;
                background-color: #fff;
            }
        }
     }
</style>