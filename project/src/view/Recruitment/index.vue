<template>
  <div>
    <!-- 头部 -->
    <!-- <Header></Header> -->
    <div class="mb recruit">
      <mt-search v-model="value"></mt-search>
      <div class="boo">
        <mt-navbar v-model="selected">
          <mt-tab-item id="1">育儿</mt-tab-item>
          <mt-tab-item id="2">保安</mt-tab-item>
          <mt-tab-item id="3">月嫂</mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
          <mt-tab-container-item id="1">
            <mt-cell v-for="(item,index) in tabData" :key = "index"  :title="item" />
          </mt-tab-container-item>
          <mt-tab-container-item id="2">
            <mt-cell  :title="'测试 ' + 2" />
          </mt-tab-container-item>
          <mt-tab-container-item id="3">
            <mt-cell  :title="'选项 ' + 3" />
          </mt-tab-container-item>
        </mt-tab-container>
      </div>
    </div>
    <!-- 底部 -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      selected: "1",
      tabData:[
        "1232323",
         "1232323",
          "1232323"
      ]
    };
  },
   mounted(){
      // this.$back()
  }
};
</script>

<style scoped lang = "scss">
.recruit {
  /deep/ .mint-searchbar {
    background: #f44336;
  }
  /deep/ .mint-searchbar-cancel {
    color: #fff;
  }
  /deep/ .mint-search {
    height: 100%;
  }
  .boo {
    height: 2rem;
    margin-top: 4px;
    border: 1px solid #ff0;
  }
}
</style>
