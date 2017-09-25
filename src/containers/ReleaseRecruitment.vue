<template>
  <div class="release-recruitment">
         <VHeader  :isSubPage="false" title="我的发布" :isFixed="true"/>
         <ul class="recruit-list">
              <RecruitItem v-for="v in 20"/>
         </ul>
         <div class="post">发布</div>
  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
import  RecruitItem   from '../components/RecruitItem.vue'
export default {
  name: 'releaseRecruitment',
  data () {
    return {
      
    }
  },
  components:{
     VHeader,
     RecruitItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.release-recruitment{
    min-height:100%;
    
  
    background:#bbbbbb;
    .recruit-list{
      
       padding:rem(100px) 6px;
      
    }
    .post{

        position:fixed;
        bottom:0px;
        font-weight:bold;
        font-size:18px;
        height:rem(100px);
        width:100%;
        background:#ffc800;
        text-align:center;
        line-height:rem(100px);
    }
}
</style>
