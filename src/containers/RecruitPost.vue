<template>
  <div class="recruit-post">
      <VHeader  :isSubPage="false" title="发布" :isFixed="true"/>
      <div class="post-content">
           <div class="input-box">
                <span style="font-weight:bold;"> 机构名称或标题：</span> <input type="text"  v-model="rName" placeholder="不超过十个字"/>
           </div>
            <div class="input-box">
                 <span style="font-weight:bold;">艺术种类：</span> <input type="text"  v-model="rClass" placeholder="点击选择"/>
                 <span class=""></span>
           </div>
      </div>
  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
export default {
  name: 'recruitPost',
  data () {
    return {
      
    }
  },
  components:{
      VHeader
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.recruit-post{
     height:100%;
    .post-content{
      height:100%;
      width:100%;
      position:fixed;
      
      top:rem(100px);
      background-color: rgba(0, 0, 0, 0.18);
    .input-box{
       $inputHeight:rem(100px);
        background:#fff;
        font-size:14px;
        display: flex;
        padding:0 10px;
        flex-direction: row;
        align-items: center;
        margin:10px 0;
        height: $inputHeight;
        border-top:1px solid #bbbbbb;
        border-bottom:1px  solid #bbbbbb;
        input{
            text-align:center;
             border:none;
             outline:none;
             flex:1;
             height: $inputHeight - rem(30px);
        } 
    }
    }
}

</style>
