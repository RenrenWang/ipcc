<template>
  <div class="map-big">
        <div id="map-box"></div>
        <span class="iconfont icon-close" @click="hideMap"></span>
  </div>
</template>

<script>
export default {
  name: 'MapBig',
  props:{
   xy:{
     type:Object,
     require:true
   }
  },
  data () {
    return {
      
    }
  },
  mounted(){
    
    this.showMap(this.xy.x,this.xy.y)
  },
  methods:{
    hideMap(){
    this.$emit("hMap");
    },
     showMap(x,y){
        var map = new AMap.Map('map-box', {
        resizeEnable: false,
        center: [x, y],
        zoom: 13
      });
       var marker = new AMap.Marker({
        position: map.getCenter()
        });
        marker.setMap(map);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.map-big{
      position: fixed;
    top: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    z-index: 9999;
  #map-box{
      height:100%;
   width:100%;
   }
   .icon-close{
      position: fixed;
     
      left:50%;
      bottom:rem(80px);
       font-size:rem(90px);
     transform:translate3d(-50%,-50%,0);
   }
}
</style>
