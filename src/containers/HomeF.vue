<template>
  <div class="home">
      <VHeader title="IPCC机构"/>   
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
  data () {
    return {
      topDdata:{name:'机构端',firstName:"神仙姐姐有点黑"},
      links:[
          {name:"发布招聘",toUrl:"ReleaseRecruitment"},
          {name:"简历大全",toUrl:"Resume"},
          {name:"IPCC专属教师服务",toUrl:""}
      ]
    }
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