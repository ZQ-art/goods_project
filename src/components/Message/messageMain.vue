<template>
  <div id="messageMain">
    <transition name="chat">
      <van-pull-refresh
        v-model="refreshStatus"
        success-text="刷新成功"
        @refresh="myRefresh"
        v-if="chatRoom.noShow"
      >
        <div class="msg-ab">
          <img src="../../static/img/n=4.jpg" alt />
        </div>
        <div class="down">
          <div>优友の呼唤</div>
        </div>
        <van-divider content-position="center">消息列表</van-divider>
        <div
          class="msg-list"
          v-for="(item, index) in userList"
          :key="index"
          @click="enterChat(item)"
        >
          <img src="../../static/img/n=3.jpg" alt />
          <div class="user-des">
            <div class="top">
              <span>{{ item.friendName }}</span>
              <span>{{ item.time }}</span>
            </div>
            <div class="top top-msg">
              <span>点击进入聊天室</span>
              <span class="no-see"></span>
            </div>
          </div>
        </div>
      </van-pull-refresh>
      <div class="chatRoomWarp" v-else>
        <van-button type="primary" block @click="leaveChat"
          >点击返回</van-button
        >
        <div class="content">
          <component
            v-for="(item, index) in chatRoom.list"
            :is="item.component"
            :key="index"
            :userId="userId"
            :friendName="chatRoom.userName"
            :msg="item.content"
          ></component>
          <div class="bottom">
            <van-field v-model="chatRoom.input" left-icon="edit"></van-field>
            <van-button type="primary" @click="send">发送</van-button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import config from "@/config/config.json";
import messageApi from "@/api/message.js";
import leftMsg from "@/components/Message/leftMsg.vue";
import rightMsg from "@/components/Message/rightMsg.vue";

export default {
  name: "messageMain",
  data() {
    return {
      refreshStatus: false,
      userList: [],
      chatRoom: {
        noShow: true,
        input: "",
        list: [],
        userName: "",
      },
      userId: sessionStorage.getItem("userId"),
    };
  },
  methods: {
    //上拉刷新
    myRefresh() {
      let data = {
        userName: this.userId,
      };
      this.refreshStatus = !this.refreshStatus;
      messageApi.freshMessage(data, this);
    },
    //进入聊天框
    enterChat(item) {
      //记录用户
      this.chatRoom.userName = item.friendName;
      //生成数据
      let data = {
        friendName: item.friendName,
        userName: this.userId,
      };
      //请求历史信息
      messageApi.specificMessage(data, this);
      //建立socket连接
      messageApi.chatConnect({ username: this.userId, password: "" }, this);
      this.chatRoom.noShow = !this.chatRoom.noShow;
    },
    leaveChat() {
      //清空消息
      this.chatRoom.list.length = 0;
      this.chatRoom.noShow = !this.chatRoom.noShow;
      //断开连接
      messageApi.chatDisconnect();
    },
    //用户发送消息
    send() {
      //未输入信息拦截
      if (this.chatRoom.input === "") {
        this.$notify({
          type: "warning",
          message: "未输入任何信息",
          duration: 500,
        });
        return;
      }
      //加入right组件
      this.chatRoom.list.push({
        component: "rightMsg",
        content: this.chatRoom.input,
      });
      let data = {
        msg: this.chatRoom.input,
        user: this.chatRoom.userName,
      };
      messageApi.chatSend(data);
      //清空输入框
      this.chatRoom.input = "";
    },
  },
  mounted() {
    let data = {
      userName: this.userId,
    };
    //初始化或者路由切换刷新
    messageApi.freshMessage(data, this);
  },
  components: {
    leftMsg,
    rightMsg,
  },
};
</script>

<style lang="scss" scoped>
#messageMain {
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
  .msg-list {
    display: flex;
    padding: 10px 0;
    margin-top: 30px;
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
  .chatRoomWarp {
    .content {
      border: 2px solid rgb(209, 217, 225);
    }
    .bottom {
      margin-top: 20px;
      display: flex;
      width: 100%;
      border-top: 2px solid rgb(209, 217, 225);
      .van-button {
        width: 70px;
      }
      .van-field {
        padding: 0 16px;
        height: 44px;
        line-height: 44px;
      }
    }
  }
  .chat-enter {
    transform: translateY(50px);
    opacity: 0;
  }
  .chat-enter-active {
    transition: all 0.5s;
  }
}
</style>