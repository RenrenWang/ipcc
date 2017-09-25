<template> 
  <router-link class="recruit-item" :to="{name:'RecruitD'}" tag="li">
       <div class="recruit-item-t">
           <h3 class="recruit-item-title">招聘店长</h3>
           <span class="timing">倒计时29天</span>
       </div>
       <p class="recruit-item-text">要求：因店里要扩张，需要一个很好的人才来帮助我们一起</p>
       <div class="demand-keyword">
          <div class="demand-keyword-l">
            <span>兼职：</span>
            <p class="sex"><span class="iconfont  icon-nan"></span></p>
            <span class="need-item">古典舞</span>
          </div>
          <p class="rmb">薪资：100/小时</p>
       </div>
       <div class="recruit-item-b">
             <div class="recruit-item-b-l">
                <img src="/static/images/avater.jpeg" class="recruit-item-avater"/>
                <span>神仙姐姐有点黑</span>
             </div>
             <span class="iconfont icon-shanchu"></span>
       </div>
  </router-link >
</template>

<script>
export default {
  name: 'recruitItem',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.recruit-item{
    margin:10px 0;
    border-radius:6px;
    padding:8px 10px 5px 10px;
    font-size:14px;
    background:#fff;

    .recruit-item-t{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        .recruit-item-title{
           font-size:18px;
           font-weight: bold;
           font-style: normal;
        }
        .timing{
            font-size:14px;
            color:#727272;
        }
    }
   
    .recruit-item-text{
       margin:5px  0;
       color:#050501;
    }
    .demand-keyword{
        padding:8px 0;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        border-bottom:1px solid #bbbbbb;
       .demand-keyword-l{
         display:flex;
         flex-direction:row;
         align-items:center;
         .sex{
             background:#a7c7f0;
             color:#fff;
             border-radius:5px;
             width:26px;
             
             text-align:center;
           }
           .need-item{
               display:inline-block;
               width:75px;
               border:1px  solid  #bbbbbb;
               border-radius:5px; 
               text-align:center;
               padding:3px 0;
               margin-left:5px;
           }
         }
        .rmb{
            font-weight:bold;
            font-size:18px;
            color:#FFAF45;
        }
    }
    .recruit-item-b{
        padding:5px 0;
       display:flex;
        flex-direction:row;
        justify-content:space-between;
         align-items:center;
      .recruit-item-b-l{
          display:flex;
        flex-direction:row;
        justify-content:center;  
        align-items:center;
       
        .recruit-item-avater{
            margin-right:10px;
        height:rem(80px);
        width:rem(80px);
        border-radius:50%;
        border:2px  solid #bbbbbb;
        }
      }
      .icon-shanchu{
          font-size:25px;
          color:#444444;
      }
    }
    
}
</style>