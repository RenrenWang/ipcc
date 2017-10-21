<template>
  <p class="footer">
      本服务由IPCC提供，最终解释权由IPCC所有
 
  </p>
</template>

<script>
export default {
  name: 'footer',
  data () {
    return {
      
    }
  },
  methods:{
    btnAction(){
      this.$emit('footerBtnAction');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";

.footer{
    width:100%;
    text-align:center;
    font-size:14px;
    color:#fff;
    position:absolute;
    bottom:rem(30px);
}
</style>
