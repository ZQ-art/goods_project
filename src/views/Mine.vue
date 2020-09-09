<template>
  <div id="mine">
    <van-nav-bar
      title="我的"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="qr" size="23" />
      </template>
    </van-nav-bar>

    <div class="ava-box">
      <div class="avatar">
        <img src="../static/img/u=5.jpg" alt />
        <span class="iconfont icon-xiangji"></span>
        <input type="file" />
      </div>
      <p>点击更换头像</p>
    </div>

    <van-divider
      :style="{ color: '#709fb0', borderColor: '#709fb0', padding: '0 16px' }"
      >个人资料</van-divider
    >

    <van-cell-group class="fieldWarp">
      <van-field
        label="学号"
        v-model="test"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
      />
      <van-field
        label="姓名"
        value="OT.Ter"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
      />
      <van-field
        label="性别"
        value="女"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
      />
      <van-field
        label="学校"
        value="天津理工大学"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
      />
      <van-field
        label="学院"
        value="计算机科学与工程学院"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
      />
      <van-field
        label="专业"
        value="物联网工程"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
      />
      <van-field
        label="QQ"
        value="1369460359"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
      />
      <van-field
        label="手机号码"
        value="13589193462"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
      />
      <van-field
        label="累计获赞量"
        value="2161"
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
      />
      <van-field
        label="交易记录"
        value
        :readonly="DataChange"
        :class="{ changable: !DataChange }"
      />
    </van-cell-group>
    <van-button
      class="change"
      plain
      type="primary"
      @click="DataChange = !DataChange"
      v-if="DataChange"
      >修改个人资料</van-button
    >
    <van-button
      class="change"
      type="primary"
      @click="DataChange = !DataChange"
      v-else
      >完成</van-button
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      DataChange: true,
      test: "123",
    };
  },
  name: "home",
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
    onClickRight() {
      Toast("按钮");
    },
  },
};
</script>

<style lang="scss" scoped>
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
  }
}
.change {
  display: block;
  margin: 20px auto;
}
</style>
