<template>
  <div class="home">

      <VHeader title="IPCC机构"  :isSubPage="false"/>   
      <TopPanel :setData="topDdata"/>
      <BottomPanel :Btns="links"/>
    
  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
import  TopPanel   from '../components/TopPanel.vue'
import  BottomPanel   from '../components/BottomPanel.vue'


export default {
  name: 'home',
   props:{
    user:{
    type:Object
    }
  },

  data () {
    return {
      topDdata:{name:'机构端',avatar:'',firstName:'',hUrl:''},
      links:[
          {name:"发布招聘",toUrl:"/releaseRecruitment"},
          {name:"简历大全",toUrl:"/resume"},
          {name:"IPCC专属教师服务",toUrl:""}
      ]
    }
  },
  mounted(){
  let user=JSON.parse(localStorage.getItem('user'));
  
    this.topDdata.firstName=user.pinfoSname;
    this.topDdata.avatar=user.pinfoUri;
    this.topDdata.hUrl=baseUrl+'/wx_banding?applClass=T';
  },
  methods:{
  
  },
  components:{
    VHeader,
    TopPanel,
    BottomPanel
   
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