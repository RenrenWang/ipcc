<template>
    <div class="recruit-d">
        <VHeader :isSubPage="true" :iconRight="isJS&&applClass!='T'?'icon-bianji2':''"  @rightAction="nrAction" :title="!this.$route.query.type?'详情':'详情'" :isFixed="true" />
        <Loading v-if="isLoading" :loaderNumber=1 styleColor="rgb(125, 125, 125)"/>
        <div v-if="!isLoading&&!isError" class="recruit-d-content" >
            <div class="recruit-d-t">
                <div class="recruit-d-item">
                    <p>发布者</p>
                </div>
                <div class="recruit-d-item">
                     <img :src="data.pinfoUri" class="avater-img"/>
                    <p class="top-panel-item-txt">
                        <span>{{data.pinfoPname}}</span>
                    </p>
                </div>
                <div class="recruit-d-item">
                    <p v-if="data.zfnums==1">倒计时{{data.timeDays}}天</p>
                    <p v-else-if="data.zfnums==0"  @click="pay">立即支付</p>
                </div>
            </div>
            <div class="recruit-d-c">
                <h3>{{data.infoTitle}}</h3>
                <ul class="demand-keyword">
                    <li>{{data.titleClassname}}</li>
                    <li>{{data.titleSex}}</li>
                    <li>{{data.titleExt1name}}</li>
                </ul>
                <div class="dy-box">
                    <p>薪资待遇：</p>
                    <p>{{setDy()}}</p>
                </div>
                <div class="nl-box">
                     <h3 style="border:none">工作内容与要求</h3>
                     <p>{{data.titleSimdesc}}</p>
                </div>
                <div class="map-box">
                    <p @click="showMapBig">工作地点(查看大图)</p>
                    <div id="map" @click="showMapBig"></div>
                    <p>详细地址：{{data.mapAddr+data.infoAddr}}</p>
                </div>
                <div class="imgs-box">
                    <p>机构图片</p>
                    <ul class="imgs-list">

                      <li v-for="(v,index) in list">
                       <img class="preview-img"  :src="v.src"  @click="$preview.open(index, list)">

                         
                      </li>


                   </ul>
                </div>
            </div>
        </div>
         <MapBig  v-if="isMapBig" :xy="mapXY" @hMap="showMapBig"/>
         <BottomPlay  v-show="isShowbp"  :isPay="true" :phoneNumber="data.pinfoPhone"/>
         <FooterButton  v-if="($route.query.type&&applClass=='T')" btnName="与他联系" @fBtnAction="showPhone()"/>
         <FooterButton  v-else  btnName="删除" @fBtnAction="showAlertConfirm()"/>
         <AlertConfirm  v-show="isShowAlertConfirm"  alertTitle="删除" alertContent="删除后，该信息将无法被老师所看到。" @cancelActive="AlertCancelActive" @confirmActive="AlertConfirmActive"/>
           <Prompt v-show="isPrompt"  :content="pContent" @actionPrompt="pAction()"/>
    </div>
   
</template>

<script>
import VHeader from '../components/Header.vue'
import FooterButton from '../components/FooterButton.vue'
import AlertConfirm from '../components/AlertConfirm.vue'
import MapBig from '../components/MapBig.vue'
import BottomPlay from '../components/BottomPlay.vue'
import Loading from '../components/Loading.vue'
import Prompt from '../components/Prompt.vue'
export default {
    name: 'recruitD',
    data() {
        return {
           isLoading:true,
           data:{},
           imgList:[],
           list: [],
           isError:false,
           imgUrl:api.imgUrl,
           isShowAlertConfirm:false,
           address:api.address,
           isMapBig:false,
           mapXY:{x:0,y:0},
           isJS:false,
           isShowbp:false,
           applClass:'',
           isPrompt:false,
           pContent:''
        }
    },
    created(){
     
       this.getData();
    },
    methods:{
    getData(){
     
      this.applClass=GetQueryString('applClass')?GetQueryString('applClass'):'';
      
    //   console.log(this.$route.query.type);
       this.$http.get(api.recruitD+this.$route.query.id)//this.$route.params.id
       .then(response=>{
          
          this.isLoading=false;
          let data=response.data;
          if(data.result!='success'){
             this.promptCommon('数据不存在');
             this.isError=true;
             return;
          }
          this.data=data.data[0];
          this.imgList=data.imgData;
          this.isError=false;
          if(!this.isLoading){
             this.mapXY={
                x:this.data.mapAxis,
                y:this.data.mapAyis
            }
             setTimeout(()=>{
                 this.showMap(this.data.mapAxis, this.data.mapAyis);
             },0)
          }
          
          
           data.imgData.map((item,index)=>{
              
              this.list.push({
                  src:this.imgUrl+item.lidFileuri,
                  w: document.body.clientWidth ,
                  h: document.body.clientHeight-88
              });
           });
           this.isJS=GetQueryString('pinfoId')==this.data.pinfoId?true:false;
            
          
       }).catch(error=>{
           console.log(error);
           this.isError=true;
          // this.isLoading=false;
       })
        },
    pay(){
        location.href=api.pay+"&feeClass=A&pinfoId="+GetQueryString('pinfoId')+"&msgId="+this.data.infoIds;
      },
        setDy(){
          return  this.data.titleClassname=='全职'?this.data.salaryClassname+"元/月":this.data.salaryClassname+"元/小时";
        },
       showPhone(){
            this.isShowbp=!this.isShowbp;
        },
        nrAction(){
              this.$router.push({path:'/recruitPost',query:{id:this.$route.query.id}});
        },
        showMapBig(){
        this.isMapBig=!this.isMapBig;
        },
     showMap(x,y){
        var map = new AMap.Map('map', {
        resizeEnable: false,
        center: [x, y],
        zoom: 13
      });
      var marker = new AMap.Marker({
        position: map.getCenter()
        });
        marker.setMap(map);
        },
      AlertCancelActive(){
         this.isShowAlertConfirm=false;
      },
     promptCommon(str){
      this.isPrompt=true;
       this.pContent=str;
    },
    pAction(){
   
     this.isPrompt=!this.isPrompt;
    },
      AlertConfirmActive(){
         
          this.$http.get(api.recruitDelete+this.$route.query.id)
          .then((response)=>{
               this.isShowAlertConfirm=false;
              console.log(JSON.stringify(response.data));
               if(response.data.result=='success'){
                  this.promptCommon('删除成功');
               }else{
                   this.promptCommon('删除失败');
               }
              
          });
        
      },
      showAlertConfirm(){
          if(this.$route.query.type){
               
          }else{
            this.isShowAlertConfirm=true;
          }
    
      }
    },
    components: {
        VHeader,
        FooterButton,
        AlertConfirm,
        MapBig,
        BottomPlay,
        Loading,
        Prompt
       
        
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";

.recruit-d {
    height: 100%;
    font-size: 14px;
     background:#fff;
    .recruit-d-content {
    // top: rem(100px);
    // bottom: rem(100px);
    // position: fixed;
    // overflow-y: scroll;
   
   padding: rem(100px) 0px;
    }
    .recruit-d-t {

        padding: 15px 0;
        display: flex;

        justify-content: center;
        flex-direction: row;


        .recruit-d-item {

            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            flex: 1;
            &:nth-of-type(1) {
                p {
                    width: rem(125px);
                    height: rem(60px);
                    line-height: rem(60px);
                    text-align: center;
                    background-color: rgba(0, 0, 0, 0.18);
                    border-radius: 4px;
                }
            }
            &:nth-of-type(2) {
                p {
                    margin-top: 10px;
                }
            }
            &:nth-of-type(3) {
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: flex-start;
                color: #f00;
            }
        }
        .avater-img {
            height: rem(150px);
            width: rem(150px);
            border-radius: 50%;
        }
    }
    .recruit-d-c {
       text-align:center;
        border-radius: 25px 25px 0 0;
      //  border-top: 1px solid #bbb;
        background: #edebe8;
    overflow: hidden;
        width:100%;
        h3 {
            padding: 10px 5px 15px 5px;
            margin: 0 rem(100px);
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            border-bottom: 1px solid #bbb;
        }
        .demand-keyword{
            display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            white-space:nowrap;
            li{
              background: #FFC800;
              padding: 3px 20px;
              margin: 10px;
              border-radius: 5px;
              border:1px solid #bbbbbb;
            }
        }
        .dy-box{
              text-align: center;
             
            p{
                margin:15px auto;
                &:nth-of-type(2){
                    font-size: 14px;
                    padding: 8px 0px;
                    width:rem(300px);
                    border:1px solid #bbbbbb;
                     background: #FFC800;
                      border-radius: 5px;
                }
            }
        }
        .nl-box{
         margin:0 25px;
         p{
             line-height: 20px;
         padding: 20px 10px;     
        border:1px solid #bbbbbb;
           background: #FFC800;
           border-radius: 5px;} 
        }.map-box{
            
            margin:20px rem(100px);
            border-top:1px solid #bbb;
            border-bottom:1px solid #bbb;
            font-size:16px;
              #map{
            margin:10px 0;
            height:rem(250px);
           }
           p{
               margin:15px 0;
           }
        }
        .imgs-box{
            margin:20px 0 15px 0;
            font-size: 16px;
            text-align: center;
        }
        .imgs-list{
             display: flex;
            justify-content: center;
            flex-direction: row;
            align-items: center;
            li{
                width: 33.33%;
                margin: 5px 10px;
                img{
                    height: 100%;
                    width:100%;
                }
            }
        }
    }
  
}

</style>