<template>
  <div id="leftMsg">
    <img src="../../static/img/n=3.jpg" />
    <div class="warpMsg">
      <span>{{ friendName }}</span>
      <div class="msg">{{ realMsg }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "leftMsg",
  data() {
    return {
      //和父组件解除引用绑定
      realMsg: this.msg,
    };
  },
  props: {
    friendName: String,
    msg: String,
  },
  components: {},
  methods: {},
};
</script>

<style scoped lang="scss">
#leftMsg {
  display: flex;
  margin-top: 10px;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .warpMsg {
    padding-left: 5px;
    width: 55%;
    span {
      font-size: 18px;
      padding-bottom: 5px;
      display: block;
    }
    .msg {
      width: 100%;
      border-radius: 5px;
      background-color: rgb(229, 229, 229);
      word-wrap: break-word;
      padding: 5px;
      position: relative;
    }
    .msg::before {
      content: "";
      position: absolute;
      border: 8px solid rgb(229, 229, 229);
      border-top-color: transparent;
      border-left-color: transparent;
      border-bottom-color: transparent;
      top: 6px;
      left: -16px;
    }
  }
}
</style>
