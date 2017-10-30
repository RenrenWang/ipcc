<template>
      <div  class="footer-button">
          <div class="item-buttom" @click="btnAction()" :style="{background:bgFooterButton}">
              {{btnName}}
          </div>
           <!-- <div class="item-buttom" @click="btnAction()" :style="{background:bgFooterButton}">
              {{btnName}}
          </div> -->
      </div>
</template>

<script>
export default {
  name: 'footerBsutton',
  props: {
    "btnName": {
      type: String,
      required: true
       
    },
    "fBtnAction":{
       type: Object
    },
    "bgFooterButton":{
        type: String
    }
  },
  data() {
    return {

    }
  },
  methods:{
    btnAction(){
       this.$emit('fBtnAction');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/style/base.scss";
.footer-button {

  position: fixed;
  bottom: 0px;
  font-weight: bold;
  font-size: 18px;
  height: rem(100px);
  width: 100%;
 
  text-align: center;
  line-height: rem(100px);
  z-index:998;
  display: flex;
  .item-buttom{
    flex: 1;
    background: #ffc800;
  }
}
</style>