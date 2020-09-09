<template>
  <div id="auth">
    <transition name="authToggle">
      <div class="login" v-if="loginPage" key="login">
        <header>欢迎登录优购</header>
        <van-image :src="require('../static/img/logo.png')" width="10em" />
        <div class="warp">
          <van-field v-model="loginData.userName" label="用户名" placeholder="请输入用户名"></van-field>
          <van-field v-model="loginData.password" label="密码" placeholder="请输入密码" type="password"></van-field>
          <van-button type="primary" @click="login">登录</van-button>
          <van-button type="info" class="last" @click="register">注册</van-button>
        </div>
      </div>
      <div class="register" v-else key="register">
        <header>欢迎注册优购</header>
        <van-image :src="require('../static/img/logo.png')" width="10em" />
        <div class="warp">
          <van-field v-model="registerData.userName" label="用户名" placeholder="请输入用户名"></van-field>
          <van-field v-model="registerData.password" label="密码" placeholder="请输入密码" type="password"></van-field>
          <van-field
            v-model="registerData.password2"
            label="密码验证"
            placeholder="再次输入密码"
            type="password"
          ></van-field>
          <van-button type="primary" @click="login">登录</van-button>
          <van-button type="info" class="last" @click="register">注册</van-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import config from "@/config/config.json";

export default {
  name: "auth",
  data() {
    return {
      loginData: {
        userName: "",
        password: "",
      },
      registerData: {
        userName: "",
        password: "",
        password2: "",
      },
      loginPage: true,
    };
  },
  methods: {
    login() {
      if (this.loginPage == false) {
        this.loginPage = true;
      } else {
        sessionStorage.setItem("userId", "admin");
        console.log("登录！");
      }
    },
    register() {
      if (this.loginPage == true) {
        this.loginPage = false;
      } else {
        console.log("注册！");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#auth {
  .login {
    header {
      text-align: center;
      font-size: 2em;
    }
    .van-image {
      margin: 0 auto;
      display: block;
      margin-top: 2em;
    }
    .warp {
      width: 80%;
      margin: 0 auto;
      .van-field {
        margin-top: 15px;
        background-color: rgb(247, 248, 250);
      }
      .van-button {
        margin-top: 15px;
      }
      .last {
        float: right;
      }
    }
  }
  .register {
    header {
      text-align: center;
      font-size: 2em;
    }
    .van-image {
      margin: 0 auto;
      display: block;
      margin-top: 2em;
    }
    .warp {
      width: 80%;
      margin: 0 auto;
      .van-field {
        margin-top: 15px;
        background-color: rgb(247, 248, 250);
      }
      .van-button {
        margin-top: 15px;
      }
      .last {
        float: right;
      }
    }
  }
  .authToggle-enter {
    transform: translateY(30px);
    opacity: 0;
  }
  .authToggle-enter-active {
    transition: all 0.3s ease-in;
  }
}
</style>