<template>
  <div class="bottom-play">
     <div class="bp-bg"></div>

  
     <a    v-if="isPay" :href="'tel:'+returnPhoneNumber()" class="bp-btn-number bp-content bp-btn">
        {{returnPhoneNumber()}}
     </a>
     <div class="bp-content" v-else>
       <a  class="bp-btn bp-btn-tip" href="javascript:;">
            付费后可获取教师联系方式！
        </a>
        <a  class="bp-btn" :href="'http://www.hzrongzhi.com/appsrv/wx_banding?applType=WXPAY&feeClass=B&pinfoId='+pId+'&msgId='+msgId">
            微信支付
        </a>
     </div>
    
        
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
      type:String,
      phoneNumber:''
    },
    msgId:{
          
    },
  },
  data () {
    return {
      pId:''
    }
  },
  mounted(){
    this.pId=GetQueryString('pinfoId');
  },
  methods:{
     returnPhoneNumber(){
       return (this.phoneNumber==""||!this.phoneNumber)?"号码为空":this.phoneNumber;
     }
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

.bp-btn{
  display:block;
  background: rgba(255,255,255,.8);
  border-color: #bbbbbb;
   border-radius: 10px;
   width:100%;
  height: rem(90px);
  line-height:  rem(90px);
}
.bp-btn.bp-btn-tip{
  margin-bottom:15px;
   border-radius: 0px;
}

.bp-content{
  width:70%;
  text-align: center;
  position: fixed;
  bottom: rem(20px);
  left: 50%;
  transform: translate(-50%, -50%);
   color: #555;
   z-index:9999;
}

.bp-btn-number {
    bottom: rem(80px);
    color:#6694ff;
}
</style>
