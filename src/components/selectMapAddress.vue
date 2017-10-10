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
   this.setMap();
  },
  methods:{

    setMap(){
        var iframe = document.getElementById('map').contentWindow;
        document.getElementById('map').onload = function(){
          iframe.postMessage('hello','https://m.amap.com/picker/');
        };
        window.addEventListener("message",(e)=>{
         console.log('您选择了:' + JSON.stringify(e.data));
           this.$emit('closeSelectMap',[e.data.name,e.data.location]);
        }, false);
      }
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
