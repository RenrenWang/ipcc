<template>
  <div class="recruit-post">
    <VHeader :isSubPage="false" title="发布" :isFixed="true" />
    <div class="post-content">
      <div class="input-group">
        <div class="input-box">
          <span style="font-weight:bold;"> 机构名称或标题：</span> <input type="text" v-model="rTitle" placeholder="不超过十个字" />
        </div>
        <div class="input-box">
          <span style="font-weight:bold;">艺术种类：</span>
          <span class="addressBtn" :style="{textAlign:'center',color:selectKinds.length>0?'#444':'#bbb'}" @click="showPanel">{{selectKindsStr}}</span>
          <span class="iconfont icon-xiangyou"></span>
        </div>
      </div>
      <div class="input-group">
        <p>工作地点：</p>
        <div class="input-box">
          <span style="font-weight:bold;"> 请选择定位：</span>
          <div class="addressBtn"  @click="isShowMap">
            <span class="iconfont icon-dizhi" style="font-size:20px;"  v-show="rMapAddress==''"></span>
            <span style="font-size:16px;font-weight:bold;" v-show="rMapAddress==''">点击选择地址</span>
            <span style="font-size:16px;font-weight:bold;" v-show="rMapAddress!=''">{{rMapAddress}}</span>
          </div>
          <span class="iconfont icon-xiangyou"></span>
        </div>
        <div class="input-box">
          <span style="font-weight:bold;">详细地址：</span> <input type="text" v-model="rAddress" placeholder="例：5号308室" />
          <span class="iconfont icon-xiangyou"></span>
        </div>
      </div>
      <div class="selection">
        <p>性别</p>
        <div class="select-group">
          <span :class="['select-box',{'selectBtnbox':this.rSex=='男'}]" @click="selectSex('男')">男</span>
          <span :class="['select-box',{'selectBtnbox':this.rSex=='女'}]" @click="selectSex('女')">女</span>
        </div>
      </div>
      <div class="selection">
        <p>兼全职</p>
        <div class="select-group">
          <span :class="['select-box',{'selectBtnbox':this.rZKind=='C'}]" @click="selectJqz('C')">全职</span>
          <span :class="['select-box',{'selectBtnbox':this.rZKind=='J'}]" @click="selectJqz('J')">兼职</span>
        </div>
      </div>
      <div class="selection">
        <p>薪资待遇</p>
        <div class="select-group">
          <div class="rmb-box">
            <input type="text" v-model="rmb" />元
            <span v-show="this.rZKind=='C'">/月</span>
            <span v-show="this.rZKind=='J'">/小时</span>
          </div>
        </div>
      </div>
      <div class="selection">
        <p>工作内容与要求</p>
        <div class="select-group">
          <div class="work-demand">
            <textarea v-model="workDemand" placeholder="对老师的要求，不超过100字" />
          </div>
        </div>
      </div>
      <div class="selection">
        <p>机构图片上传</p>
     
         <span @click="reUpload" style="color:#f00" v-if="$route.query.id&&$route.query.id>0">{{!isUpload?'重新上传':'重置'}}</span>    
         <Upload   v-show="isUpload"  @uploadFile="uploadResult"/>
        
           <ul class="imgs-list"  v-if="!isUpload&&($route.query.id&&$route.query.id>0)">
               <li v-for="(v,idnex) in srcImgs"><img  :src="imgUrl+v.lidFileuri"/></li>
          </ul>
  
     
      </div>
    </div>
    <selectMapAddress v-show="isShowSelectMap" @closeSelectMap="showMap"/>
    <FooterButton :btnName="$route.query.id?'保存':'确认发布'" @fBtnAction="btnAction()" />
    <KindPanel  :selectItem="selectKindsStr" v-show="isShowPanel" @closePanel="ishowKindPanel" :sKinds="kinds" :selectIndex='1' sName="艺术种类" />
    <Prompt v-show="isPrompt"  :content="pContent" @actionPrompt="pAction"/>
    <BottomPlay v-show="isShowPlay"/>
    <AlertConfirm  v-show="isShowAlertConfirm"  alertTitle="提示" alertContent="招聘信息已上传，支付后教师才能看到招聘信息" @cancelActive="AlertCancelActive" @confirmActive="AlertConfirmActive"/>
  </div>
</template>

<script>
import VHeader from '../components/Header.vue'
import FooterButton from '../components/FooterButton.vue'
import KindPanel from '../components/KindPanel.vue'
import selectMapAddress from '../components/selectMapAddress.vue'
import Prompt from '../components/Prompt.vue'

import BottomPlay from '../components/BottomPlay'
import Upload from '../components/Upload'
import AlertConfirm from '../components/AlertConfirm'

export default {
  name: 'recruitPost',
  data() {
    return {
      rTitle: '',
      rmb: '',
      rClass: '',
      rSex: '男',
      rZKind: 'C',
      workDemand: '',
      postString: '',
      rAddress: '',
      rMapAddress:'',
      rMapX:"",
      rMapY:"",
      isShowPanel: false,
      kinds: [],
      selectKinds:[],
      selectKindsStr:'点击选择',
      isShowSelectMap:false,
      pContent:'',
      isPrompt:false,
      refNameArr:[],
      msgid:0,
      srcImgs:[],
      isShowPlay:false,
      isShowAlertConfirm:false,
      imgUrl:api.imgUrl,
      isUpload:true
    
    }
  },

   mounted(){
    if(this.$route.query.id){
      this.getDataD();
    }
   },
  methods: {
    reUpload(){
   this.isUpload=!this.isUpload;
    },
    getDataD(){
    this.$http.get(api.recruitD+this.$route.query.id)//this.$route.params.id
       .then(response=>{
             let data=response.data;
          console.log(data);
              this.rTitle=data.data[0].infoTitle;
               this.rZKind=data.data[0].titleClassname=="全职"?"C":"J";
               this.rSex=data.data[0].pinfoSex;
               this.selectKindsStr=data.data[0].titleExt1name;
               this.rAddress=data.data[0].infoAddr;
               this.rmb=data.data[0].salaryClassname;
               this.workDemand=data.data[0].titleSimdesc;
               this.selectKinds=[{codeValue:data.data[0].titleExt1name,codeName:data.data[0].titleExt1}];
               this.srcImgs=data.imgData;
               if(this.srcImgs.length>0){
                  this.isUpload=false;
               }
       })
    },
  AlertCancelActive(){
      this.isShowAlertConfirm=false;
  },
  AlertConfirmActive(){
    
     location.href="http://www.hzrongzhi.com/appsrv/wx_banding?applType=WXPAY&feeClass=A&pinfoId="+GetQueryString('pinfoId')+"&msgId="+this.msgid;

  },
  uploadResult(arr){
     console.log(arr);
     this.refNameArr=arr;
  },
    postImg(refId){

      let arr=[];
    for(let i=0;i<this.refNameArr.length;i++){
        let form= document.getElementById("upload_"+i);  
        //this.$refs.refId
        let fData=new FormData(form);
        fData.append("prdImgtype",'A');
        fData.append("msgId",this.msgid);
        arr.push(this.$http.post(baseUrl+'/servlet/fileUploadServlet?appType=PIMGE',fData,{headers:{'Content-Type':'multipart/form-data'}}));
   
   
   
    }

      


      //  let form2 = document.getElementById("upload_1");
      //   let fData2=new FormData(form2);
      //   fData2.append("prdImgtype",'A');
      //   fData2.append("msgId",this.msgid);


      //   let form3 = document.getElementById("upload_2");
      //    let fData3=new FormData(form3);
      //   fData3.append("prdImgtype",'A');
      //   fData3.append("msgId",this.msgid);

        this.$http.all(
          arr
        //  this.$http.post(baseUrl+'/servlet/fileUploadServlet?appType=PIMGE',fData1,{headers:{'Content-Type':'multipart/form-data'}}),
        //  this.$http.post(baseUrl+'/servlet/fileUploadServlet?appType=PIMGE',fData2,{headers:{'Content-Type':'multipart/form-data'}}),
        //   this.$http.post(baseUrl+'/servlet/fileUploadServlet?appType=PIMGE',fData3,{headers:{'Content-Type':'multipart/form-data'}}),
       
        )
       .then(this.$http.spread( (acct, perms)=> {
              // Both requests are now complete
            this.isShowAlertConfirm=true;

            
             console.log(acct);
             console.log(perms);
        }));
    // alert(JSON.stringify(response.data));
          // console.log(response.data);

        //   console.log("------------------"+fData1==fData2);
        //  console.log("------------------"+fData2==fData3);
        //   console.log("------------------"+fData1==fData3);
        // this.$http.post(baseUrl+'/servlet/fileUploadServlet?appType=PIMGE',fData1,{headers:{'Content-Type':'multipart/form-data'}})
        // .then(response=>{
        //         this.$http.post(baseUrl+'/servlet/fileUploadServlet?appType=PIMGE',fData2,{headers:{'Content-Type':'multipart/form-data'}})
        //     .then(response=>{
        //        this.$http.post(baseUrl+'/servlet/fileUploadServlet?appType=PIMGE',fData3,{headers:{'Content-Type':'multipart/form-data'}})
        //         .then(response=>{
                    
        //         })   
        //     })   
        // })      
  
   },
    promptCommon(str){
       this.pAction();
       this.pContent=str;
    },
    pAction(){
     this.isPrompt=!this.isPrompt;
    },
    isShowMap(){
      this.isShowSelectMap=!this.isShowSelectMap;
      if(this.isShowSelectMap){
        window.addEventListener("message",(e)=>{
         console.log('您选择了:' + JSON.stringify(e.data));
            this.isShowSelectMap=!this.isShowSelectMap;
            this.showMap([e.data.name,e.data.location]);
          //this.$emit('closeSelectMap',[e.data.name,e.data.location]);
        }, false);
      }
        
    },
    showMap(arr){
      if(arr){
      this.isShowSelectMap=false;
       this.rMapAddress=arr[0];
       let xy=arr[1].split(',');
       this.rMapX=xy[0];
       this.rMapY=xy[1];
      }
      
    },

    // postImg(id){
       
    //     //console.log("---------"+id);
    //     this.$http.post('/appsrv/servlet/fileUploadServlet?appType=PIMGE',{
    //       // "name":"filegCollImguri",
    //       "msgid":id,
    //       "prdImgtype":'a',
    //       "fileImg":this.picValue
    //     },{headers:{'Content-Type':'multipart/form-data'}})
    //     .then(response=>{
    //       console.log(response.data);
    //     })
    // },
  selectKindsAction() {
       
      let kindStr = '';
     
     
      switch(this.selectKinds.length) {
        case 5:
          kindStr += this.selectKinds[4]['codeValue'] + '、';

        case 4:
          kindStr += this.selectKinds[3]['codeValue'] + '、';

        case 3:
          kindStr += this.selectKinds[2]['codeValue'] + '、';

        case 2:
          kindStr += this.selectKinds[1]['codeValue'] + '、';

        case 1:
          kindStr += this.selectKinds[0]['codeValue'] + '、';
          break;
        case 0:

          kindStr='点击选择';
      }
      this.selectKindsStr=kindStr.slice(0,-1);
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
      this.selectKindsAction();
    },
    selectSex(sex) {
      this.rSex = sex;
    },
    selectJqz(str) {
      this.rZKind = str;
    },
    postRecruit(str) {
      console.log(api.recruitAddAOrRevise + str+'&pinfoId='+GetQueryString('pinfoId'));
      this.$http.get(api.recruitAddAOrRevise + str+'&pinfoId='+GetQueryString('pinfoId'))
        .then(response => {
          // console.log(JSON.stringify(response.data));
          if (response.data.result == "success") {
            
           
              //response.data.infoIds
              //this.postImg();
              this.msgid=response.data.infoIds;
                 if(this.msgid>0&&this.refNameArr.length>0){
                 
                  //  document.getElementById("submit").click();
               
                               this.postImg();
                              
                    }else{
                      if(this.$route.query.id){
                             this.promptCommon('信息修改成功');
                      }else{
                         this.isShowAlertConfirm=true;
                      }
                      
                   
                 }
          }else{
             this.promptCommon('发布失败');
          }
        })
    },


    btnAction() {

        
      if (this.rTitle == '' || !this.rTitle) {
         this.promptCommon('标题不能为空');
        return;
      }
      if (this.rTitle.length > 10) {
        this.promptCommon('标题不能超过十个字');
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
          this.promptCommon('艺术种类不能为空');
          return;
      }

   
        if (this.rAddress == '' || !this.rAddress||this.rMapAddress == '') {
          this.promptCommon('请地址不完整');
          return;
        }
       if(this.rmb== '' || !this.rmb){
          this.promptCommon('薪资待遇不能为空');
          return;
       }
       if(isNaN(this.rmb)){
          this.promptCommon('薪资待遇格式有误');
          return;
       }

      if (this.workDemand == '' || !this.workDemand) {
        this.promptCommon('内容不能为空');
        return;
      }
      if (this.workDemand.length > 100) {
        this.promptCommon('内容不能超过100个字');
        return;
      }
        let xzdy='';
        if(this.rZKind=="C"){
           xzdy=this.rmb;//+'元/月';

        }else if(this.rZKind=="J"){
           xzdy=this.rmb;//+'元/小时';
        }
 
  
      this.postString = 'infoTitle=' + this.rTitle + '&titleClass=' + this.rZKind + '&salaryClass='+xzdy+'&titleDesc=' + this.workDemand + '&titleAddr=' + this.rMapAddress+this.rAddress + '&mapAxis='+this.rMapX+'&mapAyis='+this.rMapY+'&titleSex=' + this.rSex + kindStr +(this.$route.query.id?('&infoIds='+this.$route.query.id):'');
      console.log(this.postString);
    //  this.isShowPlay=!this.isShowPlay;
    this.postRecruit(this.postString);
    }
  },
  components: {
    VHeader,
    FooterButton,
    KindPanel,
    selectMapAddress,
    Prompt,
   
    BottomPlay,
    Upload,
    AlertConfirm
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.recruit-post {
  height: 100%;
  
  .post-content {
    -webkit-overflow-scrolling : touch; 
    width: 100%;
    position: fixed;
    overflow-y: scroll;
    top: rem(100px);
    bottom: rem(100px);
    background-color: rgb(237, 235, 232);
    .input-group {
      .input-box {
        span:nth-of-type(1) {
          width: 120px;
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
        border-bottom:1px solid #bbbbbb;

        input {
          font-size: 14px;
          border: none;
          outline: none;
          flex: 1;
          height: $inputHeight - rem(30px);
        }
      }
      &:nth-of-type(1) {
        .input-box {
          margin: 10px 0;
          input {
            text-align: center;
          }
        }
      }

      &:nth-of-type(2),
      &:nth-of-type(1) {
        p {
          padding: 10px;
          font-size: 16px;
          font-weight: bold;
        }

        .input-box {
          display: flex;

          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          .addressBtn {

            flex: 1;
          }
          &:nth-of-type(2) {
            border-top: none;
          }
        }
      }
    }
  }
  .selection {
    margin: 20px;
    border-bottom: 1px solid #bbb;
    p {
      margin: 15px 0 10px 0;
      font-size: 16px;
      text-align: center;
      color: #101010;
    }
    .select-group {
      margin: 20px 0;
      text-align: center
    }
    .select-box {
      display: inline-block;
      margin: 0 25px;
      font-size: 14px;
      width: 75px;
      padding: 5px 0;
      border: 1px solid #bbbbbb;
      background: #fff;
      border-radius: 5px;
    }
    .rmb-box,
    .work-demand {
      margin: 0 auto;
      width: rem(300px);
      height: rem(70px);
      border: 1px solid #bbbbbb;
      background: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      font-size:14px;
      input {
        text-align: center;
        width: rem(150px);
        border: none;
      }
      span {
        font-size: 14px;
      }
    }
    .work-demand {
      width: 80%;
      height: 150px;
     border-radius: 10px;
      textarea {
      padding: 0 10px;
        text-align: center;
         width: 100%;
        height: 80%;
       
        border: none;
        resize: none;
        font-size: 14px;
        outline: none;
      }
    }
    &:nth-last-of-type(1) {
      border: none;
    }
    #jvForm{
       text-align:center;
      text-align: -webkit-center;
 height: 80px;
     overflow: hidden;
    }
    .file-button{
  width:30%;
  position: relative;
  input{
    display: block;
    width: 100%;
     height: 100%;
    position: absolute;
    top:0px;
     opacity:0;
  }
  img{
    width: 100%;
     width: 101px;
     height: 80px;
  }
}
    .imgs-list {
      // margin-top: 20px;
      display: flex;
      justify-content: center;
      flex-direction: row;
      align-items: center;
      li {

        text-align: center;
        margin: 0 2px;
        img {

          height: auto;
          width: 101px;
          height: 80px;
        }
      }
    }
  }
  .selectBtnbox {
    background: #ffc800 !important;
  }
}


</style>
