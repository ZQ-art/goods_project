<template>
<!-- 所有内容应放在id为home的div内	 -->
	<div id="home">
		<van-nav-bar title="排行榜" left-arrow  @click-left="onClickLeft"  @click-right="onClickRight">
		  <template #right>
		    <van-icon name="search" size="23" />
		  </template>
		</van-nav-bar>
		
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
		  <van-swipe-item>
			  <img class="picture"  src="../static/img/food.jpg">
		  </van-swipe-item>
		  <van-swipe-item>
			  <img class="picture"  src="../static/img/food1.jpg">
		  </van-swipe-item>
		  <van-swipe-item>
			  <img class="picture"  src="../static/img/drink.jpg">
		  </van-swipe-item>
		
		</van-swipe>
		
		<van-cell-group>
		  <van-cell title="1" value="用户1" label="描述信息" />
		  <van-cell title="2" value="用户2" label="描述信息" />
		  <van-cell title="3" value="用户3" label="描述信息" />
		  <van-cell title="4" value="用户4" label="描述信息" />
		  <van-cell title="5" value="用户5" label="描述信息" />
		  <van-cell title="6" value="用户6" label="描述信息" />
		  <van-cell title="7" value="用户7" label="描述信息" />
		  <van-cell title="8" value="用户8" label="描述信息" />
		  <van-cell title="9" value="用户9" label="描述信息" />
		  <van-cell title="10" value="用户10" label="描述信息" />
		</van-cell-group>
		
		<van-tabbar v-model="active">
			<van-tabbar-item icon="wap-home-o" @click="toHome">首页</van-tabbar-item>
			<van-tabbar-item icon="exchange" dot @click="toPick">代取</van-tabbar-item>
		<div class="item" @click="active">
			<router-link to="/grade" tag="span">
				<img class="dy-btn"  src="../static/img/排行榜.png">
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
	  		active: 4,
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
	.my-swipe .van-swipe-item {
	    color: #fff;
	    font-size: 20px;
	    
	    text-align: center;
	    background-color: #9ce5ff;
	  }
	.picture{
		width: 100%;
		height: 250px;
	}
</style>
