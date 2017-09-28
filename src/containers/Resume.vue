<template>
  <div class="resume">
       <VHeader  :isSubPage="false" title="简历大全" :isFixed="true"/>
       <SearchNavbar/>
       <SearchKey :searchKeys="keyList"/> 
       <ul class="resume-list">
            <ResumeItem v-for="(v,index) in 10" :key="index"/>
       </ul> 
  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
import  SearchNavbar   from '../components/SearchNavbar.vue'
import  SearchKey   from '../components/SearchKey.vue'
import  ResumeItem   from '../components/ResumeItem.vue'
export default {
  name: 'Resume',
  data () {
    return {
      keyList:[
        {name:"兼全职"},
        {name:"艺术种类"},
        {name:"性别"}  
      ]
    }
  },
  components:{
      VHeader,
      SearchNavbar,
      SearchKey,
      ResumeItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.resume{
   
     background:#edebe8;
    .resume-list{
  
  
   padding:rem(100px) * 2 + rem(80px) 10px 0 10px;
  
  }
}

</style>
