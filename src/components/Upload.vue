<template>
   <div class="uploads">

      <form :id="'upload_'+index" :ref="'upload_'+index" :name="'upload_'+index" method="post" enctype="multipart/form-data" v-for="(v,index)  in srcImgs"  :key="index">
         <div class="file-button">
             <img  :src="v.imgSrc"  v-show="v.imgSrc"/>

           
             <div class="file-btn" v-show="!v.imgSrc">
                  <span class="iconfont icon-add_x" ></span>
                  <p>选择图片</p>
               </div>
            <input type="file" name="filegCollImguri" id="filegCollImguri"  @change="changFile($event,index)"  accept="image/*" >
         </div>
      </form>
      

   </div>
 

</template>

<script>
export default {
  name: 'Upload',
  data () {
    return {
      srcImgs:[{imgSrc:''},{imgSrc:''},{imgSrc:''}],
    }
  },
  methods:{
   changFile(e,index){
      // let arr=this.srcImgs;
      // let refNameArr=[];
      // arr.pop();
      // arr.push(URL.createObjectURL(e.target.files[0]));
      // if(this.srcImgs.length<4)
      // arr.push(require('../assets/images/picIcon.png'));
      // this.srcImgs=arr;
      // for(let i=0;i<this.srcImgs.length;i++){
      //   refNameArr.push("upload_"+i);
      // }
       console.log(e);
        this.srcImgs[index].imgSrc=URL.createObjectURL(e.target.files[0]);
     
       this.$emit('uploadFile',['upload_0','upload_1','upload_2']);
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.uploads{
display:flex;
justify-content: space-between;
   form{
  position: relative;
  display: inline-block;
  width:30%;
  height:rem(160px);
  border-radius: 5px;
  background: #f0f0f0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, .117647), 0 1px 4px rgba(0, 0, 0, .117647);
  transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
  position:relative;

  .file-button{
      position:absolute;
      width:100%;
      height:100%;

      img,input{
       position:absolute;
      width:100%;
      height:100%;
       }
       .file-btn{
         text-align: center;
          position:absolute;
          top:50%;
          left:50%;
          transform: translate3d(-50%,-50%,0);
          p{
            padding: 5px 0;
            color: #bbb;
          }
       }
       input{
           opacity: 0;
       }
     }
   }
}
</style>