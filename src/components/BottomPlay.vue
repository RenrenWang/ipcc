<template>
  <div class="bottom-play">
     <div class="bp-bg"></div>

    
     <a   v-if="isPay" :href="'tel:'+phoneNumber" class="bp-content">
        {{phoneNumber}}
     </a>
     <a v-else :href="'http://www.hzrongzhi.com/appsrv/wx_banding?applType=WXPAY&feeClass=B&pinfoId='+pId" class="bp-content">
        微信支付
     </a>
        
 </div>
</template>

<script>
export default {
  name: 'BottomPlay',
  props:{
    isPay:{
      type:Boolean,
      default:false
      },
    phoneNumber:{
      type:Number,
    }
  },
  data () {
    return {
      pId:''
    }
  },
  mounted(){
    this.pId=GetQueryString('pinfoSname');
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.bottom-play{
//  position:fixed;
//  top:0;
//  height:100%;
//  width:100%;
//  overflow:hidden;
  // .bp-bg{
  //    height:100%;
  //  width:100%;
  //  background:#000;
  //  opacity:.5;
  // }
}
.bp-content{
  width:70%;
  background: #fff;
  height: rem(85px);
  line-height: rem(85px);
  text-align: center;
  position: fixed;
  bottom: rem(80px);
  left: 50%;
  transform: translate(-50%, -50%);
  color: #1c74d9;
  border: 1px solid #bbbbbb;
  border-radius: 5px;
}
</style>
