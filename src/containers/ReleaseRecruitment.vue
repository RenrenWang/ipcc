<template>
  <div class="release-recruitment">
         <VHeader  :isSubPage="false" title="我的发布" :isFixed="true"/>
         <ul class="recruit-list">
              <RecruitItem v-for="(v,index) in 20"  :key="index"/>
         </ul>
          <FooterButton  btnName="发布" @fBtnAction="btnAction()"/>
  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
import  RecruitItem   from '../components/RecruitItem.vue'
import FooterButton from '../components/FooterButton.vue'
export default {
  name: 'releaseRecruitment',
  data () {
    return {
      
    }
  },
  methods:{
   btnAction(){
      this.$router.push({name:'RecruitPost'});
   }
  },
  components:{
     VHeader,
     RecruitItem,
     FooterButton
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
    
}
</style>
