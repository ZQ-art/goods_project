<template>
  <div id="payReward">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <van-steps :active="step">
        <van-step>寻找悬赏</van-step>
        <van-step>成功接单</van-step>
      </van-steps>

      <div class="first" v-if="step == 0">
        <van-collapse v-model="active">
          <van-collapse-item
            v-for="(item, index) in list"
            :key="index"
            :title="item.name"
          >
            <van-cell title="悬赏者" :value="item.userId"></van-cell>
            <van-cell title="地点" :value="item.place"></van-cell>
            <van-cell
              title="重量和大小"
              :value="item.size + ',' + item.weight"
            ></van-cell>
            <van-cell title="物品名" :value="item.name"></van-cell>
            <van-cell title="悬赏额" :value="item.money"></van-cell>
            <van-cell title="限制时间" :value="item.time"></van-cell>
            <van-cell title="备注" :value="item.msg"></van-cell>
            <van-button
              round
              @click="takePick(index)"
              style="margin: auto; display: block"
              type="info"
              >接单</van-button
            >
          </van-collapse-item>
        </van-collapse>
        <van-button type="primary" size="large" @click="seeAccept"
          >查看已经接下的悬赏</van-button
        >
      </div>

      <div class="second" v-else>
        <van-cell center size="large" class="header"
          >成功接单，请尽快完成！</van-cell
        >
        <van-cell-group v-for="(item, index) in acceptList" :key="index">
          <van-cell title="悬赏者" :value="item.userId"></van-cell>
          <van-cell title="地点" :value="item.place"></van-cell>
          <van-cell
            title="重量和大小"
            :value="item.size + ',' + item.weight"
          ></van-cell>
          <van-cell title="物品名" :value="item.name"></van-cell>
          <van-cell title="悬赏额" :value="item.money"></van-cell>
          <van-cell title="限制时间" :value="item.time"></van-cell>
          <van-cell title="备注" :value="item.msg"></van-cell>
          <van-button type="info" @click="complete">完成此悬赏</van-button>
          <van-divider></van-divider>
        </van-cell-group>
      </div>
    </van-pull-refresh>
    <van-dialog
      v-model="confirm"
      title="确认窗口"
      :show-cancel-button="true"
      @confirm="confirmPick"
      @cancel="cancelPick"
    ></van-dialog>
  </div>
</template>

<script>
import api from "@/api/pick.js";

export default {
  name: "payReward",
  data() {
    return {
      step: "0",
      active: [],
      choose: undefined,
      isLoading: false,
      confirm: false,
      list: [],
      userId: sessionStorage.getItem("userId"),
      acceptList: [],
    };
  },
  mounted() {
    let data = {
      userName: this.userId,
    };
    api.requestAll(data, this);
  },
  methods: {
    onRefresh() {
      let data = {
        userName: this.userId,
      };
      setTimeout(() => {
        api.requestAll(data, this);
        this.isLoading = false;
      }, 1000);
    },
    takePick(index) {
      this.choose = index;
      this.confirm = true;
    },
    //确定接下悬赏
    confirmPick() {
      let tmp = this.list[this.choose];
      console.log(tmp);
      let data = {
        name: tmp.name,
        userId: tmp.userId,
        acceptId: this.userId,
        msg: tmp.msg,
        place: tmp.place,
        size: tmp.size,
        weight: tmp.weight,
        time: tmp.time,
        money: tmp.money,
      };
      api.acceptPick(data, this);
    },
    cancelPick() {
      console.log("取消！");
    },
    //查看所有接下的悬赏
    seeAccept() {
      let data = {
        acceptId: this.userId,
      };
      api.requestAccept(data, this);
    },
    complete(){
      console.log('完成接下的悬赏');
    }
  },
};
</script>