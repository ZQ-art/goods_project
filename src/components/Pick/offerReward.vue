<template>
  <div id="offerReward">
    <van-search v-model="value" shape="round" background="#c5e9ea" placeholder="请输入地点关键词" />
    <van-cell center title="我要悬赏">
      <template #right-icon>
        <van-switch v-model="checked" size="24" />
      </template>
    </van-cell>

    <van-steps :active="active">
      <van-step>发出悬赏</van-step>
      <van-step>完善信息</van-step>
      <van-step>等待接单</van-step>
      <van-step>完成交易</van-step>
    </van-steps>

    <van-cell is-link title="代取地点" @click="show = true" />
    <van-action-sheet
      v-model="show"
      :actions="actions"
      cancel-text="取消"
      description="请选择您所悬赏的代取地点"
      close-on-click-action
    />

    <van-field
      readonly
      clickable
      label="代取物类型"
      :value="value"
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

    <van-form @submit="onSubmit">
      <van-field
        v-model="myObject"
        name="代取物名称"
        label="代取物名称"
        placeholder="请填写您的代取物名称"
        :rules="[{ required: true, message: '代取物名称' }]"
      />
      <van-field
        v-model="timeLimit"
        name="限定时间"
        label="限定时间"
        placeholder="请填写您的限定时间"
        :rules="[{ required: true, message: '限定时间' }]"
      />
      <!-- <van-stepper v-model="value" step="0.5" :decimal-length="1" /> -->
      <van-field name="stepper" label="悬赏金额(元)">
        <template #input>
          <van-stepper v-model="stepper" step="0.5" />
        </template>
      </van-field>
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="留言"
        type="textarea"
        maxlength="50"
        placeholder="请输入留言"
        show-word-limit
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "offerReward",
  data() {
    return {
      value: "",
      checked: true,
      active: 1,
      show: false,
      showPicker: false,
      timeLimit: "",
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
      myObject: "",
      stepper: 1,
    };
  },
  methods: {
    onConfirm(value) {
      this.value = value;
      this.showPicker = false;
    },
    onSubmit(values) {
      console.log("submit", values);
    },
  },
};
</script>