<template>
  <div id="messageList">
    <div class="msg-list-box">
      <div class="msg-list">
        <img src="../../static/img/n=3.jpg" alt />
        <div class="user-des">
          <div class="top">
            <span>friend 1</span>
            <span>22：35</span>
          </div>
          <div class="top top-msg">
            <span>在不在不~</span>
            <span class="no-see"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="msg-list-box">
      <div class="msg-list">
        <img src="../../static/img/n=3.jpg" alt />
        <div class="user-des">
          <div class="top">
            <span>friend 2</span>
            <span>20：15</span>
          </div>
          <div class="top top-msg">
            <span>Hello</span>
            <span class="no-see"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="msg-list-box">
      <div class="msg-list">
        <img src="../../static/img/n=3.jpg" alt />
        <div class="user-des">
          <div class="top">
            <span>friend 3</span>
            <span>21：56</span>
          </div>
          <div class="top top-msg">
            <span>okk</span>
            <span class="no-see"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="msg-list-box">
      <div class="msg-list">
        <img src="../../static/img/n=3.jpg" alt />
        <div class="user-des">
          <div class="top">
            <span>friend 4</span>
            <span>21：28</span>
          </div>
          <div class="top top-msg">
            <span>okk</span>
            <span class="no-see"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="msg-list-box">
      <div class="msg-list">
        <img src="../../static/img/n=3.jpg" alt />
        <div class="user-des">
          <div class="top">
            <span>friend 5</span>
            <span>14：29</span>
          </div>
          <div class="top top-msg">
            <span>hi~</span>
            <span class="no-see"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "messageList",
};
</script>

<style lang="scss" scoped>
.msg-list-box {
  padding-top: 30px;
  .msg-list {
    display: flex;
    padding: 10px 0;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
  }
  .user-des {
    flex: 1;
    height: 60px;
    border-bottom: #d1d9e1 solid;
    .top {
      font-size: 14px;
      margin-left: 10px;
      display: flex;
      justify-content: space-between;
      line-height: 25px;
    }
    .top-msg {
      color: #666666;
      align-items: center;
      .no-see {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        border: #face15;
      }
    }
  }
}
</style>