<template>
  <div class="kind-panel">
       <div class="kind-panel-nav-bar" >
           <span class="iconfont icon-fanhui" @click="closeKp()"></span>
          <!-- <h2>艺术种类</h2>--> 
        </div>
      <ul class="kind-panel-list">
           <li v-for="(v,index) in  sKindList"  :class="{activeLi:v.isSelect}" :key="index"  @click="selectKind(index)">{{v.name}}</li>
      </ul>
  </div>
</template>
 
<script>
import  VHeader   from './Header.vue'
export default {
  name: 'KindPanel',
  props:{
    sKindList:{
       type:Array,
       required:true
    }
   
  },
  data () {
    return {
      
    }
  },
  methods:{
  closeKp(){
    this.$emit('closePanel');
  },
  selectKind(index){
      this.sKindList[index]['isSelect']=!this.sKindList[index]['isSelect'];
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
.kind-panel{
    position:fixed;
    top:0;//rem(100px)*2;
    width:100%;
    height:100%;
    background:#fff;
   
    .kind-panel-nav-bar{
      height:rem(90px);
      line-height:rem(90px);
        padding:0 10px;
        position:relative;
      span{
          font-size:20px;
      }
      h2{
         position:absolute;
    left:50%;
    top:50%;
    transform:translate3d(-50%,-50%,0);
    font-size:16px;
     color: #101010;
      }
    }
    .kind-panel-list{
      font-size:16px;
      display:flex;
    
      flex-wrap:wrap;
        padding:0 10px;
     >li{
        
        border:1px solid  #bbb;
        border-radius:5px;
        padding:5px 15px;
        margin:5px;
        &.activeLi{
          background:#FFC800;
         
          border-color:#fff;
        }
     }
    }
}
</style>
