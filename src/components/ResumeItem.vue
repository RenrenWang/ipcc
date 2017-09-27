<template>
 <router-link class="resume-item" :to="{name:'ResumeD'}" tag="li">
  
    <div class="resume-item-top">
         <img src="/static/images/tx.jpeg" class="resume-item-top-img"/> 
         <div class="resume-item-top-text">
              <div class="resume-item-top-text-t">
                   <p class="name-info">
                       <span style="font-size:16px;font-weight:bold;">陈浩凯</span>
                       <span class="iconfont  icon-nan"></span>
                       <span>99岁</span>
                   </p>
                   <span style="font-size:16px;font-weight:bold;">全职</span>
              </div>
              <div class="resume-item-top-text-b">
                    <span>教学经验：5年</span>
                    <span>浙江艺术职业学校</span>
              </div>
         </div> 
    </div>
    <p class="resume-item-bottom">
        擅长：古典舞、芭蕾舞、民族舞、钢管舞、脱衣舞
    </p>
 </router-link>
</template>

<script>
export default {
  name: 'ResumeItem',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.resume-item{
    margin:10px 0;
    background-color: #f2f2f2;
    padding:10px;
    font-size:14px;
    border:1px solid #bbbbbb;
    border-radius:10px;
  .resume-item-top{
    display:flex;
    border-bottom:1px solid #bbbbbb;
    padding-bottom:15px;
    .resume-item-top-img{
        height:rem(140px);
        width:rem(140px);
        border-radius:50%;
        box-shadow: 0px 0px 10px #eeda90;
    }
    .resume-item-top-text{
        margin-left:15px;
         flex:1;
        
         
         .iconfont{
             font-size:18px;
         }
         .resume-item-top-text-t{
          .name-info{
             padding-right:rem(100px);
             padding-bottom:15px;
             border-bottom:1px solid #bbbbbb;
          }
          flex-direction: row;
          display:flex;
          align-items:center;  
          justify-content:space-between;
        }
        .resume-item-top-text-b{
           margin-top:10px;
          display:flex;
          align-items:center;  
          justify-content:space-between;
          span{
              padding:5px 5px;
              background:#ffc800;
            
              border-radius:5px;
          }
        }
    }
  }
  .resume-item-bottom{
      padding-top:5px;
      text-align:center;
  }
}
</style>
