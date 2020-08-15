<template>
<!-- 所有内容应放在id为home的div内	 -->
	<div id="home">
		<van-nav-bar title="我的" left-arrow  @click-left="onClickLeft"  @click-right="onClickRight">
		  <template #right>
		    <van-icon name="qr" size="23" />
		  </template>
		</van-nav-bar>
		
		<div class="ava-box">
			<div class="avatar">
				<img src="../../static/img/u=5.jpg" alt="">
				<span class="iconfont icon-xiangji"></span>
				<input type="file" />
			</div>
			<p>点击更换头像</p>
		</div>
		
		<van-divider
		  :style="{ color: '#709fb0', borderColor: '#709fb0', padding: '0 16px' }"
		>
		 个人资料
		</van-divider>
		
		<van-cell-group>
			  <van-field label="学号" value="20195524" readonly />
			  <van-field label="姓名" value="OT.Ter" readonly />
			  <van-field label="性别" value="女" readonly />
			  <van-field label="学校" value="天津理工大学" readonly />
			  <van-field label="学院" value="计算机科学与工程学院" readonly />
			  <van-field label="专业" value="物联网工程" readonly />
			  <van-field label="QQ" value="1369460359" readonly />
			  <van-field label="手机号码" value="13589193462" readonly />
			  <van-field label="累计获赞量" value="2161" readonly />
			  <van-field label="交易记录" value="" readonly />
		</van-cell-group>
		
		<van-tabbar v-model="active">
			<van-tabbar-item icon="wap-home-o" @click="toHome">首页</van-tabbar-item>
			<van-tabbar-item icon="exchange" dot @click="toPick">代取</van-tabbar-item>
		<div class="item" @click="active">
			<router-link to="/grade" tag="span">
				<img class="dy-btn"  src="../../static/img/排行榜.png">
			</router-link>
		</div>
		    <van-tabbar-item icon="comment-o" badge="5" @click="toMessage">消息</van-tabbar-item>
			<van-tabbar-item icon="user-o" @click="toMine">我的</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<script>
	export default {
	  data(){
	  	return{	
	  		active: 3,
	  	}
	  },
	  name:'home',
	  methods: {
	    onClickLeft() {
	      this.$router.push("/")
	    },
	    onClickRight() {
	      Toast('按钮');
	    },
		toHome(){
			this.$router.push("/")
		},
		toPick(){
			this.$router.push("/pick")
		},
		toMessage(){
			this.$router.push("/message")
		},
		toMine(){
			this.$router.push('/mine')
		}
	  }
	}
</script>

<style scoped>
	.item .dy-btn{
		 width: 65px;
		 height:45px;
		 padding: 2px;
		 border-radius: 50%;
	}
	.ava-box{
		color: #CCCCCC;
		text-align: center;
		padding: 20px;
	}
	.avatar{
		position: relative;
	}
	.avatar img{
		height: 100px;
		width: 100px;
		border-radius: 50%;
		margin-bottom: 16px;
		opacity: .7;
	
	}
	.avatar .iconfont{
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		font-size: 26px;
		color: #FFFFF;
	}
	.avatar input{
		position: absolute;
		left: 50%;
		top: 50%;
		width: 50%;
		transform: translate(-50%,-50%);
		opacity: 0;
	}
</style>
