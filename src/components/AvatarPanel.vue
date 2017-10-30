<template>
  <div class="avatar-panel">
    <div class="bg"></div>
      <form id="upload_avatar"    name="upload_avatar" method="post" enctype="multipart/form-data" >
         <div class="file-button">
             <img  :src="imgSrc"  v-show="imgSrc"/>

           
             <div class="file-btn" v-show="!imgSrc">
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
  name: 'AvatarPanel',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.avatar-panel{
 .upload_avatar{
  width:80%;
  height: rem(200px);
  background: #fff;
  }
}

</style>