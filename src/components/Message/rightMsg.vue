<template>
  <div id="rightMsg">
    <div class="warpMsg">
      <span>{{userId}}</span>
      <div class="msg">{{realMsg}}</div>
    </div>
    <img :src="url" />
  </div>
</template>

<script>
export default {
  name: "rightMsg",
  data() {
    return {
      //和父组件解除引用绑定
      realMsg: "",
      url:this.$store.state.imgUrl
    };
  },
  props: {
    userId: String,
    msg: String,
  },
  mounted() {
    this.realMsg = this.msg;
  },
  methods: {},
  components: {},
};
</script>

<style scoped lang="scss">
#rightMsg {
  display: flex;
  margin-top: 10px;
  justify-content: flex-end;
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  .warpMsg {
    padding-right: 15px;
    width: 55%;
    text-align: right;
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
      border-right-color: transparent;
      border-bottom-color: transparent;
      top: 6px;
      right: -16px;
    }
  }
}
</style>
