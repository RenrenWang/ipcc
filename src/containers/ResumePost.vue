<template>
  <div class="resume-post">
       <VHeader :isSubPage="false" title="上传简历" :isFixed="true" />
       <div class="post-content">
            <div class="section">
                <h2 class="post-title">填写简历</h2>
                <div class="input-grounp">
                     <span>姓名:</span><input v-model="name"/>
                </div>
                 <div class="input-grounp">
                     <span>年龄:</span><input v-model="age"/>
                </div>
                 <div class="input-grounp">
                     <span>毕业院校:</span><input v-model="school"/>
                </div>
                 <div class="input-grounp">
                     <span>希望在哪里工作:</span><input v-model="jobAddress"/>
                </div>
                <div class="input-grounp">
                     <span>教学经验:</span><input v-model="jobYear" />
                </div>
            </div>
             <div style="height:10px;background:#fff;border-top:1px solid #bbbbbb;border-bottom:1px solid #bbbbbb;"></div>
            <div class="section">
                <h2 class="title">希望</h2>
                <div class="select-group">
                    <span :class="['select-box',{'selectBtnbox':this.rZKind=='C'}]" @click="selectJqz('C')">全职</span>
                    <span :class="['select-box',{'selectBtnbox':this.rZKind=='J'}]" @click="selectJqz('J')">兼职</span>
                </div>
            </div>
            <div style="height:10px;background:#fff;border-top:1px solid #bbbbbb;border-bottom:1px solid #bbbbbb;"></div>
            <div class="section section-speciality">
                <h2 class="title">擅长</h2>
                <span class="speciality-items" v-for="(v,index) in  selectKinds" :key="index">{{v.codeValue}}</span>
                <!--<p style="color:#888">未选择艺术种类</p>-->
                <span class="iconfont icon-add_x" @click="showPanel"></span>
            </div>
            <div style="height:10px;background:#fff;border-top:1px solid #bbbbbb;border-bottom:1px solid #bbbbbb;"></div>
            <div class="section">
                <h2 class="title">个人简历</h2>
                <textarea v-model="resumeText" placeholder=" 尽可能的详细，如：从业经历，教育背景，个人爱好，性格，等等等........" />
            </div>
            <div style="height:10px;background:#fff;border-top:1px solid #bbbbbb;border-bottom:1px solid #bbbbbb;"></div>
             <div class="section">
                 <h2 class="title">艺术照</h2>
               <ul class="imgs-list">
                   <li v-for="v in 3"><img src="../assets/images/picIcon.png" /></li>
               </ul>
            </div>
       </div>
        <FooterButton  btnName="上传" @fBtnAction="save()"/>
        <KindPanel selectIndex=5 v-show="isShowPanel" @closePanel="ishowKindPanel" :sKinds="kinds" :selectIndex='1' sName="艺术种类" />
        <Prompt v-show="isPrompt"  :content="pContent" @actionPrompt="pAction()"/>
  </div>
</template>

<script>
import VHeader from '../components/Header.vue'
import FooterButton from '../components/FooterButton.vue'
import KindPanel from '../components/KindPanel.vue'
import Prompt from '../components/Prompt.vue'
export default {
  name: 'ResumePost',
  data () {
    return {
        name:'',
        jobAddress:'',
        age:'',
        school:'',
      rZKind:'C',
      resumeText:'',
      jobYear:'',
      isShowPanel:false,
      kinds:[],
      selectKinds:[],
         pContent:'',
      isPrompt:false
    }
  },

  mounted(){
       
  },
  methods:{

   promptCommon(str){
       this.pAction();
       this.pContent=str;
    },
    pAction(){
     this.isPrompt=!this.isPrompt;
    },
    selectJqz(str){
       this.rZKind=str;
    },
    save(){
      if (this.name == '' || !this.name) {
        this.promptCommon('姓名不能为空');
        return;
      }
     if (this.age == '' || !this.age) {
         this.promptCommon('年龄不能为空');
        return;
      }
      if (isNaN(this.age)){
         this.promptCommon('年龄格式有误');
        return;
      }
     if (this.school == '' || !this.school) {
         this.promptCommon('毕业学校不能为空');
        return;
      }
      if (this.jobAddress == '' || !this.jobAddress) {
         this.promptCommon('希望在哪里工作不能为空');
        return;
      }
        if (this.jobYear == '' || !this.jobYear) {
         this.promptCommon('工作经验不能为空');
        return;
      }

        let kindStr = '';
      switch (this.selectKinds.length) {
        case 5:
          kindStr += '&titleExt5=' + this.selectKinds[4]['codeName'];

        case 4:
          kindStr += '&titleExt4=' + this.selectKinds[3]['codeName'];

        case 3:
          kindStr += '&titleExt3=' + this.selectKinds[2]['codeName'];

        case 2:
          kindStr += '&titleExt2=' + this.selectKinds[1]['codeName'];

        case 1:
          kindStr += '&titleExt1=' + this.selectKinds[0]['codeName'];
          break;
        case 0:
           this.promptCommon('请选择擅长');
          return;
      }
      
      if(this.resumeText.length<=0){
        this.promptCommon('个人介绍不能为空');
       return;
      }
    
     let  str='titleClass='+this.rZKind+'&pinfoPname='+this.name+'&teacherYear='+this.jobYear+'&collName='+this.school+'&pinfoIdea='+this.jobAddress+'&pinfoNote='+this.resumeText+this.kindStr+'&pinfoId='+GetQueryString('pinfoId');
     console.log(str);
    this.postResume(str);
    },
    getKindsData() {

      this.$http.get(api.kindList)
        .then(response => {
          let data = response.data;
          data.fieldsData.map((item, index) => {
            item.classData.map((sitem, sindex) => {
              sitem.isSelect = false;
            })
          })

          this.kinds = data.fieldsData;
        })
    },
    showPanel() {
      if (!this.kinds || this.kinds.length <= 0)
       this.getKindsData();
       this.isShowPanel = !this.isShowPanel;
    },
    ishowKindPanel(setArray) {
      this.selectKinds = setArray;
      this.isShowPanel = !this.isShowPanel;
    },
   postResume(str) {
      this.$http.get(api.resumePost + str)
        .then(response => {
           console.log(JSON.stringify(response.data));
          if (response.data.result == "success") {
             this.promptCommon('发布成功');
          }
        })
    },
  },
  components:{
      VHeader,
      FooterButton,
      KindPanel,
      Prompt
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.resume-post{
    
    .post-content{
         position:fixed;
         top:rem(100px);
         bottom:rem(100px);
         width:100%;
         overflow-y:auto;
        .section{
           padding:10px 0;
           width:80%;
           margin:0 auto;
          .post-title{
           text-align:center;
            width:65%;
            height:rem(90px);
            text-alig:center;
            line-height:rem(90px);
            background:#727272;
            font-size:20px;
            font-weight:bold;
            color:#fff;
            margin:15px auto;
            border-radius:rem(90px)/2;
           }
           .title{
               margin-bottom:15px;
               text-align:center;
               font-size:16px;
               font-weight:bold;
           }
           .input-grounp{
               margin:rem(55px) 0;
               display:flex;
               flex-direction:row;
               span{
                  font-size:14px; 
                  white-space: nowrap; 
                }
               input{
                   width:60%;
                   margin-left:10px;
                   padding:1px 0;
                   outline:none;
                   border:none;
                   border-bottom:1px solid #bbbbbb;
                   background:none;
               }
           }
           .select-group{

               display:flex;
               
            .select-box {
               
                text-align:center;
                display: inline-block;
                margin: 0 rem(35px);
                font-size: 14px;
                width: rem(300px);
                padding:8px 0;
                border: 1px solid #bbbbbb;
                background: #fff;
                border-radius:15px;
            }

           .selectBtnbox {
               background: #ffc800 !important;
             }
           }
        &.section-speciality{
             position:relative;
             padding-bottom:rem(45px);
             text-align: center;
             min-height: rem(120px);
           .speciality-items{
              
             
              text-align:center;
                display: inline-block;
                margin:5px rem(20px);
                font-size: 12px;
                width: rem(150px);
                padding:5px 0;
                border: 1px solid #bbbbbb;
                background: #ffc800;
                border-radius:5px; 
            }
            .iconfont{
              font-size:rem(50px);
              
               position:absolute;
               top:8px;
               right:-25px;
            }
         }
         >textarea{
             padding:10px;
             width:100%;
              resize: none;
              height:rem(200px);
            
              border-radius:15px;
              outline:none;
         }

     .imgs-list {
      margin-top: 20px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      li {
        text-align: center;
        margin: 0 2px;
        img {

          height: auto;
          width: 80%;
        }
      }
    }
        }
        
    }
 
}
</style>
