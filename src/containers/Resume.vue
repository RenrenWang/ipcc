<template>
  <div class="resume">
       <VHeader  :isSubPage="false" title="简历大全" :isFixed="true"/>
       <SearchNavbar/>
       <SearchKey :searchKeys="keyList" /> 
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
        {name:"兼全职",kindList:[{name:'兼职',isSelect:true},{name:'全职',isSelect:false}]},
        {name:"艺术种类",kindList:[{name:'舞蹈',isSelect:false},{name:'芭蕾',isSelect:false}]},
        {name:"性别",kindList:[{name:'男',isSelect:false},{name:'女',isSelect:false}]}  
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
