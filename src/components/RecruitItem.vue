<template> 
  <li class="recruit-item" >
       <router-link  class="recruit-item-t" :to="{name:'RecruitD',params: { id:rData.infoIds}}"  tag="div">
           <div class="recruit-item-tt">
           <h3 class="recruit-item-title">{{rData.infoTitle}}</h3>
           <span class="timing">倒计时{{rData.timeDays}}天</span>
       </div>
       <p class="recruit-item-text">要求：{{rData.titleDesc}}</p>
       <div class="demand-keyword">
          <div class="demand-keyword-l">
            <span class="jqz">{{rData.titleClassname}}</span>
             <p class="sex" v-if="rData.pinfoSex=='男'"><span class="iconfont  icon-nan"></span></p>
             <p class="sex" v-if="rData.pinfoSex=='女'"><span class="iconfont  icon-nv"></span></p>
           
          </div>
          <div class="needs">
             <span class="need-item" v-if="rData.titleExt1name&&rData.titleExt1name!=''">{{rData.titleExt1name}}</span>
             <!--<span class="need-item" v-if="rData.titleExt2name&&rData.titleExt2name!=''">{{rData.titleExt2name}}</span>
             <span class="need-item" v-if="rData.titleExt3name&&rData.titleExt3name!=''">{{rData.titleExt3name}}</span>
             <span class="need-item" v-if="rData.titleExt4name&&rData.titleExt4name!=''">{{rData.titleExt4name}}</span>
             <span class="need-item" v-if="rData.titleExt5name&&rData.titleExt5name!=''">{{rData.titleExt5name}}</span>-->
          </div>
          <p class="rmb">薪资：{{rData.salaryClassname}}</p>
        </div>
          
       </router-link>
       <div class="recruit-item-b">
             <div class="recruit-item-b-l">
                <img :src="imgUrl+rData.pinfoUri" class="recruit-item-avater"/>
                <span>{{rData.pinfoPname}}</span>
             </div>
            <span class="iconfont icon-shanchu" @click="deleteItem" v-if="!isAll"></span>
            <p  v-if="isAll"><span >查看详情</span><span class="iconfont icon-xiangyou" ></span></p>
       </div>
  </li >
</template>

<script>
export default {
  name: 'recruitItem',
  props:{
      isAll:{
       type:Boolean,
       default:false
      },
      rData:{
       type:Object
      },
      selectIndex:{
       type:Number
      }
  },
  data () {
    return {
       imgUrl:api.imgUrl
    }
  },
  methods:{
    deleteItem(){
       this.$emit('deleteItem',[this.rData.infoIds,this.selectIndex]);  
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.recruit-item{
    margin:10px 0;
    border-radius:6px;
    padding:8px 10px 5px 10px;
    font-size:14px;
    background:#fff;

    .recruit-item-tt{
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        .recruit-item-title{
           font-size:18px;
           font-weight: bold;
           font-style: normal;
        }
        .timing{
            font-size:14px;
            color:#727272;
        }
    }
   
    .recruit-item-text{
       margin:10px  0;
       color:#050501;
    }
    .demand-keyword{
        padding: 5px 0;
        display:flex;
        flex-direction:row;
        justify-content:space-between;
        align-items:center;
        border-bottom:1px solid #bbbbbb;
        .jqz{
            width:35px;
            text-align: center;
        }
        .needs{
             display:flex;
        flex-direction:row;
       
        flex-wrap:wrap;
        
            .need-item{
                font-size:12px;
                        display:inline-block;
                        width:75px;
                        border:1px  solid  #bbbbbb;
                        border-radius:5px; 
                        text-align:center;
                        padding:3px 0;
                        margin-left:5px;
                        white-space:nowrap;
                        text-overflow:ellipsis;
                        overflow:hidden;
            }
        }
            
       .demand-keyword-l{
         display:flex;
         flex-direction:row;
         align-items:center;
         .sex{
             background:#a7c7f0;
             color:#fff;
             border-radius:5px;
             width:26px;
             
             text-align:center;
           }
       
         }
        .rmb{
            flex:1;
            font-weight:bold;
            font-size:16px;
            color:#FFAF45;
            text-align: right;
        }
    }
    .recruit-item-b{
        padding:5px 0;
       display:flex;
        flex-direction:row;
        justify-content:space-between;
         align-items:center;
      .recruit-item-b-l{
          display:flex;
        flex-direction:row;
        justify-content:center;  
        align-items:center;
       
        .recruit-item-avater{
            margin-right:10px;
        height:rem(80px);
        width:rem(80px);
        border-radius:50%;
        border:2px  solid #bbbbbb;
        }
      }
      .icon-shanchu{
          font-size:25px;
          color:#444444;
      }
    }
    
}
</style>