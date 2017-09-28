<template>
  <div class="kind-panel">
       <div class="kind-panel-nav-bar">
           <span class="iconfont icon-fanhui"></span>
        </div> 
  
  </div>
</template>

<script>
import  VHeader   from './Header.vue'
export default {
  name: 'KindPanel',
  data () {
    return {
      
    }
  },
  components:{
      VHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.kind-panel{
    position:fixed;
    top:0;
    width:100%;
    height:100%;
    background:#fff;
}
</style>
