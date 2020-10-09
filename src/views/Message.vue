<template>
  <div id="message">
    <MessageNav />
    <MessageMain />
  </div>
</template>

<script>
import MessageNav from "../components/Message/messageNav";
import MessageMain from "../components/Message/messageMain";

export default {
  data() {
    return {};
  },
  name: "message",
  methods: {},
  components: {
    MessageNav,
    MessageMain,
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