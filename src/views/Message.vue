<template>
  <div id="message">
    <MessageNav />
    <MessageHeader />
    <van-divider content-position="center">消息列表</van-divider>
    <MessageList />
  </div>
</template>

<script>
import MessageNav from "../components/Message/messageNav";
import MessageHeader from "../components/Message/messageHeader";
import MessageList from "../components/Message/messageList";

export default {
  data() {
    return {
      isLoading: false,
    };
  },
  name: "message",
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        // this.count++;
      }, 1000);
    },
  },
  components: {
    MessageNav,
    MessageHeader,
    MessageList,
  },
};
</script>

<style lang="scss" scoped>
#message {
  padding: 0 20px;
  color: #000000;
  background-color: #ffffff;
}
</style>