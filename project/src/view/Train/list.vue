<template>
  <div class="train_wraper">
    <header class="head bgc-w font-16">
    培训分类
    </header>
    <div class="main mt mb bgc-w">
      <mt-navbar
        v-model="selected"
        class="nav_selected"
      >
        <mt-tab-item id="1">母婴</mt-tab-item>
        <mt-tab-item id="2">养老</mt-tab-item>
        <mt-tab-item id="3">家政</mt-tab-item>
        <mt-tab-item id="4">保洁</mt-tab-item>
        <mt-tab-item id="5">提升</mt-tab-item>
        <mt-tab-item id="6">一般家务</mt-tab-item>
        <mt-tab-item id="7">分院展示</mt-tab-item>
      </mt-navbar>

      <!-- tab-container -->
      <mt-tab-container
        v-model="selected"
        class=""
      >
        <mt-tab-container-item id="1">
          <img
            src="../../image/banner.jpg"
            alt=""
            class="logo"
          >
          <span
            class="catagory"
            v-for="(item,index) in train1"
            :key="index"
            @click="$router.push('/train')"
          >{{item.name}}</span>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <img
            src="../../image/banner.jpg"
            alt=""
            class="logo"
          >
          <span
            class="catagory"
            v-for="(item,index) in train2"
            :key="index"
            @click="$router.push('/train')"
          >{{item.name}}</span>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <img
            src="../../image/banner.jpg"
            alt=""
            class="logo"
          >
          <span
            class="catagory"
            v-for="(item,index) in train3"
            :key="index"
            @click="$router.push('/train')"
          >{{item.name}}</span>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <img
            src="../../image/banner.jpg"
            alt=""
            class="logo"
          >
          <span
            class="catagory"
            v-for="(item,index) in train4"
            :key="index"
            @click="$router.push('/train')"
          >{{item.name}}</span>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <img
            src="../../image/banner.jpg"
            alt=""
            class="logo"
          >
          <span
            class="catagory"
            v-for="(item,index) in train5"
            :key="index"
            @click="$router.push('/train')"
          >{{item.name}}</span>
        </mt-tab-container-item>
        <mt-tab-container-item id="6">
          <img
            src="../../image/banner.jpg"
            alt=""
            class="logo"
          >
          <span
            class="catagory"
            v-for="(item,index) in train6"
            :key="index"
            @click="$router.push('/train')"
          >{{item.name}}</span>
        </mt-tab-container-item>
        <mt-tab-container-item id="7">
          <img
            src="../../image/banner.jpg"
            alt=""
            class="logo"
          >
          <span
            class="catagory"
            v-for="(item,index) in train7"
            :key="index"
            @click="$router.push('/train')"
          >{{item.name}}</span>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
    <Tabbar></Tabbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      selected: "1",
      train1: [],
      train2: [],
      train3: [],
      train4: [],
      train5: [],
      train6: [],
      train7: []
    };
  },
  methods: {
    getTrain1() {
      axios.get("/train1").then(res => {
        console.log(res.data.data);
        this.train1 = res.data.data;
      });
    },
    getTrain2() {
      axios.get("/train2").then(res => {
        console.log(res.data.data);
        this.train2 = res.data.data;
      });
    },
    getTrain3() {
      axios.get("/train3").then(res => {
        console.log(res.data.data);
        this.train3 = res.data.data;
      });
    },
    getTrain4() {
      axios.get("/train4").then(res => {
        console.log(res.data.data);
        this.train4 = res.data.data;
      });
    },
    getTrain5() {
      axios.get("/train5").then(res => {
        console.log(res.data.data);
        this.train5 = res.data.data;
      });
    },
    getTrain6() {
      axios.get("/train6").then(res => {
        console.log(res.data.data);
        this.train6 = res.data.data;
      });
    },
    getTrain7() {
      axios.get("/train7").then(res => {
        console.log(res.data.data);
        this.train7 = res.data.data;
      });
    }
  },
  created() {
    this.getTrain1();
    this.getTrain2();
    this.getTrain3();
    this.getTrain4();
    this.getTrain5();
    this.getTrain6();
    this.getTrain7();
  }
};
</script>

<style>
.nav_selected .mint-tab-item.is-selected {
  border: none;
  border-left: 1px solid #26a2ff;
}
</style>
<style scoped lang = "scss">
.train_wraper {
  .main {
    display: flex;
    height: 100vh;
    .logo {
      width: 2.6rem;
      display: block;
      margin-left: 4px;
      margin-bottom: 10px;
    }
    .catagory {
      display: inline-block;
      width: 0.8rem;
      height: 0.4rem;
      border: 1px solid #eee;
      margin-left: 2px;
      border-radius: 4px;
      font-size: 14px;
      line-height: 0.4rem;
      color: #777;
      text-align: center;
    }
    /deep/ .mint-tab-item-label {
      font-size: 14px;
    }
    /deep/ .mint-tab-item {
      flex: none;
    }
    /deep/ .mint-tab-container-item {
      margin-top: 0.3rem;
    }
  }
  .mint-navbar {
    flex-direction: column;
    width: 100px;
  }
}
.head {
  height: 46px;
  text-align: center;
  line-height: 46px;
  /* margin-bottom: 4px; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

}
</style>
