<template>
  <div id="mine">
    <van-nav-bar title="我的" left-arrow @click-left="onClickLeft" @click-right="onClickRight">
      <template #right>
        <van-icon name="qr" size="23" />
      </template>
    </van-nav-bar>

    <div class="ava-box">
      <div class="avatar">
        <!-- <img src="../static/img/u=5.jpg" alt />
        <span class="iconfont icon-xiangji"></span>-->
        <van-uploader :after-read="sendFile" :max-count="1" v-model="myFile"></van-uploader>
      </div>
      <p>点击更换头像</p>
    </div>

    <van-divider :style="{ color: '#709fb0', borderColor: '#709fb0', padding: '0 16px' }">个人资料</van-divider>

    <van-cell-group class="fieldWarp">
      <van-field
        label="学号"
        v-model="personalData.id"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
        :right-icon="icon"
      />
      <van-field
        label="姓名"
        v-model="personalData.name"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
        :right-icon="icon"
      />
      <van-field
        label="性别"
        v-model="personalData.sex"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
        :right-icon="icon"
      />
      <van-field
        label="学校"
        v-model="personalData.school"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
        :right-icon="icon"
      />
      <van-field
        label="学院"
        v-model="personalData.college"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
        :right-icon="icon"
      />
      <van-field
        label="专业"
        v-model="personalData.major"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
        :right-icon="icon"
      />
      <van-field
        label="QQ"
        v-model="personalData.qq"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
        :right-icon="icon"
      />
      <van-field
        label="手机号码"
        v-model="personalData.phone"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
        :right-icon="icon"
      />
      <van-field
        label="累计获赞量"
        v-model="personalData.greatTimes"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
        :right-icon="icon"
      />
      <van-field
        label="交易记录"
        v-model="personalData.tradeRecord"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
        :right-icon="icon"
      />
    </van-cell-group>
    <van-button
      class="change"
      plain
      type="primary"
      @click="changeDataHandler"
      v-if="DataChange"
    >修改个人资料</van-button>
    <van-button class="change" type="primary" @click="changeDataHandler" v-else>完成</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      DataChange: true,
      test: "123",
      icon: "",
      personalData: {
        id: "22",
        name: "55",
        sex: "88",
        school: "99",
        college: "77",
        major: "66",
        qq: "6664",
        phone: "8887",
        greatTimes: "1112",
        tradeRecord: "333",
      },
      myFile: [],
    };
  },
  name: "home",
  methods: {
    onClickLeft() {
      this.$router.push({ name: "home" });
    },
    onClickRight() {
      Toast("按钮");
    },
    changeDataHandler() {
      this.DataChange = !this.DataChange;
      this.icon = this.icon === "edit" ? "" : "edit";
    },
    //传送文件到服务器
    sendFile(file) {
      console.log(file);
      console.log(this.myFile);
    },
  },
};
</script>

<style lang="scss" scoped>
#mine {
  .ava-box {
    color: #cccccc;
    text-align: center;
    padding: 20px;
    .avatar {
      position: relative;
      img {
        height: 100px;
        width: 100px;
        border-radius: 50%;
        margin-bottom: 16px;
        opacity: 0.7;
      }
      .iconfont {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 26px;
        color: #ffffff;
      }
      input {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
      }
    }
  }
  .fieldWarp {
    .changable {
      outline: 1px solid black;
      .van-cell_title {
        height: 500px;
      }
    }
  }
  .change {
    display: block;
    margin: 20px auto;
  }
}
</style>
