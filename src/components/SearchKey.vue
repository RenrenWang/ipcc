<template>
  <div class="search-key">
       <div class="search-key-item" v-for="(v,index) in searchKeys" :key="index">
            <div class="search-key-item-s">
                  <span>{{v.name}}</span>
                  <span class="iconfont  icon-xiangxia"></span>
            </div>
           
       </div>
       
  </div>
</template>

<script>
export default {
  name: 'SearchKey',
  props:{
   searchKeys:{
     type: Object,
     required: true
   }
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.search-key{
 background:#fff;
 height:rem(80px);
 position:fixed;
 top:rem(100px) * 2;
 width:100%;
 border-bottom:1px solid #bbbbbb;
 display:flex;
 align-items:center;
 .search-key-item{
   font-size:14px;
  
   
    flex:1;
    &:nth-last-of-type(1){
         .search-key-item-s:after{
             width:0;
          }
       
    }
   .search-key-item-s{
      padding:0 rem(50px);
      display:flex;
      align-items:center;
      justify-content:space-between;
      position:relative;
      &:after{
        position:absolute;
        content:'';
        display:inline-block;
        width:1px;
        height:100%;
        background:#bbbbbb;
        right:0;
      }
    
    }
  }
}
</style>
