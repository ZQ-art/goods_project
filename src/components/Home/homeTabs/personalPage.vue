<template>
  <div id="personalPage">
    <div class="info">
      <img :src="imgUrl" alt />
      <van-button color="linear-gradient(to right, #f7c2ce,#f295aa)" style="opacity: .7;">My Goods</van-button>
      <van-button color="linear-gradient(to right, #f7c2ce,#f295aa)" style="opacity: .7;">我的收藏</van-button>
    </div>
    <div class="des">
      <h2>用户名：{{userId}}</h2>
      <span>id：20195524</span>
      <p>质量很好，非常实用，节省空间，商家服务态度好! 安利一波~</p>
      <img src="../../../static/img/book2.jpg" alt />
    </div>

    <van-tag color="#eea8a8">宿舍用品</van-tag>&nbsp;
    <van-tag color="#7232dd" plain>创意书架</van-tag>&nbsp;
    <van-tag color="#ffe1e1" text-color="#ad0000">+添加颜色、价格等标签</van-tag>
    <div class="user-tag2">
      <van-rate v-model="value" allow-half icon="like" void-icon="like-o" void-color="#eee" />
      <!-- <span><a></a>关注</span>
      <span><a>2.0w</a>+粉丝</span>-->
    </div>
    <van-button type="primary" size="large">查看更多</van-button>
  </div>
</template>

<script>
export default {
  name: "personalPage",
  data() {
    return {
      value: 3.5,
      userId:sessionStorage.getItem('userId'),
      imgUrl:this.$store.state.imgUrl
    };
  },
  methods: {},
  mounted(){
    this.imgUrl=this.$store.state.imgUrl
  }
};
</script>

<style lang="scss" scoped>
#personalPage {
  padding: 0 17px 30px 17px;
  background: #ffffdf;
  .info {
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* padding-bottom: 20px; */
  }
  .info img {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    margin-right: 20px;
    padding: 10px 0 10px 10px;
  }
  /* 按钮*/

  .des {
    padding: 20px 20px;
    background: #faebc1;
    border-radius: 5%;
    opacity: 0.8;
    h2 {
      font-size: 24px;
      font-weight: bold;
    }
    span {
      padding: 10px 0 15px 0;
      display: block;
      /* border-radius: 50%; */
    }
    p {
      line-height: 24px;
    }
  }
  .des img {
    height: 200px;
    width: 300px;
  }
  .user-tag2 {
    padding: 20px 0;
    span {
      font-size: 14px;
      margin-right: 15px;
      /* margin-top: 50px; */
      color: #3f4234;
    }
    a {
      /* font-size: 18px; */
      margin-right: 15px;
      color: #5c262a;
    }
  }
}
</style>
