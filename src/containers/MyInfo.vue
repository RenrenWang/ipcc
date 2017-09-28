<template>
  <div class="my-info" >
       <VHeader title="IPCC机构"/>   
       <div class="my-info-content">
            <div class="input-group">
                <div class="input-box">
                    <span style="font-weight:bold;">修改头像</span>
                     <img src="/static/images/tx.jpeg" >  
                    <span class="iconfont icon-xiangyou"></span>
                </div>
                   
            </div>
            <div class="input-group input-group-btn">
                <div class="input-box">
                    <span style="font-weight:bold;">昵称</span> 
                    <span class="addressBtn" style=" text-align: center;color:#bbb">神仙姐姐有点黑</span>
                   
                </div>
            </div>  
            <div class="input-group input-group-btn">
                <div class="input-box">
                    <span style="font-weight:bold;">性别</span> 
                    <span class="addressBtn" style=" text-align: center;color:#bbb">男</span>
                    <span class="iconfont icon-xiangyou"></span>
                </div>
            </div>
             <div class="input-group input-group-btn">
                <div class="input-box">
                    <span style="font-weight:bold;">修改手机</span> 
                    <span class="addressBtn" style=" text-align: center;color:#bbb">18758716921</span>
                    <span class="iconfont icon-xiangyou"></span>
                </div>
            </div>
             <div class="input-group">
                <div class="input-box">
                    <span style="font-weight:bold;">交易记录</span> 
                   
                    <span class="iconfont icon-xiangyou"></span>
                </div>
            </div>
                <div class="input-group">
                <div class="input-box">
                    <span style="font-weight:bold;">关于IPCC招聘</span> 
                   
                    <span class="iconfont icon-xiangyou"></span>
                </div>
            </div>
            <p class="save">保存</p>
        </div>

  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
export default {
  name: 'MyInfo',
  data () {
    return {
      
    }
  },
  components:{
    VHeader
   
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.my-info-content{
    height:100%;
    background:#edebe8;
     .input-group{
        padding:8px 0;
        .input-box{
         
          span:nth-of-type(1){
            width:120px;
          
          }
        $inputHeight:rem(120px);
          background:#fff;
          font-size:14px;
          display: flex;
          padding:0 15px;
          flex-direction: row;
          align-items: center;
          justify-content:space-between;
          height: $inputHeight;
          border-top:1px solid #bbbbbb;
          border-bottom:1px  solid #bbbbbb;
         
          input{
              font-size: 14px;
              border:none;
              outline:none;
              flex:1;
              height: $inputHeight - rem(30px);
            } 
        }
        &:nth-of-type(1){
         
           .input-box{
             height:rem(200px);
            
             img{
                 height:rem(150px);
                 width:rem(150px);
                 border-radius:50%;
             }
          }
            
        }

         &:nth-of-type(2),&:nth-of-type(3),&:nth-of-type(4){
           p{
             padding: 10px;
             font-size:16px;
             font-weight: bold;
           }
          
          .input-box{
             display: flex;
           
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .addressBtn{
             
              flex: 1;
            }
             &:nth-of-type(2){
                 border-top:none;
             }
          }
            
        }
      }
      .save{
            margin:15px auto;
            width:30%;
            padding:10px 0;
            font-size:16px;
            color:#fff;
            background:#ffc800;
            text-align:center;
            border-radius:5px;
      }
} 
</style>