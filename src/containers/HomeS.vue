<template>
  <div class="home">
      <VHeader title="IPCC机构"/>   
      <TopPanel  :setData="topDdata"/>
      <BottomPanel :Btns="links" :isPostResume="true" @resumeDelete="ShowAlertConfirm()"/>
      <AlertConfirm  v-show="isShowAlertConfirm"  alertTitle="删除" alertContent="是否确定删除简历" @cancelActive="AlertCancelActive" @confirmActive="AlertConfirmActive"/>
  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
import  TopPanel   from '../components/TopPanel.vue'
import  BottomPanel   from '../components/BottomPanel.vue'
import  AlertConfirm   from '../components/AlertConfirm.vue'

export default {
  name: 'home',
  data () {
    return {
     topDdata:{name:'教师端',firstName:"神仙姐姐有点白"},
     resumeId:1,
     isShowAlertConfirm:false,
      links:[
          
          {name:"招聘信息大全",toUrl:"RecruitShow"},
          {name:"IPCC专属教师服务",toUrl:""}
      ]
    }
  },
  methods:{
    ShowAlertConfirm(){
     this.isShowAlertConfirm=true;
    },
    AlertCancelActive(){
         this.isShowAlertConfirm=false;
      },
      AlertConfirmActive(){
       this.rDelete();
        
     },
   rDelete(){
       this.$http.get(api.resumeDelete+this.resumeId)
          .then((response)=>{
			  console.log(JSON.stringify(response.data));
			  if(response.data.result=='success'){
              alert('删除成功！');
			   }else{
				   alert('删除失败,请稍后重试！');
			  }
			    this.isShowAlertConfirm=false;
        });
   }
  },
  components:{
    VHeader,
    TopPanel,
    BottomPanel,
    AlertConfirm
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home{
    height:100%;
   background:#444442;
    overflow:hidden;
}
</style>