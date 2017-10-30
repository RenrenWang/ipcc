<template>
  <div class="bottom-panel">
         <h2 class="bottom-panel-title">为所有拥有才艺的人所努力</h2>
         <div class="btns">
             <div class="resume-post" v-if="isPostResume">
                <h5>我的简历</h5>
                <div class="status">
                    状态：{{restatus()}}
                </div>
                <div class="resume-post-btns">
                   <!-- <a href="javascript:;" @click="resumeAction()">详情</a> -->
                    <a href="javascript:;" @click="xqAction()">详情</a>
                   <!-- <router-link to="/resumePost">上传</router-link tag="a">  -->
                    <a href="javascript:;" @click="scAction()">上传</a>
                </div>
             </div>
             <VBoutton v-for="(v,index)  in Btns" :btn="v" :key="index"/>
         </div>
         <VFooter/>
        <Prompt v-show="isPrompt"  :content="pContent" @actionPrompt="pAction"/>
  </div>
</template>

<script>
import  VBoutton   from './Boutton.vue'
import  VFooter   from './Footer.vue'
import  Prompt   from './Prompt.vue'

export default {
  name: 'BottomPanel',
  props:{"Btns":{type:Array},isPostResume:{
       default:false
  }},
  data () {
    return {
      rsmStatus:'',
      isPrompt:false,
      pContent:'',
      
    }
  },
  mounted(){
      this.rsmStatus=GetQueryString('rsmStatus');
  },
  methods:{
  activePrompt(str){
      this.pContent=str;
      this.pAction();
   },
    pAction(){
        this.isPrompt=!this.isPrompt;
    },
   restatus(){
     
      if( this.rsmStatus=="N"){
          return '审核中';
      }else if( this.rsmStatus=="Y"){
          return '已通过';
      }else{
         return '未提交';
      }
   },
   resumeAction(){
   
      this.$emit('resumeDelete');
   },
   xqAction(){//applClass=T
      if(this.rsmStatus==null||this.rsmStatus==''){
        return this.activePrompt("未提交简历，请先提交简历");
      }
      this.$router.push({ path:'/resumeD',query:{id:GetQueryString('pinfoId'),isP:true}})
   },
   scAction(){//applClass=T
      if( this.rsmStatus=="N"|| this.rsmStatus=="Y"){
        return  this.activePrompt("简历已提交");
      }
      this.$router.push({ path:'/resumePost'})
   }
  },
  components:{
      VBoutton,
      VFooter,
      Prompt
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.bottom-panel{
    height:100%;

   .status{
       width:100%;
     height: rem(80px);
     line-height: rem(80px);
     background:#fff;
     color: #1e9ee6;
     font-size: 18px;
     text-align: center;
   }
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
     
     width:75%;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    font-size:16px;
     box-shadow: 0 0 7px #aaaaaa;
      >h5{
        padding:rem(20px) 0;
             font-size:14px;
             font-weight:bold;
         } 
     .resume-post-btns{
          width:100%;
          display:flex;
         flex-direction:row;  
         border-top:1px solid #bbb;  
       
        >a{
            padding:rem(20px) 0;
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