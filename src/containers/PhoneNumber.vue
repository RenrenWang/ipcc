<template>
  <div class="phone-number">
       <VHeader :isSubPage="false" title="修改号码" :isFixed="true" />
       <div class="phone-content">
            <span class="iconfont icon-shouji-copy"></span>
            <p class="font1">您当前的手机号为  {{pinfoPhone}}</p>
            <p class="font2">仅支持修改到未注册手机号，如手机号已注册，请用绑定手机号登录。</p>

       </div>
       <p class="save"  @click="popActive">修改手机号</p>
       <PopUpdata  @popActive="popActive" v-show="isShowpop" showType="typePhoneNumber"/>
  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
import  PopUpdata   from '../components/PopUpdata.vue'
export default {
  name: 'PhoneNumber',

  data () {
    return {
      isShowpop:false,
      pinfoPhone:''
    }
  },
  mounted(){
    let user=JSON.parse(localStorage.getItem('user'));
    this.pinfoPhone=user.pinfoPhone;
  },
  methods:{
      popActive(data){
      if(data[0]=='typePhoneNumber'){
       console.log(JSON.stringify(data));
      }
       this.isShowpop=!this.isShowpop;
      }
  },
  components:{
      VHeader,
      PopUpdata
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.phone-number{
       background: #fff;
    height: 100%;

.phone-content{
    position: fixed;
    top:rem(100px);
    margin-top: 20%;
    padding: 0 15px;
    text-align: center;
    .icon-shouji-copy{
        font-size: rem(150px);
        color: #444;
    }
    .font1{
        padding: 10px 0;
       font-size: 16px;
        color:#101010;
    }
     .font2{
         line-height: rem(80px);
          padding: 10px 0;
          font-size: 16px;
           color: rgb(209, 205, 201);
        text-shadow: 0 0 4px #edebe8;
    }
}
 .save{
            position: absolute;
            bottom: rem(30px);
            left: 50%;
            transform: translate3d(-50%,-50%,0);
            margin:15px auto;
            width:50%;
            padding:15px 0;
            font-size:16px;
            color:#fff;
            background:#ffc800;
            text-align:center;
            border-radius:5px;
      }
}
</style>