<template>
  <div class="top-panel">
       <div class="top-panel-item">
           <img src="../assets/images/topIco.png">
           <p class="top-panel-item-txt"><span>机构端</span></p>
        </div>
       <div class="top-panel-item">
          <img src="/static/images/avater.jpeg" class="avater-img">
          <p class="top-panel-item-txt"><span class="iconfont icon-nv"></span><span>神仙姐姐有点黑</span></p>
       </div>
       <div class="top-panel-item">
           <router-link :to="{ name: 'MyInfo'}" class="iconfont icon-shezhi1" tag="span"></router-link>
       </div>
  </div>
</template>

<script>
export default {
  name: 'TopPanel',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.top-panel{
    height:rem(350px);
    background:#ecebe7;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    .top-panel-item{
      flex:1;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
       &:nth-of-type(3){
         width:100%;
         height:100%;
         flex-direction:row;
        .icon-shezhi1{
             margin-top:15px;
             font-size:22px;
             color:#fdbe19;
             align-self:flex-start;
            }
       }
      
      &:nth-of-type(2){
         flex:2;
         position:relative;
        
         .icon-nv{
             position:absolute;
             font-size:22px;
             left:rem(15px);  
             bottom:0;
             
          }
      }
      .top-panel-item-txt{
           margin-top:15px;
          font-size:15px;
         
      }
      .avater-img{
          height:rem(200px);
          width:rem(200px);
          border-radius:50%;
          box-shadow: 0px 0px 10px #eeda90;
      }
    }
}
</style>