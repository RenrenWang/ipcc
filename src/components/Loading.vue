<template>
  <div class="loading">
      <div class="bg" :style="{background:bgColor}" v-if="bgColor&&bgColor!=''"></div>
      	<div class="loader1 loader" v-if="loaderNumber==1">
			<div :style="{'background':styleColor}"></div>
            <div :style="{'background':styleColor}"></div>
             <div :style="{'background':styleColor}"></div>
		</div>
      <div class="loader9 loader" v-if="loaderNumber==9">
			<div class="loader-nine">
                <div :style="{'background':styleColor}"></div>
                <div :style="{'background':styleColor}"></div>
                <div :style="{'background':styleColor}"></div>
                <div :style="{'background':styleColor}"></div>
                <div :style="{'background':styleColor}"></div>
                <div :style="{'background':styleColor}"></div>
                <div :style="{'background':styleColor}"></div>
                <div :style="{'background':styleColor}"></div>
			</div>
		</div>
	
      
 </div>
</template>

<script>
export default {
  name: 'Loading',
  props:{
      loaderNumber:{
          type:Number,
          default:1,
          require:true
      },
      styleColor:{
          type:String,
          default:'#fff'
        
      },
      bgColor:{
          type:String,
          default:''
      }
  },
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.loading{
height: 100%;
 width: 100%;
position: fixed;
 z-index: 9999;
  .bg{
      position: fixed;
      top:0;
      bottom: 0;
      height: 100%;
      width: 100%;
      background: rgba(0,0,0,.5);
     
   }
}
.loader{
position: fixed;
left: 50%;
top:50%;
transform: translate3d(-50%,-50%,0);    
float:left;display:-webkit-flex;/*safari弹性布局*/justify-content:center;display:flex;align-items:center;}
@-webkit-keyframes loader1{
	0%{-webkit-transform:scale(1);opacity:1;}
	45%{-webkit-transform:scale(0.1);opacity:0.7;}
	80%{-webkit-transform:scale(1);opacity:1;}
}
.loader1 div{width:15px;height:15px;background:#fff;border-radius:50%;float:left;display:inline-block;margin:2px;}
.loader1 div:nth-child(1){-webkit-animation:loader1 0.75s -0.12s ease infinite;}
.loader1 div:nth-child(2){-webkit-animation:loader1 0.75s -0.24s ease infinite;}
.loader1 div:nth-child(3){-webkit-animation:loader1 0.75s 0s ease infinite;}

@-webkit-keyframes loader9{
	0%{-webkit-transform:scale(0.3);opacity:0.4;}
	50%{-webkit-transform:scale(0.7);opacity:0.8;}
	60%{-webkit-transform:scale(0.8);opacity:1;}
	100%{-webkit-transform:scale(1.2);opacity:1;}
}
.loader-nine{position:relative;}
.loader-nine div{width:10px;height:10px;background:#fff;position:absolute;border-radius:50%;margin:0 auto;}
.loader-nine div:nth-child(1){top:-30px;left:0;-webkit-animation:loader9 0.5s -0.4s infinite linear;}
.loader-nine div:nth-child(2){top:-20px;left:20px;-webkit-animation:loader9 0.5s -0.35s infinite linear;}
.loader-nine div:nth-child(3){top:0px;left:30px;-webkit-animation:loader9 0.5s -0.30s infinite linear;}
.loader-nine div:nth-child(4){top:20px;left:20px;-webkit-animation:loader9 0.5s -0.25s infinite linear;}
.loader-nine div:nth-child(5){top:30px;left:0px;-webkit-animation:loader9 0.5s -0.2s infinite linear;}
.loader-nine div:nth-child(6){top:20px;left:-20px;-webkit-animation:loader9 0.5s -0.15s infinite linear;}
.loader-nine div:nth-child(7){top:0px;left:-30px;-webkit-animation:loader9 0.5s -0.1s infinite linear;}
.loader-nine div:nth-child(8){top:-20px;left:-20px;-webkit-animation:loader9 0.5s 0s infinite linear;}

</style>
