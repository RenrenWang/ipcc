<template>
    <div class="recruit-d">
        <VHeader :isSubPage="false" title="详细" :isFixed="true" />
        <div class="recruit-d-content">
            <div class="recruit-d-t">
                <div class="recruit-d-item">
                    <p><span class="iconfont  icon-dizhi"></span><span>杭州市</span></p>
                </div>
                <div class="recruit-d-item">
                    <img :src="imgUrl+data.pinfoUri" class="avater-img">
                    <p class="top-panel-item-txt">
                        <span>{{data.pinfoPname}}</span>
                        <span class="iconfont icon-nan" style="color:#1e9ee6"></span>
                        <span>{{data.pinfoAge}}岁</span>
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
                         <span v-if="data.titleExt1name!=''||data.titleExt1name">{{data.titleExt1name}}</span>
                         <span v-if="data.titleExt2name!=''||data.titleExt2name">{{data.titleExt2name}}</span>
                         <span v-if="data.titleExt3name!=''||data.titleExt3name">{{data.titleExt3name}}</span>
                         <span v-if="data.titleExt4name!=''||data.titleExt4name">{{data.titleExt4name}}</span>
                         <span v-if="data.titleExt5name!=''||data.titleExt5name">{{data.titleExt5name}}</span>
                     </div>
                 </div>
                 <div class="nl-box">
                     <h3 style="border:none;margin-bottom:15px;">个人简历</h3>
                     <p>{{data.pinfoNote}}</p>
                </div>
                <div style="height:10px;background:#fff;border-top:1px solid #bbbbbb;border-bottom:1px solid #bbbbbb;"></div>
                <div style="height:300px;"></div>
            </div>
        </div>
         <FooterButton  btnName="与他联系" bgFooterButton="#ff6b00"/>
    </div>
</template>

<script>
import VHeader from '../components/Header.vue'
import FooterButton from '../components/FooterButton.vue'

export default {
    name: 'redumeD',
    data() {
        return {
           data:{},
           imgList:[],
           isError:false,
           imgUrl:api.imgUrl
        }
    },
    mounted(){
  
       this.$http.get(api.resumeD+this.$route.params.id)
       .then(response=>{
         let data=response.data;
          this.data=data.data[0];
          this.imgList=data.imgData;
          this.isError=false;
       }).catch(error=>{
          this.isError=true;
       })
    },
    components: {
        VHeader,
        FooterButton
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
            height: rem(120px);
            width: rem(120px);
            border-radius: 50%;
        }
    }
    .recruit-d-c {
          background: #edebe8;
        text-align:center;
        border-radius: 25px 25px 0 0;
        border-top: 1px solid #bbb;
       
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
         margin:15px 25px;
         p{
             line-height: 20px;
         padding: 20px 10px;     
        border:1px solid #bbbbbb;
           background: #FFC800;
           border-radius: 5px;} 
        }
    }
}
</style>