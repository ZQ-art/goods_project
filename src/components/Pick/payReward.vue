<template>
  <div id="payReward">
    <van-search v-model="value" shape="round" background="#c5e9ea" placeholder="请输入地点关键词" />
    <van-cell center title="可代取">
      <template #right-icon>
        <van-switch v-model="checked" size="24" />
      </template>
    </van-cell>

    <van-steps :active="active">
      <van-step>可代取</van-step>
      <van-step>寻悬赏</van-step>
      <van-step>已接单</van-step>
    </van-steps>

    <van-cell title="我的位置" icon="location-o" />

    <van-cell title="用户1" icon="location" />
    <van-cell title="用户2" icon="location" />
    <van-cell title="用户3" icon="location" />
    <van-cell title="用户4" icon="location" />
    <van-cell title="用户5" icon="location" />
    <van-cell title="用户6" icon="location" />
    <van-cell title="用户7" icon="location" />
    <van-cell title="用户8" icon="location" />
    <van-cell title="用户9" icon="location" />
    <van-cell title="用户10" icon="location" />

    <van-button type="primary" size="large">查看更多</van-button>
  </div>
</template>

<script>
export default {
  name: "payReward",
};
</script>