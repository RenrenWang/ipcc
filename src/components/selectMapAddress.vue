<template>
  <div class="selectMapAddress">
      <iframe  id="map" style="width:100%;height:100%" :src='selectMapAddress'></iframe>
 
  </div>
</template>

<script>
export default {
  name: 'selectMapAddress',
  
  data () {
    return {
     selectMapAddress:api.selectMapAddress
    }
  },
  mounted(){
   
   var iframe = document.getElementById('map').contentWindow;
        document.getElementById('map').onload = function(){
       iframe.postMessage('hello','https://m.amap.com/picker/');
    };
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.selectMapAddress{
position:fixed;
width:100%;
height:100%;
z-index:99999;
background:#fff;

}
</style>
