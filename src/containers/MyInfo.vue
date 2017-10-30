<template>
  <div class="my-info" >
       <VHeader title="IPCC机构" :isSubPage="false"/>   
       <div class="my-info-content">
            <div class="input-group">
                <div class="input-box">
                    <span style="font-weight:bold;">修改头像</span>
                     <img :src="pinfoUri" >  
                     <span class="iconfont icon-xiangyou"></span>
                      <form id="upload_avatar"    name="upload_avatar" method="post" enctype="multipart/form-data" >
                           
                           
                                <input type="file" name="filegCollImguri" id="filegCollImguri"  @change="changFile($event)"  accept="image/*" >
                            
                     </form>
                </div>
                   
            </div>
            <div class="input-group input-group-btn">
                <div class="input-box">
                    <span style="font-weight:bold;">昵称</span> 
                    <span class="addressBtn" style=" text-align: center;color:#bbb">{{pinfoSname}}</span>
                   
                </div>
            </div>  
            <div class="input-group input-group-btn">
                <div class="input-box"  @click="setSex('typeSex')">
                    <span style="font-weight:bold;">性别</span> 
                    <span class="addressBtn" style=" text-align: center;color:#bbb">{{pinfoSex!=''?pinfoSex:pinfoSex2}}</span>
                    <span class="iconfont icon-xiangyou"></span>
                </div>
            </div>
             <div class="input-group input-group-btn">
                <router-link class="input-box" to="/phoneNumber" tag="div">
                    <span style="font-weight:bold;">修改手机</span> 
                    <span class="addressBtn" style=" text-align: center;color:#bbb">{{pinfoPhone}}</span>
                    <span class="iconfont icon-xiangyou"></span>
                </router-link>
            </div>
             <div class="input-group">
                <div class="input-box">
                    <span style="font-weight:bold;">交易记录</span> 
                   
                    <span class="iconfont icon-xiangyou"></span>
                </div>
            </div>
                <div class="input-group">
                <div class="input-box">
                    <span style="font-weight:bold;">关于IPCC招聘</span> 
                   
                    <span class="iconfont icon-xiangyou"></span>
                </div>
            </div>
            <p class="save" @click="save()">保存</p>
        </div>
       <Prompt v-show="isPrompt"  :content="pContent" @actionPrompt="pAction"/>
      <PopUpdata  @popActive="popActive" v-show="isShowpop" :showType="typebox"/>
      
  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
import  Prompt   from '../components/Prompt.vue'
import  PopUpdata   from '../components/PopUpdata.vue'

export default {
  name: 'MyInfo',
 
  data () {
    return {
      firstName:'',
     
      isPrompt:false,
      pContent:'',
      isShowpop:false,
      typebox:'',
      pinfoSex:'',
      pinfoSex2:'',
      pinfoUri:'',
      pinfoPhone:'',
      pinfoSname:''
     
    }
  },
//   updated(){
//       if(this.pinfoSex==''){
//            this.pinfoSex=this.user.pinfoSex;
//       }
      
//   },
  created(){
        let user=JSON.parse(localStorage.getItem('user'));
        this.pinfoSname=user.pinfoSname;
        this.pinfoSex2=user.pinfoSex;
        this.pinfoUri=user.pinfoUri;
        this.pinfoPhone=user.pinfoPhone;
  },
  methods:{
      setSex(type){
        
        this.typebox=type;
        this.isShowpop=!this.isShowpop;
      },
      popActive(data){
            if(data[0]=='typeSex'){
               this.pinfoSex=data[1];
            }
          this.isShowpop=!this.isShowpop;
      },
   promptCommon(str){
       this.pAction();
       this.pContent=str;
    }, 
   pAction(){
    this.isPrompt=!this.isPrompt;
   },
  changFile(e){

       
         this.postImg(e);
   
   
    },
postImg(e){
       let form= document.getElementById("upload_avatar");  
       
        let fData=new FormData(form);
        fData.append("prdImgtype",'P');
        fData.append("msgId",GetQueryString('pinfoId'));
        this.$http.post(baseUrl+'/servlet/fileUploadServlet?appType=PIMGE',fData,{headers:{'Content-Type':'multipart/form-data'}})
        .then(response=>{
           let data=response.data;
           if(data.result=="success"){
          
             this.pinfoUri=URL.createObjectURL(e.target.files[0]);
               this.promptCommon("头像修改成功");
           }else
           this.promptCommon("头像上传失败，请稍后重试");

      })
    },
    save(){  
       if(this.pinfoSex!=''&&this.pinfoSex!=this.pinfoSex2){
          this.$http.get(api.pUpdata+GetQueryString('pinfoId')+(this.pinfoSex!=''?('&pinfoSex='+this.pinfoSex):''))
            .then(response=>{
                let data=response.data;
                console.log(data);
                if(data.result=='success'){
                    this.promptCommon("信息修改成功");
                }
            })
       }else{
           
            this.promptCommon("信息未更改");
       }
          
      
      
    }

  },
  components:{
    VHeader,
    Prompt,
    VHeader,
    PopUpdata
   
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.my-info-content{
   
    height:100%;
    width: 100%;
    overflow: hidden;
    background:#edebe8;
     .input-group{
        padding:8px 0;
        .input-box{
         position: relative;
         #upload_avatar{
             width: 100%;
             height: 100%;
             position: absolute;
             opacity: 0;
         }
          span:nth-of-type(1){
            width:120px;
          
          }
        $inputHeight:rem(120px);
          background:#fff;
          font-size:14px;
          display: flex;
          padding:0 15px;
          flex-direction: row;
          align-items: center;
          justify-content:space-between;
          height: $inputHeight;
          border-top:1px solid #bbbbbb;
          border-bottom:1px  solid #bbbbbb;
         
          input{
              font-size: 14px;
              border:none;
              outline:none;
              flex:1;
              height: $inputHeight - rem(30px);
            } 
        }
        &:nth-of-type(1){
         
           .input-box{
             height:rem(200px);
            
             img{
                 height:rem(150px);
                 width:rem(150px);
                 border-radius:50%;
             }
          }
            
        }

         &:nth-of-type(2),&:nth-of-type(3),&:nth-of-type(4){
           p{
             padding: 10px;
             font-size:16px;
             font-weight: bold;
           }
          
          .input-box{
             display: flex;
           
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .addressBtn{
             
              flex: 1;
            }
             &:nth-of-type(2){
                 border-top:none;
             }
          }
            
        }
      }
      .save{
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