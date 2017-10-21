<template>
  <div class="kind-panel">
        <div class="kind-panel-nav-bar" >
           <span class="iconfont icon-fanhui2" @click="closeKp()"></span>
          <h2>{{sName}}</h2>
        </div>
      <div class="kinds"  v-for="(v,index) in sKinds">
         <h2>{{v.title}}</h2>
         <ul class="kind-panel-list">
           <li v-for="(sv,sindex) in  v.classData"  :class="{activeLi:sv.isSelect}" :key="sindex"  @click="selectKind(index,sindex)">{{sv.codeValue}}</li>
          </ul>
      </div>
    <Prompt v-show="isPrompt"  :content="pContent" @actionPrompt="pAction()"/>
  </div>
</template>
 
<script>
import  VHeader   from './Header.vue'
import Prompt from './Prompt.vue'
export default {
  name: 'KindPanel',
  props:{
    sKinds:{
       type:Array,
       required:true
    },
    sName:{
      type:String,
      required:true
    },
    selectIndex:{
      type:Number,
      required:true
    },
    selectSize:{
      type:Number,
      default:1
    }
   
  },


  updated(){
 let array=[];
     this.sKinds.map((item1,index1)=>{
             item1.classData.map((item2,idnex2)=>{
                if(item2.isSelect){
                  array.push({codeName:item2.codeName,codeValue:item2.codeValue}); 
                }
             })
       });
     this.selectArray=array;
  },
  data () {
    return {
     selectArray:[],
      pContent:'',
      isPrompt:false
    }
  },
  methods:{
     promptCommon(str){
       this.pAction();
       this.pContent=str;
    },
    pAction(){
     this.isPrompt=!this.isPrompt;
    },
  closeKp(){
    this.$emit('closePanel',this.selectArray);
  },
  selectKind(index,sindex){
    let array=[];
    console.log("size--->"+this.selectArray.length);
    if(this.selectArray.length>=this.selectSize&&this.selectIndex==1){
      if(!this.sKinds[index]['classData'][sindex]['isSelect']){
      //  this.promptCommon('最多选择'+this.selectSize+'个选项');
        }
      this.sKinds[index]['classData'][sindex]['isSelect']=false;
       return;
    }else{
    
      if(this.selectIndex!=1){
        this.sKinds[index]['classData'].map((item,index)=>{
          item.isSelect=false;
        });
      }
          
      
      this.sKinds[index]['classData'][sindex]['isSelect']=!this.sKinds[index]['classData'][sindex]['isSelect'];
         // this.selectArray.push(this.sKinds[index]['classData'][sindex]['ids']); 
       
    }
   
    this.sKinds.map((item1,index1)=>{
             item1.classData.map((item2,idnex2)=>{
                if(item2.isSelect){
                  array.push({codeName:item2.codeName,codeValue:item2.codeValue}); 
                }
             })
       });
     this.selectArray=array;
    
     console.log( this.selectArray);
    }
  },
  components:{
      VHeader,
      Prompt
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.kind-panel{
    position:fixed;
     top:0;//rem(100px)*2+rem(80px);
    width:100%;
    height:100%;
    background:#fff;
    border-top:1px solid  #bbb;
    z-index: 999999;
    overflow: hidden;
    overflow-y: scroll;

    .kinds{
       
        padding:10px 8px;
      h2{
        padding:5px 0;
        font-size:16px;
        font-weight: bold;
        padding: 0 5px;
      }
    }
    .kind-panel-nav-bar{
      height:rem(90px);
      line-height:rem(90px);
        padding:0 10px;
        position:relative;
      span{
          font-size:20px;
      }
      h2{
         position:absolute;
    left:50%;
    top:50%;
    transform:translate3d(-50%,-50%,0);
    font-size:16px;
     color: #101010;
      }
    }
    .kind-panel-list{
      font-size:16px;
      display:flex;
    
      flex-wrap:wrap;
     
     >li{
        
        border:1px solid  #bbb;
        border-radius:5px;
        padding:5px 15px;
        margin:5px;
        &.activeLi{
          background:#FFC800;
         
          border-color:#fff;
        }
     }
    }
}
</style>
