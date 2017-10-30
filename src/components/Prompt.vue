<template>
  <div class="prompt">
      <div class="prompt-bg"></div>
      <div class="prompt-box">
          <h3 class="prompt-title">提示</h3>
          <p class="prompt-content">{{content}}</p>
          <div class="prompt-btns">
                <a  href="javascript:;" class="prompt-botton" @click="action()">确定</a>
          </div>
         
      </div>
  </div>
</template>

<script>
export default {
  name: 'Prompt',
  props:{
      content:{
          type:String,
          require:true
      }
  },
  data () {
    return {
      
    }
  },
  methods:{
      action(){
          this.$emit('actionPrompt');
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.prompt{
  position:fixed;
 top:0;
 height:100%;
 width:100%;
 overflow:hidden;
z-index: 999;
 .prompt-bg{
   height:100%;
   width:100%;
   background:#000;
   opacity:.3;
  
 }

 .prompt-box{
   position:fixed;
   top:50%;
   left:50%;
   transform:translate(-50%,-50%);
   width:75%;
   height:rem(300px);
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

 .prompt-title{
   height:rem(80px);
   line-height:rem(80px);
   font-size:20px;
   font-weight:bold;
 }
 .prompt-content{
  padding:rem(25px);
  height:rem(150px);
  box-sizing:border-box; 
  font-size:16px;
 }
 .prompt-btns{
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
       color:#1c74d9;
       font-size:17px;
    }
   }
 }}

</style>
