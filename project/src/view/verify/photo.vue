<template>
  <div>
    <Header></Header>
    <div class="mt bgc-w title">
      <span>上传身份证</span>
      <strong>(必填)</strong>
    </div>
    <div class="mb-20">
      <div class="id_info bgc-w">
        <label
          for="photo"
          class="photo"
          @change="handle"
        >
          <input
            type="file"
            id="photo"
            style="display:none"
          >
          <div class="signal">
            <i class="iconfont icon-tianjia"></i>
            <p>上传身份证正面</p>
          </div>
          <img
            :src="id_data.img_url"
            alt=""
          >
        </label>
        <!-- <img :src="imgUrl" alt="" class="img_box"> -->
      </div>
      <img
        src="./img/loading.svg"
        alt=""
        v-show="isShow"
        class="loading"
      >
      <ul class="user_box bgc-w">
        <li class="user_info">
          <span class="lable_info">姓名</span>
          <span class="info">{{id_data.name}}</span>
        </li>
        <li class="user_info">
          <span class="lable_info">身份证号</span>
          <span class="info">{{id_data.idcard}}</span>
        </li>
        <li class="user_info">
          <span class="lable_info">生日</span>
          <span class="info">{{birth}}</span>
        </li>
        <li class="user_info">
          <span class="lable_info">住址</span>
          <span class="info">{{id_data.addres}}</span>
        </li>
        <li class="user_info">
          <span class="lable_info">民族</span>
          <span class="info">{{id_data.nation}}</span>
        </li>
        <li class="user_info">
          <span class="lable_info">性别</span>
          <span class="info">{{id_data.sex}}</span>
        </li>
      </ul>
    </div>
    <Button
      @click.native="submit"
      :title="title"
    ></Button>
    <!-- <form action="http://api.qijiawr.com/config/config.php" method="post" id="form-xyy" enctype="multipart/form-data" @submit.prevent>
      <input type="file" id="image" name="image" />
      <button type="submit" @click="hclik">提交</button>
    </form> -->

  </div>
</template>

<script>
import Button from "../../components/Button";
import axios from "axios";
import { Toast } from "mint-ui";
var url;
export default {
  data() {
    return {
      imgUrl: "",
      title: "提交并审核",
      id_data: "",
      id_birth: "",
      isShow: false
    };
  },
  components: {
    Button
  },
  methods: {
    handle(e) {
      let file = e.target.files[0];
      let form = new FormData();
      form.append("image", file);
      console.log(form);
      this.isShow = true;
      axios
        .post("http://api.qijiawr.com/config/config.php", form, {
          timeout: 1500
        })
        .then(res => {
          this.isShow = false;
          console.log("hello", res.data);
          this.id_data = res.data;
          this.id_birth = res.data.birth;
          // console.log(" this.id_data", this.id_data);
          // console.log(this.id_data.img_url);
        })
        .catch(err => {
          console.log(err);
        });
      // console.log(111);
      // console.log(e.target.files[0]);
    },
    // hclik(e) {
    //   // console.log("res", e);
    // },

    submit() {
      // if (this.id_data) {
      this.$router.push("/index");
      // } else {
      // Toast("请先验证");
    }
    // }
  },
  computed: {
    birth: function() {
      let reg = /(\d{4})(\d{2})(\d{2})/g;
      return this.id_birth.replace(reg, "$1-$2-$3");

      // console.log(this.id_birth.replace(reg, "$1-$2-$3"));
    }
  },
  mounted() {
    this.$back();

  }
};
</script>

<style scoped lang = "scss">
.title {
  height: 0.3rem;
  font-size: 16px;
  line-height: 0.3rem;
  span {
    font-weight: 600;
    color: #333;
  }
  strong {
    color: #f00;
    font-weight: 500;
  }
}
.id_info {
  margin-top: 10px;
  margin-bottom: 10px;
  /* display: flex; */
  .photo {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 3.75;
    height: 2rem;
    /* border: 1px solid #f00; */
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
      width: 3rem;
      height: 1.8rem;
    }
  }
  .signal {
    /deep/ .icon-tianjia {
      font-size: 40px;
    }
    p {
      font-size: 20px;
    }
  }
  /* .img_box {
    border: 1px solid #ff0;
    flex: 1;
    height: 2rem;
  } */
}
.user_box {
  padding-left: 10px;
  .user_info {
    border-bottom: 1px solid #ddd;
    height: 0.4rem;
    line-height: 0.4rem;
    display: flex;
    justify-content: space-between;
    .lable_info {
      width: 0.8rem;
      font-size: 16px;
      font-weight: 600;
    }
    .info {
      flex: 1;
      font-size: 13px;
    }
  }
}
/* loading 样式 */
.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 1rem;
}
</style>
