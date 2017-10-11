<template>
  <div class="bottom-panel">
         <h2 class="bottom-panel-title">为所有拥有才艺的人所努力</h2>
         <div class="btns">
             <div class="resume-post" v-if="isPostResume">
                <h5>我的简历</h5>
                <div class="resume-post-btns">
                   <a href="javascript:;" @click="resumeAction()">删除</a>
                   <router-link to="/resumePost">发布</router-link tag="a"> 
                </div>
             </div>
             <VBoutton v-for="(v,index)  in Btns" :btn="v" :key="index"/>
         </div>
         <VFooter/>
  </div>
</template>

<script>
import  VBoutton   from './Boutton.vue'
import  VFooter   from './Footer.vue'
export default {
  name: 'BottomPanel',
  props:{"Btns":{type:Array},isPostResume:{
       default:false
  }},
  data () {
    return {
      
    }
  },
  methods:{
   resumeAction(){
      this.$emit('resumeDelete');
   }
  },
  components:{
      VBoutton,
      VFooter
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.bottom-panel{
    height:100%;
    .bottom-panel-title{
        padding:rem(45px) 0;
        font-weight:bold;
        font-size:18px;
        color:#bcbcba;
        text-align:center;
    }
    .btns{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
    .resume-post{
    
     margin-bottom:rem(60px);
     flex:1;
     background:#fdc800;
     height:rem(190px);
     width:75%;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    font-size:16px;
    box-shadow: 0px 0px 4px #fff;
      >h5{
          margin-top:rem(30px);
             font-size:16px;
             font-weight:bold;
         } 
     .resume-post-btns{
          width:100%;
          display:flex;
        flex-direction:row;  
         border-top:1px solid #bbb;  
       
        >a{
            padding:rem(25px) 0;
            flex:1;
            text-align:center;
            font-size:18px;
            &:nth-of-type(1){
                border-right:1px solid #bbb;
            }
        }
     }
    }
}
</style>