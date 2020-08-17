<template>
  <div id="messageHeader">
    <!-- <my-header title="消息" hasRight="true" rightTxt="发起聊天" /> -->
    <van-pull-refresh v-model="isLoading" success-text="刷新成功" @refresh="onRefresh">
      <!--  <p>刷新次数: {{ count }}</p> -->
    </van-pull-refresh>
    <div class="mag-nav">
      <!-- div.mag-nav-item*4>div.icon-box -->
    </div>
    <div class="msg-ab">
      <img src="../../static/img/n=4.jpg" alt />
    </div>
    <div class="down">
      <div>优友の呼唤</div>
      <div>
        <van-button plain hairline type="info" class="btn">点击刷新</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageHeader",
};
</script>

<style lang="scss" scoped>
/* .down .btn{
		padding: 4px 25px;
		border: none;
		background-color: #face15;
		color: #ffffff;
		border-radius: 2px;
		box-shadow: 5px 5px 5px #FFFFB6;
	} */
#messageHeader {
  .mag-nav {
    padding: 0px 0px;
    display: flex;
    justify-content: space-between;
    .mag-nav-item {
      text-align: center;
      width: 80px;
    }
  }
  .msg-ab {
    padding: 20px 0;
    border-bottom: 1px #242630 dotted;
    img {
      height: 120px;
      width: 100%;
      border-radius: 10px;
    }
  }
  .down {
    padding: 10px 0;
    color: #536333;
    font-weight: 600;
    display: flex;
    justify-content: space-between;
    /* border-bottom: 1px #242630 dotted; */
  }
}
</style>