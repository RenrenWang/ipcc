<template>
  <div class="search-key">
       <div class="search-key-item" v-for="(v,index) in searchKeys" :key="index">
            <div :class="['search-key-item-s',{noLine:searchKeys.length-1==index}]" @click="ishowKindPanel(index)">
                  <span>{{v.name}}</span>
                  <span class="iconfont  icon-xiangxia"></span>
            </div>
           
       </div>
       <KindPanel v-show="isShowPanel" @closePanel="ishowKindPanel()" :sKindList="kindList"/>
  </div>
</template>

<script>
import  KindPanel   from './KindPanel.vue'
export default {
  name: 'SearchKey',
  props:{
   searchKeys:{
     type: Array,
     required: true
   }
  
  },
  data () {
    return {
      isShowPanel:false,
      kindList:[]
    }
  },
  methods:{
    ishowKindPanel(index){
      this.isShowPanel=!this.isShowPanel;
      this.kindList=this.searchKeys[index]['kindList'];
    }
  },
  components:{
    KindPanel
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
  
   .search-key-item-s{
      padding:0 rem(30px);
      display:flex;
      align-items:center;
      justify-content:center;
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

     .noLine:after{
             width:0;
     }
  }

  
    
}
</style>
