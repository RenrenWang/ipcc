<template>
  <div class="search-navbar">
       <div class="address-box" @click="active()">
           <span class="iconfont  icon-dizhi"></span>
           <span>{{sCity}}</span>
       </div>
       <div class="search-box">
           <span class="iconfont  icon-sousuo1"></span>
           <input  type="text" v-model="searchKey" placeholder="搜索"/>
       </div>
       <p class="link">
          <router-link :to="{ name: 'Purchased'}"  v-if="!isAll">购买的</router-link>
       </p>
  </div>
</template>

<script>
export default {
  name: 'SearchNavbar',
  props:{'sCity':{},isAll:{default:false}},
  data () {
    return {
       searchKey:""
    }
  },
  methods:{
    active(){
    
      this.$emit('searchNavLeftBtn');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.search-navbar{
  
    box-sizing:border-box;
    padding:0 5px;
    overflow:hidden;
    font-size:14px;
    height:rem(100px);
    width:100%;
    border-top:1px solid #bbbbbb;
    border-bottom:1px solid #bbbbbb;
    background:#ffc800;
    position:fixed;
    top:rem(100px);
    display:flex;
    justify-content:space-between;
    align-items:center;
    >div{
      display:flex;
      justify-content:center;
      align-items:center;
    }
   .address-box{
   
     .iconfont{
       font-size:rem(45px);
     }
   }
   .search-box{
     padding:0 3px;
     height:rem(65px);
     background:#fff;
     border-radius:5px;
     .iconfont{
       font-size:rem(40px);
       color:#808080;
     }
     input{
       border:none;
     }
   }
}
</style>
