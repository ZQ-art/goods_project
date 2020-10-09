<template>
  <div id="auth">
    <transition :name="leftOrRight">
      <div class="login" v-if="loginPage" key="login">
        <header>优购 Goods</header>
        <p>为您提供最优质的购物体验！</p>
        <div class="warp">
          <van-field
            v-model="loginData.userName"
            label="用户名"
            placeholder="请输入用户名"
          ></van-field>
          <van-field
            v-model="loginData.password"
            label="密码"
            placeholder="请输入密码"
            type="password"
          ></van-field>
          <van-button
            type="primary"
            class="first"
            color="linear-gradient(to right, #4bb0ff, #6149f6)"
            size="large"
            @click="login"
            >登录</van-button
          >
          <a class="last" size="small" @click="register">立即注册>></a>
        </div>
      </div>
      <div class="register" v-else key="register">
        <header>优购 Goods</header>
        <p>注册优购 畅享生活</p>
        <div class="warp">
          <van-field
            v-model="registerData.userName"
            label="用户名"
            placeholder="请输入用户名"
          ></van-field>
          <van-field
            v-model="registerData.password"
            label="密码"
            placeholder="请输入密码"
            type="password"
            @change="checkPasswordFunction"
          ></van-field>
          <van-field
            v-model="registerData.passwordVertify"
            label="密码验证"
            placeholder="再次输入密码"
            type="password"
            :error="checkPassword.flag"
            @change="checkPasswordFunction"
            :error-message="checkPassword.message"
          ></van-field>
          <van-field
            v-model="registerData.phoneNumber"
            label="手机号"
            placeholder="请输入手机号"
          ></van-field>
          <van-row>
            <van-col :span="18">
              <van-field
                v-model="vertify.input"
                label="验证码"
                placeholder="请输入验证码"
                @change="checkVertify"
                :error="vertify.flag"
                :error-message="vertify.message"
              ></van-field>
            </van-col>
            <van-col :span="6">
              <van-button
                class="sendVertify"
                type="primary"
                @click="requestVertify"
                :loading="vertify.waiting"
                color="linear-gradient(to right, #4bb0ff, #6149f6)"
                >发送验证码</van-button
              >
            </van-col>
          </van-row>
          <van-button
            type="info"
            class="first"
            size="large"
            color="linear-gradient(to right, #4bb0ff, #6149f6)"
            @click="register"
            >注册</van-button
          >
          <a class="last" size="small" @click="login"
            >&lt;&lt;已有账号，立即登录</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import config from "@/config/config.json";
import authApi from "@/api/auth.js";

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
        passwordVertify: "",
        phoneNumber: "",
      },
      loginPage: true,
      checkPassword: {
        flag: false,
        message: "",
      },
      vertify: {
        result: "",
        input: "",
        flag: false,
        mesage: "",
        waiting: false,
      },
    };
  },
  methods: {
    login() {
      if (this.loginPage == false) {
        this.loginPage = true;
      } else {
        if (this.checkValue(this.loginData)) {
          authApi.loginApi(this.loginData, this);
        }
      }
    },
    register() {
      if (this.loginPage == true) {
        this.loginPage = false;
      } else {
        if (this.checkPassword.flag) {
          this.$notify({
            type: "warning",
            message: "两次密码不一致",
            duration: 1500,
          });
          return;
        } else if (this.vertify.flag) {
          this.$notify({
            type: "warning",
            message: "验证码错误",
            duration: 1500,
          });
          return;
        }
        if (this.checkValue(this.registerData)) {
          authApi.registerApi(this.registerData, this);
        }
      }
    },
    //检查注册时二次密码是否一致
    checkPasswordFunction() {
      if (this.registerData.password === this.registerData.passwordVertify) {
        this.checkPassword.flag = false;
        this.checkPassword.message = "";
      } else {
        this.checkPassword.flag = true;
        this.checkPassword.message = "两次密码不一致";
      }
    },
    //检查是否存在漏填项
    checkValue(obj) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] == "") {
            this.$notify({
              type: "warning",
              message: "有漏填项！",
              duration: 1500,
            });
            return false;
          }
        }
      }
      return true;
    },
    //登录或者注册完成后清空数据
    clearValue(obj) {
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          obj[key] = "";
        }
      }
    },
    //请求手机验证码
    requestVertify() {
      if (this.checkPhoneNumber) {
        this.vertify.waiting = true;
        authApi.phoneApi(this.registerData.phoneNumber, this);
      } else {
        this.$notify({
          type: "warning",
          message: "手机号未填写或者格式不对",
          duration: 1500,
        });
      }
    },
    //检查验证码
    checkVertify() {
      if (this.vertify.result != this.vertify.input) {
        this.vertify.flag = true;
        this.vertify.message = "验证码错误";
      } else {
        this.vertify.flag = false;
        this.vertify.message = "";
      }
    },
  },
  computed: {
    //检查手机号是否正确
    checkPhoneNumber() {
      return /^1[0-9]{10}$/.test(this.registerData.phoneNumber);
    },
    //左右滑动动画
    leftOrRight() {
      return this.loginPage ? "rightToggle" : "leftToggle";
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
    p {
      line-height: 50px;
      color: #666666;
      text-align: center;
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
        margin-top: 40px;
        color: #222222;
      }
      .first {
        margin-top: 40px;
        opacity: 0.8;
      }
    }
  }
  .register {
    header {
      text-align: center;
      font-size: 2em;
    }
    p {
      line-height: 50px;
      color: #666666;
      text-align: center;
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
        float: left;
        margin-top: 40px;
        color: #222222;
      }
      .first {
        margin-top: 40px;
        opacity: 0.8;
      }
      .sendVertify {
        width: 100%;
        font-size: 12px;
      }
    }
  }
  .leftToggle-enter {
    transform: translateX(50px);
    opacity: 0;
  }
  .leftToggle-enter-active,
  .rightToggle-enter-active {
    transition: all 0.3s ease-in;
  }
  .rightToggle-enter {
    transform: translateX(-50px);
    opacity: 0;
  }
}
</style>
