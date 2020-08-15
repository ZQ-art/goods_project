<template>
	<div id="home">
		<van-nav-bar title="消息" left-arrow  @click-left="onClickLeft"  @click-right="onClickRight">
		  <template #right>
		    <van-icon name="search" size="23" />
		  </template>
		</van-nav-bar>
		
		<van-pull-refresh
		  v-model="isLoading"
		  success-text="刷新成功"
		  @refresh="onRefresh"
		>
		<!--  <p>刷新次数: {{ count }}</p> -->
		</van-pull-refresh>
		
		<div class="message">
			<my-header title="消息" hasRight="true" rightTxt="发起聊天"  />
			
			<div class="msg-warp">
				<div class="mag-nav">
					<!-- div.mag-nav-item*4>div.icon-box -->
		
				</div>
				<div class="msg-ab">
					<img src="../../static/img/n=4.jpg" alt="" />
				</div>
				<div class="down">
					<div>优友の呼唤</div>
					<div><van-button plain hairline type="info" class="btn">点击刷新</van-button></div>
					
				</div>
				<van-divider content-position="center">消息列表</van-divider>
				<div class="msg-list-box">
					<div class="msg-list">
						<img src="../../static/img/n=3.jpg" alt="">
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
						<img src="../../static/img/n=3.jpg" alt="">
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
						<img src="../../static/img/n=3.jpg" alt="">
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
						<img src="../../static/img/n=3.jpg" alt="">
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
						<img src="../../static/img/n=3.jpg" alt="">
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
		</div>
		
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
	  		active: 2,
			isLoading: false,
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
		},
		 onRefresh() {
			  setTimeout(() => {
				Toast('刷新成功');
				this.isLoading = false;
				// this.count++;
			 }, 1000);
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
	.mag-nav{
		padding: 0px 0px;
		display: flex;
		justify-content: space-between;
		
	}
	.msg-warp{
		padding: 0 20px;
		color: #000000;
		background-color: #FFFFFF;
	}
	
	.mag-nav-item{
		text-align: center;
		width: 80px;
	}
	
	.msg-ab{
		padding: 20px 0;
		
		border-bottom: 1px #242630 dotted;
	}
	.msg-ab img{
		height: 120px;
		width: 100%;
		border-radius: 10px;
	}
	.down{
		padding: 10px 0;
		color: #536333;
		font-weight: 600;
		display: flex;
		justify-content: space-between;
		/* border-bottom: 1px #242630 dotted; */
	}
	/* .down .btn{
		padding: 4px 25px;
		border: none;
		background-color: #face15;
		color: #ffffff;
		border-radius: 2px;
		box-shadow: 5px 5px 5px #FFFFB6;
	} */
	.msg-list-box{
		padding-top: 30px;
	
	}
	.msg-list{
		display: flex;
		padding: 10px 0;
	}
	.msg-list img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.user-des{
		flex:1;
		height: 60px;
		border-bottom: #D1D9E1 solid;
	}
	.user-des .top{
		font-size: 14px;
		margin-left: 10px;
		display: flex;
		justify-content: space-between;
		line-height: 25px;
	}
	.top-msg{
		color: #666666;
		align-items: center;
	}
	.no-see{
		width: 8px;
		height: 8px;
		border-radius: 50%;
		border: #face15;
	}

</style>