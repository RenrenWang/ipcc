<template>
   <router-link class="bottom" :to="{ name: btn.toUrl}" tag="div">
        <span>{{btn.name}}</span>
 
  </router-link>
</template>

<script>
export default {
  name: 'bottom',
  props:["btn"],
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.bottom{
    margin-bottom:rem(60px);
    flex:1;
    background:#fdc800;
    height:rem(100px);
    width:50%;
    border-radius:8px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    font-size:16px;
    box-shadow: 0px 0px 4px #fff;
}
</style>