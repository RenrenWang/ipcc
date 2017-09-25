<template>
  <div class="footer-button">
    {{btnName}}
  </div>
</template>

<script>
export default {
  name: 'footerBsutton',
  props: {
    "btnName": {
      required: true
    }
  },
  data() {
    return {

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
  background: #ffc800;
  text-align: center;
  line-height: rem(100px);
}
</style>