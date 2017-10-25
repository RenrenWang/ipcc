<template>
  <div class="alert-confirm">
     <div class="alert-bg"></div>
      <div class="alert-box">
        <h2 class="alert-title">{{alertTitle}}</h2>   
        <p class="alert-content">{{alertContent}}</p>
        <div class="alert-btns">
            <a href="javascript:;" @click="cancelActive">取消</a>
            <a href="javascript:;" @click="confirmActive">确定</a>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AlertConfirm',
  props:{
     alertTitle:{
       type:String,
       required:true
     },
     alertContent:{
        type:String,
       required:true
     }
  },
  data () {
    return {
      
    }
  },
  methods:{
   cancelActive(){
      this.$emit('cancelActive');
   },
   confirmActive(){
    this.$emit('confirmActive');
   }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.alert-confirm{
  position:fixed;
 top:0;
 height:100%;
 width:100%;
 overflow:hidden;
 z-index: 99999;
 .alert-bg{
   height:100%;
   width:100%;
   background:#000;
   opacity:.5;
  
 }

 .alert-box{
   position:fixed;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   width:90%;
   height:rem(350px);
   background:#fff;
   border-radius: 6px;
    border-width: 1px;
    border-style: solid;
    text-align: center;
    line-height: 20px;
    font-weight: normal;
    font-style: normal;
    z-index: 5;
    opacity: 1;
    pointer-events: auto;
     color: #101010;
    overflow: hidden;
    border-color: #bbbbbb;

 .alert-title{
   height:rem(100px);
   line-height:rem(100px);
   font-size:20px;
   font-weight:bold;
 }
 .alert-content{
  padding:rem(25px);
  height:rem(150px);
  box-sizing:border-box; 
  font-size:16px;
 }
 .alert-btns{
   position:absolute;
   bottom:0;
   width:100%;
   height:rem(100px);
  
   border-top:1px solid  #bbb;
   display:flex;
    
    a{
      flex:1;
      text-align:center;
       line-height:rem(100px);
      &:nth-of-type(2){
        border-left:1px solid #bbb;
        color:#1c74d9;
      }
    }
   }
 }

}
</style>
