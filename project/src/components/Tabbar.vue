<template>
  <div class="bar-wraper">
    <router-link to="/index" class="a-cl">
      <div class="item" :class="$route.name=='index'?'active':''">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </div>
    </router-link>
    <router-link to="/list" class="a-cl" >
    <!-- @click.native = "handle" -->
      <div class="item" :class="$route.name=='list'?'active':''">
        <i class="iconfont icon-peixun"></i>
        <span>培训</span>
      </div>
    </router-link>
    <router-link to="/position" class="a-cl">
      <div class="item" :class="$route.name=='position'?'active':''">
        <i class="iconfont icon-zhiyeyong"></i>
        <span>职位</span>
      </div>
    </router-link>

     <router-link  tag="a" to = "/news" class="a-cl">
    <!-- /*@click.native="handle"*/ -->
      <div class="item" :class="$route.name=='newsList'?'active':''">
        <i class="iconfont icon-xinwen1"></i>
        <span>新闻</span>
      </div>
    </router-link>
     <router-link  tag="a" to = "/person" class="a-cl">
    <!-- /*@click.native="handle"*/ -->
      <div class="item" :class="$route.name=='person'?'active':''">
        <i class="iconfont icon-tianchongxing-"></i>
        <span>个人中心</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  methods:{
// handle(){
//   window.location.href = "https://www.wenjuan.com/s/uaeUBnZE/"
// }
  }
};
</script>
<style scoped lang = "scss">
.bar-wraper {
  box-sizing: border-box;
  height: 49px;
  /* border: 1px solid #f00; */
  display: flex;
  text-align: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background: url("../image/footer.png") no-repeat;
  a {
    box-sizing: border-box;
    flex: 1;
    color: #666;
    .item {
      display: flex;
      flex-direction: column;
      /deep/ .icon-shouye,
      .icon-peixun,
      .icon-zhiyeyong,
      .icon-xinwen1,
      .icon-tianchongxing-{
        margin-top: 7px;
        font-size: 18px;
      }
    }
  }
}
.active {
  color: #1a8cff;
}
</style>
