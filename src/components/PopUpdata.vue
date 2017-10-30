<template>
  <div class="popupdata">
        <div class="bg"></div>
 
        <div class="pop-content" v-if="showType=='typePhoneNumber'">
              <span class="iconfont  icon-guanbi"  @click="active('typePhoneNumber',phoneNumber)"></span>
              <h2>更换手机号码</h2>
              <span  :class="['msg',{error:isError},{success:!isError}]">{{msg}}</span>
              <div class="group-input">
                    <input type="text"  v-model="phoneNumber" placeholder="请输入未注册的手机号"/>
              </div>
              <p class="save" @click="savephn()">确定</p>
        </div> 
        <div class="pop-content pop-content-sex" v-if="showType=='typeSex'">
              <span class="iconfont  icon-guanbi"  @click="active('typeSex',sex)"></span>
              <h2>选择性别</h2>
              <div class="group-input">
                  <label>男  </label>
                  <input type="radio" v-model="sex" value="男" placeholder="请输入未注册的手机号"/>
                
                  <label>女</label>
                  <input type="radio" v-model="sex"   value="女"  placeholder="请输入未注册的手机号"/>
                  
              </div>
             
        </div> 
        <Prompt v-show="isPrompt"  :content="pContent" @actionPrompt="pAction"/>
  </div>
</template>

<script> 
import  Prompt   from './Prompt.vue'
export default {
  name: 'PopUpdata',
  props:{
    popActive:{
        type:Function,
       
    },
    showType:{
    type:String
 
    },
    user:{
        type:Object
    }
  },
  data () {
    return {
       phoneNumber:'',
       pContent:'',
       sex:'男',
       isPrompt:false,
       isError:false,
       msg:''
    }
  },
  methods:{
     pAction(){
        this.isPrompt=false;
     },
      savephn(){
         if(this.phoneNumber.length!=11){
            //   this.isPrompt=true;
            //   this.pContent="输入的手机号格式有误，请重新输入";
            this.msg='输入的手机号格式有误，请重新输入';
            this.isError=true;
              
         }else{
               this.isError=false;
               this.$http.get(api.pUpdata+GetQueryString('pinfoId')+'&pinfoPhone='+this.phoneNumber)
               .then(response=>{
                   let data=response.data;
                   if(data.result=='success'){
                       this.msg='号码修改成功';
                    //    this.user.pinfoPhone=this.phoneNumber;
                     //  console.log(this.user);
                   }
                   //console.log(data);
               })
         }
        
      },
      active(str,data){
          this.$emit('popActive',[str,data]);
      }
  },
  components:{
      Prompt
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.popupdata{
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    .bg{
       background: rgba(0,0,0,.3);
       height: 100%;
       width: 100%; 
       z-index: 999;
    }
    .pop-content{
        position: fixed;
        top: 50%;
        left: 50%;
        width: 80%;
        height: rem(350px);
        background: #fff;
        transform: translate3d(-50%,-50%,0);
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        h2{
            font-size: 16px;
            padding: 10px 0;
            color: #000;
        }
        &.pop-content-sex{
             height: rem(300px);
             label{
               font-size: 16px;
             }
            .group-input{
                display: flex;
                justify-content: space-between;
                align-items: center;
                 width:50%; 
             
                input{
                    
                    border: 1px solid #bbb;
                    height:rem(50px);
                    width: rem(50px);
                 
              }
             
            }
           
        }
    }
    .group-input{
        width:70%; 
        input{
            border: 1px solid #bbb;
            height:rem(50px);
            width: 100%;
        }
    }
    .icon-guanbi{

          position: absolute;
          right: 10px;
          top:10px;
    }
     .save{
        
        
            margin:15px auto;
            width:50%;
            padding:8px 0;
            font-size:16px;
            color:#fff;
            background:#ffc800;
            text-align:center;
            border-radius:5px;
      }
      .msg{
          margin: 3px 0 5px 0;
      }
      .success{
          color: #5cb85c ;
      }
      .error{
          color: #f00 ;
        }
}
</style>