<template>
  <div class="purchased">
       <VHeader  :isSubPage="false" title="已购买" :isFixed="true"/>
      <SearchKey :searchKeys="keyList"/> 
       <ul class="resume-list">
            <ResumeItem v-for="v in 10"/>
       </ul> 
  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
import  SearchNavbar   from '../components/SearchNavbar.vue'
import  SearchKey   from '../components/SearchKey.vue'
import  ResumeItem   from '../components/ResumeItem.vue'
export default {
  name: 'Purchased',
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
.purchased{
    min-height:100%;
     background:#edebe8;
     .search-key{
         border-top:1px solid #bbbbbb;
         top:rem(100px);
     }
    .resume-list{
     padding:rem(100px) + rem(80px) 10px 0 10px;
  
  }
}

</style>
