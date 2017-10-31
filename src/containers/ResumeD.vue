<template>
    <div class="recruit-d"><!--iconRight="icon-bianji2"  @rightAction="nrAction"-->
        <VHeader :isSubPage="false"   title="详细" :isFixed="true" />
        <Loading v-show="isLoading" :loaderNumber=1 styleColor="rgb(125, 125, 125)"/>
        <div  v-show="!isLoading" class="recruit-d-content">
            <div class="recruit-d-t">
                <div class="recruit-d-item">
                    <p><span class="iconfont  icon-dizhi"></span><span style="font-size:16px;">{{data.pinfoIdea}}</span></p>
                </div>
                <div class="recruit-d-item">
                    <img :src="data.pinfoUri" class="avater-img">
                    <p class="top-panel-item-txt" style="white-space:nowrap;">
                        <span>{{data.pinfoPname}}</span>
                        <span class="iconfont icon-nan" style="color:#1e9ee6"></span>
                        <span>{{setAge(data.pinfoBirthday)}}</span>
                    </p>
                </div>
                <div class="recruit-d-item">
                    <p>{{data.titleClassname}} </p>
                  
                </div>
            </div>
            <div class="recruit-d-c">
                 <h2 class="recruit-title">简历</h2>
                 <div class="r-section">
                     <span>教学经验：</span>
                     <div class="r-section-item">
                         <span>{{data.teacherYear}}</span>
                       
                     </div>
                 </div>
                 <div class="r-section">
                     <span>毕业于：</span>
                     <div class="r-section-item">
                         <span>{{data.collName}}</span>
                     </div>
                 </div>
                  <div class="r-section">
                     <span>擅长：</span>
                     <div class="r-section-item">
                         <span v-if="data.titleExt1name!=''&&data.titleExt1name">{{data.titleExt1name}}</span>
                         <span v-if="data.titleExt2name!=''&&data.titleExt2name">{{data.titleExt2name}}</span>
                         <span v-if="data.titleExt3name!=''&&data.titleExt3name">{{data.titleExt3name}}</span>
                         <span v-if="data.titleExt4name!=''&&data.titleExt4name">{{data.titleExt4name}}</span>
                         <span v-if="data.titleExt5name!=''&&data.titleExt5name">{{data.titleExt5name}}</span>
                     </div>
                 </div>
                 <div class="nl-box">
                     <h3 class="section-title">个人简历</h3>
                     <p>{{data.pinfoNote}}</p>
                 </div>
                <div class="line3"></div>
                   <div class="nl-box">
                        <h3 class="section-title">艺术照</h3>
                        <ul class="imgs-list">
                          
                      <li v-for="(v,index) in list">
                       <img class="preview-img"  :src="v.src" height="100" @click="$preview.open(index, list)">

                         
                      </li>

                        </ul>
                    </div>
                   
               </div>
             
        </div>
         <BottomPlay  v-show="isShowbp"  :isPay="ispay" :phoneNumber="pinfoPhone" :msgId="rsmIds"/>
         <FooterButton  :btnName="applClass=='T'?'编辑':'与他联系'" bgFooterButton="#ff6b00" @fBtnAction="play"/>
    </div>
</template>

<script>
import VHeader from '../components/Header.vue'
import FooterButton from '../components/FooterButton.vue'
import Loading from '../components/Loading.vue'
import BottomPlay from '../components/BottomPlay.vue'
export default {
    name: 'redumeD',
    data() {
        return {
           isLoading:true,
           data:{},
           imgList:[],
            list: [],
           isError:false,
           imgUrl:api.imgUrl,
           isShowbp:false,
           ispay:true,
           pinfoPhone:'',
           rsmIds:0,
           applClass:''
        }
    },
    created(){
       this.applClass=GetQueryString('applClass')?GetQueryString('applClass'):'';
        let url="";
       if(this.$route.query.isP){
          url=api.presumeD+this.$route.query.id;
       }else{
           url=api.resumeD+this.$route.query.id+'&pinfoId='+GetQueryString('pinfoId');
       }
       this.$http.get(url)
       .then(response=>{
         let data=response.data;
         console.log(data);
          this.data=data.data[0];
          
          this.ispay=(data.ispay=='Y'?true:false);
          this.pinfoPhone=data.data[0].pinfoPhone;
          this.rsmIds=data.data[0].rsmIds;
          this.imgList=data.imgData;

          data.imgData.map((item,index)=>{
              
              this.list.push({
                  src:this.imgUrl+item.lidFileuri,
                  w: document.body.clientWidth ,
                  h: document.body.clientHeight-88
              });
           });
         this.isLoading=false;
          this.isError=false;
       }).catch(error=>{
          this.isError=true;
          
       })
    },

    methods:{
    setAge(date){
          return Math.abs(Number(new Date(date).getFullYear()) - Number(new Date().getFullYear())+1)+'岁';
      },
        play(){
           
            if(this.$route.query.isP){
          
               this.$router.push({path:'/resumePost',query:{id:this.$route.query.id,rsmIds:this.rsmIds}});
            }else{
               this.isShowbp=!this.isShowbp;
            }
           
        }
    },
    components: {
        VHeader,
        FooterButton,
        BottomPlay,
        Loading
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";

.recruit-d {
    height: 100%;
    font-size: 14px;
    
     background: #edebe8;
    .recruit-d-content {
         background:#ffc800;
      
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
                width: 100%;
                height: 100%;
                flex-direction: column;
                justify-content: flex-start;
                p {
                    font-size:18px;
                    color:#808080;
                    text-align: center;
                 }
            }
            &:nth-of-type(2) {
                p {
                    margin-top: 10px;
                }
            }
            &:nth-of-type(3) {
               font-size:18px;
               font-weight:bold;
               
            }
        }
        .avater-img {
            height: rem(150px);
            width: rem(150px);
            border-radius: 50%;
        }
    }
    .recruit-d-c {
          background: #edebe8;
        text-align:center;
        border-radius: 25px 25px 0 0;
      //  border-top: 1px solid #bbb;
       overflow: hidden;
        >h2{
          
            width:60%;
            height:rem(90px);
            text-alig:center;
            line-height:rem(90px);
            background:#727272;
            font-size:25px;
            font-weight:bold;
            color:#fff;
            margin:15px auto;
            border-radius:rem(90px)/2;
        }
        .r-section{
            width:90%;
            padding:15px 0;
            margin:0 auto;
            display: flex; 
           
            flex-direction: row;
            align-items: center;
            border-bottom:1px dotted #bbbbbb;
            text-align:center;
             >span{
                 
               width:80px;   
            }
          .r-section-item{
            display: flex; 
            flex-direction: row;
          
             flex-wrap:wrap;
             
               span{
                   padding:6px rem(35px);
                   border-radius:5px; 
                   background:#ffc800;
                    margin:5px;
                }
          }
        }
         .nl-box{
         padding:15px 25px;
         p{
             line-height: 20px;
         padding: 20px 10px;     
        border:1px solid #bbbbbb;
           background: #FFC800;
           border-radius: 5px;} 
        }
    }
        .section-title{
            padding:0px  0 10px 0;
            font-size:16px;
        }
        .line3{
           height:10px;background:#fff;border-top:1px solid #bbbbbb;border-bottom:1px solid #bbbbbb;
        }
     .imgs-list {
    
      display: flex;
       justify-content: center;;
      flex-direction: row;
      align-items: center;
      li {
        text-align: center;
          width: 33.33%;
         margin: 5px 10px;
        img {
            height: auto;
          width:100%;
        }
      }
    }
    
}
</style>