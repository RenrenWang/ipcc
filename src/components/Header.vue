<template>
  <header :class="['header',{fixed:isFixed}]">
        <div class="header-buttons header-left ">
           <a href="javascript:;" @click="back()"><span class="iconfont icon-fanhui2"></span></a>
           <a href="javascript:;" v-if="isSubPage"><span class="iconfont icon-guanbi"></span></a>
        </div>
        <h1 class="header-title">{{title}}</h1>
        <div class="header-buttons header-left">
           <a href="javascript:;" v-if="isSubPage"><span class="iconfont icon-fenxiang"></span></a>
        </div>
  </header>
</template>

<script>
export default {
  name: 'header',
  props:{
  isSubPage:{
   default:true
  },"title":{
      required: true
  },
  "isFixed":{
       default:false
  }},
  data () {
    return {
      
    }
  },
  methods:{
     back(){
         this.$router.go(-1);
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.header{
    position:relative;
    height:rem(100px);
    width:100%;
    background: #f8f8f8;
  
    box-shadow: 0 1px 0 rgba(0,0,0,.05), 0 0.5px 0 rgba(0,0,0,.09);
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
  
    &.fixed{
       position:fixed;
       top:0;
     }
     .header-buttons{
       padding: 0 10px;
         a{
           margin:0 5px;  
            .iconfont{
        font-size:20px;
          color:#444444;
        &.icon-guanbi{
            font-size:15px;
       }
    } 
         }
     
    }
    .header-title{
   
    position:absolute;
    left:50%;
    top:50%;
    transform:translate3d(-50%,-50%,0);
    font-size:16px;
     color: #101010;
    }
}
</style>
