<template>
  <div class="login_wraper">
    <h1 class="log_in">登录</h1>
    <div class="log_box">
      <mt-field
        label="用户名"
        placeholder="请输入用户名"
        v-model="username"
        :state="status"
      ></mt-field>
      <mt-field
        label="密码"
        placeholder="请输入密码"
        :type="pastype"
        v-model="password"
        :state="status"
        @blur.native.capture="hanlde"
      >
      </mt-field>
      <p
        @click="toggle"
        class="show color-6"
      >显示密码</p>
      <Button
        @click.native="verify"
        :title="title"
      ></Button>
    </div>
  </div>
</template>

<script>
import Button from "../../components/Button";
import { Toast } from "mint-ui";
export default {
  components: {
    Button
  },
  data() {
    return {
      username: "",
      password: "",
      title: "登录",
      pastype: "password",
      status: ""
    };
  },
  methods: {
    verify() {
      // if (this.username) {
      //   if (this.username == "test") {
      //     if (this.password == "123456") {
      //       setTimeout(() => {
      //         this.$router.push("/photo");
      //       }, 1000);
      //     } else {
      //       Toast({
      //         message: "密码不正确",
      //         position: "top",
      //         duration: 1000
      //       });
      //     }
      //   } else {
      //     Toast({
      //       message: "用户名不存在",
      //       position: "top",
      //       duration: 1000
      //     });
      //   }
      // } else {
      //   Toast({
      //     message: "请输入合格的用户名和密码",
      //     position: "top",
      //     duration: 1000
      //   });
      // }
      if (this.username && this.password) {
        setTimeout(() => {
          this.$router.push("/photo");
        }, 1000);
      } else {
        Toast({
          message: "请输入合格的用户名和密码",
          position: "top",
          duration: 1000
        });
      }
    },
    hanlde() {
      if (this.password == "123456") {
        this.status = "success";
      }
    },
    toggle() {
      if (this.pastype == "password") {
        this.pastype = "text";
      } else {
        this.pastype = "password";
      }
    }
  }
  // mounted() {
  //   this.$back();
  // }
};
</script>

<style >
.mint-cell-wrapper {
  border: none;
}
</style>

<style scoped lang = "scss">
.login_wraper {
  height: 100vh;
  /* height: 100%; */
  padding: 20px;
  box-sizing: border-box;
  background: url("../../image/login.jpg") no-repeat;
  background-size: 100% 100%;
  .log_in {
    text-align: center;
    color: #1a8cff;
    font-weight: 500;
    /* margin-bottom: 20px; */
  }
  .log_box {
    margin-top: 120px;
    .show {
      padding-top: 12px;
      border-top: 1px solid #d9d9d9;
      text-align: center;
      margin-bottom: 20px;
      font-size: 14px;
    }
  }
  /* /deep/ .icon-z{
position: fixed;
right: 0;
top: 0;
  } */
}
</style>
