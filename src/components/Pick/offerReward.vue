<template>
  <div id="offerReward">
    <van-steps :active="active">
      <van-step>发出悬赏</van-step>
      <van-step>完善信息</van-step>
      <van-step>等待接单</van-step>
      <van-step>完成交易</van-step>
    </van-steps>

    <div class="first" v-if="active === 0">
      <van-button @click="check" type="primary">发出悬赏</van-button>
    </div>

    <div class="second" v-else-if="active === 1">
      <van-field
        label="代取地点"
        v-model="data.place"
        @click="showAction = true"
        placeholder="请选择您所悬赏的代取地点"
      />
      <van-action-sheet
        v-model="showAction"
        :actions="actions"
        cancel-text="取消"
        description="请选择您所悬赏的代取地点"
        close-on-click-action
        @select="placeSelect"
      />
      <van-field
        readonly
        clickable
        label="代取物类型"
        :value="showSize"
        placeholder="请选择代取物的重量/大小"
        @click="showPicker = true"
      />
      <van-popup v-model="showPicker" round position="bottom">
        <van-picker
          show-toolbar
          :columns="columns"
          @cancel="showPicker = false"
          @confirm="onConfirm"
        />
      </van-popup>
      <van-form>
        <van-field
          v-model="data.name"
          name="代取物名称"
          label="代取物名称"
          placeholder="请填写您的代取物名称"
          :rules="[{ required: true, message: '代取物名称' }]"
        />
        <transition name="time">
          <van-field
            v-model="data.time"
            readonly
            name="限定时间"
            label="限定时间"
            v-if="showTime"
            @click="showTime = false"
            placeholder="请选择限定时间"
          />
          <van-datetime-picker
            v-model="data.timeTmp"
            type="time"
            title="选择限定时间"
            v-else
            @confirm="timeYes"
            @cancel="showTime = true"
          />
        </transition>
        <van-field name="stepper" label="悬赏金额(元)">
          <template #input>
            <van-stepper v-model="data.money" step="0.5" />
          </template>
        </van-field>
        <van-field
          v-model="data.msg"
          rows="2"
          autosize
          label="留言"
          type="textarea"
          maxlength="50"
          placeholder="请输入留言"
          show-word-limit
        />
      </van-form>
      <div style="margin: 16px" class="actions">
        <van-button type="primary" round @click="active--">上一步</van-button>
        <van-button round type="info" native-type="submit" @click="submit"
          >提交</van-button
        >
      </div>
    </div>

    <div class="third" v-else-if="active === 2">
      <van-cell-group>
        <van-cell>已发布的悬赏(等待接单)</van-cell>
        <van-cell title="悬赏者" :value="userId"></van-cell>
        <van-cell title="地点" :value="data.place"></van-cell>
        <van-cell title="重量和大小" :value="showSize"></van-cell>
        <van-cell title="物品名" :value="data.name"></van-cell>
        <van-cell title="悬赏额" :value="data.money"></van-cell>
        <van-cell title="限制时间" :value="data.time"></van-cell>
        <van-cell title="备注" :value="data.msg"></van-cell>
        <van-button type="primary" @click="complete">完成悬赏</van-button>
      </van-cell-group>
    </div>
    <div class="four" v-else>完成交易</div>
  </div>
</template>

<script>
import api from "@/api/pick.js";

export default {
  name: "offerReward",
  data() {
    return {
      active: 0,
      showAction: false,
      showPicker: false,
      showTime: true,
      columns: [
        // 第一列
        {
          values: ["极重", "重", "中", "轻", "极轻"],
          defaultIndex: 2,
        },
        // 第二列
        {
          values: ["极大", "大", "中", "小", "极小"],
          defaultIndex: 1,
        },
      ],
      actions: [
        { name: "南区快递点" },
        { name: "北区快递点" },
        { name: "29号楼外卖点" },
        { name: "21号楼外卖点" },
      ],
      data: {
        size: [],
        name: "",
        time: "",
        timeTmp: "",
        money: 0,
        msg: "",
        place: "",
      },
      userId: sessionStorage.getItem("userId"),
      token: sessionStorage.getItem("token"),
    };
  },
  methods: {
    //检查悬赏
    check() {
      let data = {
        userId: this.userId,
        token: this.token,
      };
      api.checkPick(data, this);
    },
    //物品大小确定
    onConfirm(value) {
      this.data.size = value;
      this.showPicker = false;
    },
    //提交悬赏
    submit() {
      let data = {
        name: this.data.name,
        size: this.data.size,
        money: String(this.data.money),
        msg: this.data.msg,
        time: this.data.time,
        place: this.data.place,
        userId: this.userId,
        token: this.token,
      };
      api.sendPick(data, this);
    },
    //限制时间确定
    timeYes() {
      this.data.time = this.data.timeTmp;
      this.showTime = true;
    },
    //选定地点
    placeSelect(action) {
      this.data.place = action.name;
    },
    //完成悬赏
    complete(){
      console.log('完成悬赏！');
    }
  },
  computed: {
    showSize() {
      return this.data.size[0] === undefined
        ? ""
        : this.data.size[0] + "," + this.data.size[1];
    },
  },
};
</script>

<style lang="scss" scoped>
#offerReward {
  .first {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .second {
    .actions {
      display: flex;
      justify-content: space-around;
      .van-button {
        flex: 0.4;
      }
    }
  }
  .third{
    .van-cell-group{
      .van-button{
        display: block;
        margin:  10px auto;
      }
    }
  }
  .time-enter-active {
    animation-name: fadeIn;
    animation-duration: 0.5s;
  }
}
</style>
