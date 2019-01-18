<template>
  <div>
    <header class="head bgc-w font-16">个人中心</header>
    <div class="user_info bgc-w mt">
      <div class="avatar"><img src="../../image/user.png" alt=""></div>
      <div class="details">
        <div class="name">管理员</div>
        <div class="address color-6">
          <span>北京市</span> |
          <span>朝阳区</span> |
          <span>30岁</span>
        </div>
      </div>
      <div class="cash">
        <p class="balance">3.23元</p>
        <p class="color-6">现金金额</p>
      </div>
    </div>
    <!-- <div class="phone">
        <i class="iconfont icon-shouji"></i>
        <span>1233444</span>
      </div> -->
    <!-- <div class="email">
        <i class="iconfont icon-youxiang"></i>
        <span>1233444@qq.com</span>
      </div> -->
    <!-- 证明 -->
    <div class="table bgc-w">
      <div class="cell_wrap">
        <router-link to="/person" class="table_cell ">
          <img src="../../image/withdraw.png" alt="">
          <span>提现兑现</span>
        </router-link>
        <router-link to="/person" class="table_cell">
          <img src="../../image/wallet.png" alt="">
          <span>收入记录</span>
        </router-link>
        <router-link to="/person" class="table_cell">
          <img src="../../image/inviting.png" alt="">
          <span>邀请好友</span>
        </router-link>
        <router-link to="/person" class="table_cell">
          <img src="../../image/packet.png" alt="">
          <span>领取红包</span>
        </router-link>
      </div>
    </div>
    <!--  -->
    <ul class="personal mb">
       <li class="bgc-w">
        <router-link to="/info">
          <div>
            <i class="iconfont icon-gukeliebiao"></i>
            <span class="margin-l">人员列表</span>
          </div>
          <i class="iconfont icon-wendangguanlixitong-fanhuitubiao"></i>
        </router-link>
      </li>
      <li class="bgc-w">
        <router-link to="/person">
          <div>
            <i class="iconfont icon-bianjixinxihei"></i>
            <span class="margin-l">信息完善</span>
          </div>
          <i class="iconfont icon-wendangguanlixitong-fanhuitubiao"></i>
        </router-link>
      </li>
      <li class="bgc-w">
        <router-link to="/person">
          <div>
            <i class="iconfont icon-tubiao-1"></i>
            <span class="margin-l">贫困证明</span>
          </div>
          <i class="iconfont icon-wendangguanlixitong-fanhuitubiao"></i>
        </router-link>
      </li>
      <li class="bgc-w">
        <router-link to="/person">
          <div>
            <i class="iconfont icon-shoucang2"></i>
            <span class="margin-l">我的收藏</span>
          </div>
          <i class="iconfont icon-wendangguanlixitong-fanhuitubiao"></i>
        </router-link>
      </li>
      <li class="bgc-w">
        <router-link to="/person">
          <div>
            <i class="iconfont icon-gongdan1"></i>
            <span class="margin-l">我的工单</span>
          </div>
          <i class="iconfont icon-wendangguanlixitong-fanhuitubiao"></i>
        </router-link>
      </li>
      <li class="bgc-w">
        <router-link to="/person">
          <div>
            <i class="iconfont icon-shishizixun"></i>
            <span class="margin-l">我的简历</span>
          </div>
          <i class="iconfont icon-wendangguanlixitong-fanhuitubiao"></i>
        </router-link>
      </li>
      <li class="bgc-w">
        <router-link to="/person">
          <div>
            <i class="iconfont icon-shezhi1"></i>
            <span class="margin-l">设置</span>
          </div>
          <i class="iconfont icon-wendangguanlixitong-fanhuitubiao"></i>
        </router-link>
      </li>
      <li class="bgc-w">
        <router-link to="/person">
          <div>
            <i class="iconfont icon-guanyu"></i>
            <span class="margin-l">意见反馈</span>
          </div>
          <i class="iconfont icon-wendangguanlixitong-fanhuitubiao"></i>
        </router-link>
      </li>
      <!-- <li class="bgc-w">
        <router-link to="/person">
          <div>
            <i class="iconfont icon--laobantuijian"></i>
            <span class="margin-l">推荐好友</span>
          </div>

          <i class="iconfont icon-wendangguanlixitong-fanhuitubiao"></i>
        </router-link>
      </li> -->
      <!-- <li class="bgc-w">
        <router-link to="/person">
          <div>
            <i class="iconfont icon-guanyu"></i>
            <span class="margin-l">关于</span>
          </div>

          <i class="iconfont icon-wendangguanlixitong-fanhuitubiao"></i>
        </router-link>
      </li> -->
    </ul>
    <Tabbar></Tabbar>
  </div>
</template>
<script>
import tab from "../../utils/tabbar.js";
export default {
  methods: {
    // changeColor() {
    //   let items = Array.from(document.getElementsByClassName("table_cell"));
    //   // console.log(items);
    //   tab(items);
    // }
  },
   mounted(){
      // this.$back()
  }
};
</script>

<style scoped lang = "scss">
.head {
  height: 46px;
  text-align: center;
  line-height: 46px;
  /* margin-bottom: 4px; */
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
.user_info {
  display: flex;
  height: 1rem;
  box-sizing: border-box;
  padding: 20px;
  /* border: 1px solid #f00; */
  /* margin: auto; */
  .avatar {
    width: 0.7rem;
    img {
      width: 100%;
      border-radius: 50%;
    }
  }
  .details {
    margin-left: 16px;
  }
  .cash {
    margin-left: 30px;
  }
  .details,
  .cash {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 14px;
  }
  .details .name,
  .cash .balance {
    margin-bottom: 10px;
  }
  .balance{
        font-weight: 700;
  }
}
.table {
  margin: 1px 0;
  padding: 10px;
  .cell_wrap {
    display: flex;
    justify-content: space-around;
    /* border: 1px solid #ddd; */
    border-radius: 4px;
    box-shadow: 2px 2px 18px #ddd;
  }
  .table_cell {
    height: 0.8rem;
    /* border: 1px solid #000000; */
    color: #333;
    display: flex;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    img {
      display: block;
      width: 0.3rem;
      margin: 0 auto;
    }
  }
  /* /deep/ .icon-baomingchenggong,
  .icon-gongdan,
  .icon-hongbao-,
  .icon-recruit {
    font-size: 30px;
  } */
}
.personal {
  li {
    /* border: 1px solid #ff00ff; */
    height: 0.5rem;
    font-size: 14px;
    line-height: 0.5rem;
    margin-top: 4px;
    padding: 0 20px;
    a {
      color: #000;
      display: flex;
      justify-content: space-between;
    }
    .margin-l {
      margin-left: 14px;
    }
  }
  /* /deep/ .icon-bianjixinxihei,
  .icon-wendangguanlixitong-fanhuitubiao,
  .icon-shezhi1,
  .icon--laobantuijian,
  .icon-guanyu {
    font-size: 20px;
  } */
  /* icon 重置样式 */
  /deep/ .icon-gukeliebiao,
  .icon-bianjixinxihei,
  .icon-shoucang2,
  .icon-tubiao-1 {
    color: #f47624;
    font-size: 18px;
  }
  /deep/ .icon-gongdan1,
  .icon-shishizixun {
    color: #fdc21d;
    font-size: 18px;
  }
  /deep/ .icon-shezhi1,
  .icon-guanyu {
    color: #448ff4;
    font-size: 18px;
  }
}
</style>
