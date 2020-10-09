<template>
  <div id="friends">
    <van-nav-bar title="好友列表" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="plus" @click="addNewFriendData.flag = true" />
        <span
          style="color: rgb(110, 180, 252)"
          @click="addNewFriendData.flag = true"
          >好友</span
        >
      </template>
    </van-nav-bar>
    <van-index-bar class="warp">
      <van-index-anchor :index="zimu" v-for="zimu in alphabet" :key="zimu">
        <template #default
          >{{ zimu }}
          <van-cell
            :title="item.friendName"
            v-for="(item, index) in sortedUserList(zimu)"
            :key="index"
            class="row"
          >
            <van-button type="warning" @click="kill(item.friendName)"
              >删除</van-button
            >
          </van-cell>
        </template>
      </van-index-anchor>
    </van-index-bar>
    <van-popup v-model="addNewFriendData.flag" position="top">
      <p>请输入想要添加为好友的用户名</p>
      <van-field
        v-model="addNewFriendData.input"
        label="用户名"
        placeholder="请输入用户名"
      ></van-field>
      <van-button type="primary" @click="addNewFriend(addNewFriendData.input)"
        >点击添加</van-button
      >
    </van-popup>
  </div>
</template>

<script>
import config from "@/config/config.json";
import cnchar from "cnchar";
import friendsApi from "@/api/friends.js";

export default {
  name: "friends",
  data() {
    return {
      userList: [],
      alphabet: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
      ],
      addNewFriendData: {
        flag: false,
        input: "",
      },
      userId: sessionStorage.getItem("userId"),
    };
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "home" });
    },
    sortedUserList(index) {
      let result = new Array();
      this.userList.forEach((item) => {
        if (
          item.friendName
            .spell()
            .toUpperCase()
            .startsWith(index)
        ) {
          result.push(item);
        }
      });
      return result;
    },
    addNewFriend(friend) {
      let data = {
        friendName: friend,
        userName: this.userId,
      };
      friendsApi.friendAddApi(data, this);
    },
    kill(name) {
      let data = {
        friendName: name,
        userName: this.userId,
      };
      friendsApi.friendKillApi(data, this);
    },
    fresh() {
      let data = {
        userName: this.userId,
      };
      friendsApi.friendsApi(data, this);
    },
  },
  mounted() {
    this.fresh();
  },
  computed: {
    friendAccept() {},
  },
};
</script>

<style lang="scss" scoped>
#friends {
  .van-popup {
    p {
      text-align: center;
    }
    .van-field {
      border-top: solid 2px rgb(247, 248, 250);
      border-bottom: solid 2px rgb(247, 248, 250);
    }
    .van-button {
      display: block;
      margin: 10px auto;
      margin-bottom: 0;
    }
  }
  .warp {
    .row {
      border-top: 0.5px dotted slategrey;
      line-height: 44px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    :last-child[class="row van-cell"] {
      border-bottom: 0.5px dotted slategrey;
    }
  }
}
</style>
