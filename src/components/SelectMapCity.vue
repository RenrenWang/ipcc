<template>
  <div class="SelectMapCity">
      
  </div>
</template>

<script>
export default {
  name: 'SelectMapCity',
  props:['isShow'],
  data () {
    return {
      
    }
  },
  mounted(){
      
        AMapUI.loadUI(['misc/MobiCityPicker'],(MobiCityPicker)=> {

          var cityPicker = new MobiCityPicker();
         
            cityPicker.show();
             
            // AMap.event.addDomListener(document.getElementById('openBtn'), 'click', function(e) {

            //     cityPicker.show();
            // });
            cityPicker.on('citySelected', (cityInfo)=> {
                //隐藏城市列表
                cityPicker.hide();
               
                //选中的城市信息
                console.log(cityInfo);
            });
        });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.SelectMapCity{
    position:fixed;
    width:100%;
    height:100%;
    top:0;
    z-index:9999;
}
.amap-ui-mobi-city-picker .top_group .citylist .item{
    font-size:14px !important;
}
</style>
