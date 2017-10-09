<template>
  <div class="recruit-post">
      <VHeader  :isSubPage="false" title="发布" :isFixed="true"/>
      <div class="post-content">
           <div class="input-group">
               <div class="input-box">
                 <span style="font-weight:bold;"> 机构名称或标题：</span> <input type="text"  v-model="rTitle" placeholder="不超过十个字"/>
              </div>
             <div class="input-box">
                 <span style="font-weight:bold;">艺术种类：</span> 
                 <span class="addressBtn" style=" text-align: center;color:#bbb">点击选择</span>
                 <span class="iconfont icon-xiangyou"></span>
              </div>
           </div>
           <div class="input-group">
             <p>工作地点：</p>
              <div class="input-box">
                 <span style="font-weight:bold;"> 请选择定位：</span> 
                 <div class="addressBtn"> 
                    <span class="iconfont icon-dizhi" style="font-size:20px;"></span>
                    <span style="font-size:16px;font-weight:bold;">点击选择地址</span>
                  </div>
                  <span class="iconfont icon-xiangyou"></span>
              </div>
               <div class="input-box">
                 <span style="font-weight:bold;">详细地址：</span> <input type="text"  v-model="rClass" placeholder="例：5号308室"/>
                 <span class="iconfont icon-xiangyou"></span>
               </div>
           </div>
           <div class="selection">
                 <p>性别</p>
                 <div class="select-group">
                      <span :class="['select-box',{'selectBtnbox':this.rSex=='男'}]" @click="selectSex('男')" >男</span>
                      <span  :class="['select-box',{'selectBtnbox':this.rSex=='女'}]" @click="selectSex('女')">女</span>
                 </div>
           </div>
            <div class="selection">
                 <p>兼全职</p>
                 <div class="select-group">
                      <span :class="['select-box',{'selectBtnbox':this.rZKind=='全职'}]" @click="selectJqz('全职')" >全职</span>
                      <span :class="['select-box',{'selectBtnbox':this.rZKind=='兼职'}]" @click="selectJqz('兼职')" >兼职</span>
                 </div>
           </div>
           <div class="selection">
                 <p>薪资待遇</p>
                 <div class="select-group">
                     <div class="rmb-box">
                          <input type="text"  v-model="rmb" />
                          <span  v-show="this.rZKind=='全职'">/月</span>
                          <span  v-show="this.rZKind=='兼职'">/小时</span>
                     </div>
                 </div>
           </div>
           <div class="selection">
                 <p>工作内容与要求</p>
                 <div class="select-group">
                     <div class="work-demand">
                          <textarea   v-model="workDemand" placeholder="对老师的要求，不超过100字"/>
                          
                     </div>
                 </div>
           </div>
            <div class="selection">
                    <p>机构图片上传</p>
                    <ul class="imgs-list">
                      <li v-for="v in 3"><img  src="../assets/images/picIcon.png"/></li>
                   </ul>
            </div>
      </div>
        <FooterButton  btnName="确认发布" @fBtnAction="btnAction()"/>
  </div>
</template>

<script>
import  VHeader   from '../components/Header.vue'
import FooterButton from '../components/FooterButton.vue'
export default {
  name: 'recruitPost',
  data () {
    return {
      rTitle:'',
      rmb:'',
      rClass:'',
      rSex:'',
      rZKind:'',
      workDemand:'',
      postString:''
    }
  },
  methods:{
    selectSex(sex){
       this.rSex=sex;
    },
    selectJqz(str){
     this.rZKind=str;
    },
    postRecruit(){
       this.$http.get(api.recruitAddAOrRevise+this.postString)
       .then(response=>{
          console.log(JOSN.Stringify(response.data));
       })
    },
    btnAction(){
      this.postString='infoTitle='+this.rTitle+'&titleClass=C&salaryClass=A&titleDesc=内容&titleAddr=地址&pinfoSex=男&titleExt1=WT01&titleExt2=WT02&&titleExt3=WT03&titleExt4=WT04&&titleExt5=WT05&pinfoId=32';
    }
  },
  components:{
      VHeader,
      FooterButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.recruit-post{
     height:100%;
  
    .post-content{
      
      width:100%;
      position:fixed;
      overflow-y: scroll;
      top:rem(100px);
      bottom: rem(100px);
     background-color: rgb(237, 235, 232);
      .input-group{
        .input-box{
          span:nth-of-type(1){
            width:120px;
            text-align: center;
          }
        $inputHeight:rem(100px);
          background:#fff;
          font-size:14px;
          display: flex;
          padding:0 10px;
          flex-direction: row;
          align-items: center;
         
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
             margin:10px 0;
            input{
               text-align: center;
            }
          }
            
        }

         &:nth-of-type(2),&:nth-of-type(1){
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
  
    }
    .selection{
      margin:20px;
      border-bottom: 1px solid #bbb;
      p{
        margin:15px 0 10px 0;
        font-size:16px;
        text-align: center;
        color: #101010;
      }
      .select-group{
        margin: 20px 0;
        text-align: center
      }
     .select-box{
       display: inline-block;
        margin: 0 25px;
       font-size: 14px;
       width: 75px;
       padding: 5px 0;
       border: 1px solid #bbbbbb;
       background: #fff;
       border-radius: 5px;
      
     }
     .rmb-box,.work-demand{
       margin: 0 auto;
       width:rem(300px);
       height: rem(70px);
       border: 1px solid #bbbbbb;
       background: #fff;
       border-radius: 5px;
        display: flex;
         flex-direction: row;
       align-items: center;
       justify-content: center;
       input{
       text-align: center;
         width:rem(150px);
         border: none;
       }
       span{
         font-size: 14px;
       }
     }
     .work-demand{
       width: 80%;
       height: 150px;;
       textarea{
         line-height: 150px *0.8;
        
         text-align:center;
         height: 80%;
         width: 80%;
         border: none;
         resize:none;
         font-size:14px;
       }
     }
     &:nth-last-of-type(1){
       border: none;
     }
     .imgs-list{
            margin-top:20px;
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            li{
              text-align: center;
                margin:0 2px ;
                img{
                 
                    height: auto;
                    width:80%;
                }
            }
        }
    }
    .selectBtnbox{
      background:#ffc800 !important;
   }
}

</style>
