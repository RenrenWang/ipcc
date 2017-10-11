<template>
 <router-link class="resume-item" :to="{name:'ResumeD', params: { id: resume.rsmIds}}" tag="li">
  
    <div class="resume-item-top">
         <img :src="imgUrl+resume.pinfoUri" class="resume-item-top-img" alt="头像"/> 
         <div class="resume-item-top-text">
              <div class="resume-item-top-text-t">
                   <p class="name-info">
                       <span style="font-size:16px;font-weight:bold;">{{resume.pinfoPname}}</span>
                       <span  v-if="resume.pinfoSex=='男'" class="iconfont  icon-nan"  style="color:rgb(30, 158, 230)"></span>
                       <span  v-if="resume.pinfoSex=='女'" class="iconfont  icon-nv"  style="color:rgb(30, 158, 230)"></span>
                       <span>{{resume.pinfoAge}}岁</span>
                   </p>
                   <span style="font-size:16px;font-weight:bold;">{{resume.titleClassname}}</span>
              </div>
              <div class="resume-item-top-text-b">
                    <span>教学经验：{{resume.teacherYear}}</span>
                    <span>{{resume.collName}}</span>
              </div>
         </div> 
    </div>
    <p class="resume-item-bottom">
        擅长：{{resume.titleExt1name?resume.titleExt1name+'、':''}}{{resume.titleExt2name?resume.titleExt2name+'、':''}}{{resume.titleExt3name?resume.titleExt3name+'、':''}}{{resume.titleExt4name?resume.titleExt4name+'、':''}}{{resume.titleExt5name?resume.titleExt5name+'、':''}}
    </p>
 </router-link>
</template>

<script>
export default {
  name: 'ResumeItem',
  props:{
    resume:{
         required: true
    }
  },
  data () {
    return {
      imgUrl:api.imgUrl
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.resume-item{
    margin:10px 0;
    background-color: #f2f2f2;
    padding:10px;
    font-size:14px;
    border:1px solid #bbbbbb;
    border-radius:10px;
  .resume-item-top{
    display:flex;
    border-bottom:1px solid #bbbbbb;
    padding-bottom:15px;
    .resume-item-top-img{
        height:rem(140px);
        width:rem(140px);
        border-radius:50%;
        box-shadow: 0px 0px 10px #eeda90;
    }
    .resume-item-top-text{
        margin-left:15px;
         flex:1;
        
         
         .iconfont{
             font-size:18px;
         }
         .resume-item-top-text-t{
          .name-info{
             padding-right:rem(100px);
             padding-bottom:15px;
             border-bottom:1px solid #bbbbbb;
          }
          flex-direction: row;
          display:flex;
          align-items:center;  
          justify-content:space-between;
        }
        .resume-item-top-text-b{
           margin-top:10px;
          display:flex;
          align-items:center;  
          justify-content:space-between;


          span{

           
               margin:0 5px;
              padding:5px 2px;
              background:#ffc800;
            
              border-radius:5px;
          }

             @media screen and (max-width:320px) {
                    span {
                        font-size:.85em;
                    }
            }
        }
    }
  }
  .resume-item-bottom{
      padding-top:5px;
      text-align:center;
  }
}
</style>
