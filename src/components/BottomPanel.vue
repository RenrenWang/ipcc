<template>
  <div class="bottom-panel">
         <h2 class="bottom-panel-title">为所有拥有才艺的人所努力</h2>
         <div class="btns">
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
  props:["Btns"],
  data () {
    return {
      
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
.bottom-panel{
    height:100%;
    .bottom-panel-title{
        padding:25px 0;
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
}
</style>