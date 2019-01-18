<template>
  <div class="head">
  <mt-header :fixed=true :title="title">
        <mt-button icon="back" @click="back" slot="left">返回</mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  methods:{
back(){
  this.$router.history.go(-1)
}
  },
  computed:{
    title(){
    return this.$route.meta.title;
    }
  }
};
</script>

<style scoped lang = "scss">
.head {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 99;
  height: 46px;
  /deep/ .mint-header {
    background-color: #409eff;
    height: 46px;
  }
}
</style>
