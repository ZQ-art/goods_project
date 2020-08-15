<template>
	<div class="home">
		<van-nav-bar title="Goods圈" @click-left="onClickLeft"  @click-right="onClickRight">
		  <template #left>
		    <van-icon name="friends-o" size="25" />
		  </template>
		  
		  <template #right>
		    <van-icon name="scan" size="23" />
		  </template>
		</van-nav-bar>
		
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" >
		  <van-swipe-item>优友の日常</van-swipe-item>
		</van-swipe>
		
		<van-tabs v-model="activeName">
		  <van-tab title="个人主页" name="a">
			  <div class="me-content">
			  	<div class="info">
			  		<img src="../static/img/u=7.jpg" alt="">
			  		<van-button color="linear-gradient(to right, #f7c2ce,#f295aa)" style="opacity: .7;">
			  		  My Goods
			  		</van-button>
			  		<van-button color="linear-gradient(to right, #f7c2ce,#f295aa)" style="opacity: .7;">
			  		  我的收藏
			  		</van-button>
			  	</div>
			  	<div class="des">
			  		<h2>OT.Ter</h2>
			  		<span>id：20195524</span>
			  		<p>质量很好，非常实用，节省空间，商家服务态度好! 安利一波~</p>
			  		<img src="../static/img/book2.jpg"  alt=""/>
			  	</div>
			  	
			  	<van-tag color="#eea8a8">宿舍用品</van-tag>&nbsp;
			  	<van-tag color="#7232dd" plain>创意书架</van-tag>&nbsp;
			  	<van-tag color="#ffe1e1" text-color="#ad0000">+添加颜色、价格等标签</van-tag>
			  	<div class="user-tag2">
			  		<van-rate v-model="value" allow-half icon="like" void-icon="like-o" void-color="#eee" />
			  		<!-- <span><a></a>关注</span>
			  		<span><a>2.0w</a>+粉丝</span> -->
			  	</div>
			  	<van-button type="primary" size="large">查看更多</van-button>
			  </div>
			  
		  </van-tab>
		  
		  <van-tab title="好友安利" name="b">
			  <van-card
			    num="2"
			    price="2.00"
			    desc="描述信息"
			    title="商品标题"
			    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			  >
			    <template #tags>
			      <van-tag plain type="danger">标签</van-tag>
			      <van-tag plain type="danger">标签</van-tag>
			    </template>
			    <template #footer>
			      <van-button size="mini">按钮</van-button>
			      <van-button size="mini">按钮</van-button>
			    </template>
			  </van-card>
			  <van-card
			    num="1"
			    price="2.00"
			    desc="描述信息"
			    title="商品标题"
			    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			  >
			    <template #tags>
			      <van-tag plain type="danger">标签</van-tag>
			      <van-tag plain type="danger">标签</van-tag>
			    </template>
			    <template #footer>
			      <van-button size="mini">按钮</van-button>
			      <van-button size="mini">按钮</van-button>
			    </template>
			  </van-card>
			  <van-card
			    num="1"
			    price="2.00"
			    desc="描述信息"
			    title="商品标题"
			    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			  >
			    <template #tags>
			      <van-tag plain type="danger">标签</van-tag>
			      <van-tag plain type="danger">标签</van-tag>
			    </template>
			    <template #footer>
			      <van-button size="mini">按钮</van-button>
			      <van-button size="mini">按钮</van-button>
			    </template>
			  </van-card>
			  <van-card
			    num="2"
			    price="2.00"
			    desc="描述信息"
			    title="商品标题"
			    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			  >
			    <template #tags>
			      <van-tag plain type="danger">标签</van-tag>
			      <van-tag plain type="danger">标签</van-tag>
			    </template>
			    <template #footer>
			      <van-button size="mini">按钮</van-button>
			      <van-button size="mini">按钮</van-button>
			    </template>
			  </van-card>
			  <van-card
			    num="2"
			    price="2.00"
			    desc="描述信息"
			    title="商品标题"
			    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			  >
			    <template #tags>
			      <van-tag plain type="danger">标签</van-tag>
			      <van-tag plain type="danger">标签</van-tag>
			    </template>
			    <template #footer>
			      <van-button size="mini">按钮</van-button>
			      <van-button size="mini">按钮</van-button>
			    </template>
			  </van-card>
			  <van-card
			    num="2"
			    price="2.00"
			    desc="描述信息"
			    title="商品标题"
			    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			  >
			    <template #tags>
			      <van-tag plain type="danger">标签</van-tag>
			      <van-tag plain type="danger">标签</van-tag>
			    </template>
			    <template #footer>
			      <van-button size="mini">按钮</van-button>
			      <van-button size="mini">按钮</van-button>
			    </template>
			  </van-card>
		  </van-tab>
		  <van-tab title="今日推荐" name="c">
			  <van-tree-select height="55vw" :items="items" :main-active-index.sync="active">
			    <template #content>
			      <van-image
			        v-if="active === 0"
			        src="https://img.yzcdn.cn/vant/apple-1.jpg"
			      />
			      <van-image
			        v-if="active === 1"
			        src="https://img.yzcdn.cn/vant/apple-2.jpg"
			      />
				  <van-image
				    v-if="active === 2"
				    src="https://img.yzcdn.cn/vant/apple-1.jpg"
				  />
				  <van-image
				    v-if="active === 3"
				    src="https://img.yzcdn.cn/vant/apple-2.jpg"
				  />
			    </template>
			  </van-tree-select>
			  <van-card
			    num="2"
			    price="2.00"
			    desc="描述信息"
			    title="商品标题"
			    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			  >
			    <template #tags>
			      <van-tag plain type="danger">标签</van-tag>
			      <van-tag plain type="danger">标签</van-tag>
			    </template>
			    <template #footer>
			      <van-button size="mini">按钮</van-button>
			      <van-button size="mini">按钮</van-button>
			    </template>
			  </van-card>
			  
			  <van-card
			    num="2"
			    price="2.00"
			    desc="描述信息"
			    title="商品标题"
			    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			  >
			    <template #tags>
			      <van-tag plain type="danger">标签</van-tag>
			      <van-tag plain type="danger">标签</van-tag>
			    </template>
			    <template #footer>
			      <van-button size="mini">按钮</van-button>
			      <van-button size="mini">按钮</van-button>
			    </template>
			  </van-card>
			  
			  <van-card
			    num="2"
			    price="2.00"
			    desc="描述信息"
			    title="商品标题"
			    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			  >
			    <template #tags>
			      <van-tag plain type="danger">标签</van-tag>
			      <van-tag plain type="danger">标签</van-tag>
			    </template>
			    <template #footer>
			      <van-button size="mini">按钮</van-button>
			      <van-button size="mini">按钮</van-button>
			    </template>
			  </van-card>
			  
			  <van-card
			    num="2"
			    price="2.00"
			    desc="描述信息"
			    title="商品标题"
			    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			  >
			    <template #tags>
			      <van-tag plain type="danger">标签</van-tag>
			      <van-tag plain type="danger">标签</van-tag>
			    </template>
			    <template #footer>
			      <van-button size="mini">按钮</van-button>
			      <van-button size="mini">按钮</van-button>
			    </template>
			  </van-card>
			  
			  <van-card
			    num="2"
			    price="2.00"
			    desc="描述信息"
			    title="商品标题"
			    thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
			  >
			    <template #tags>
			      <van-tag plain type="danger">标签</van-tag>
			      <van-tag plain type="danger">标签</van-tag>
			    </template>
			    <template #footer>
			      <van-button size="mini">按钮</van-button>
			      <van-button size="mini">按钮</van-button>
			    </template>
			  </van-card>
		  </van-tab>
		</van-tabs>
	
		<div id="home">
			<van-tabbar v-model="active">
				<van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
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
		
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				value:3.5,
				active: 0,
				items: [{ text: '美食外卖' }, { text: '宿舍神器' },{ text: '教辅推荐' }, { text: '衣帽裤鞋' }],
			}
		},
		name:'home',
		methods:{
			toPick(){
				this.$router.push("/pick")
			},
			toMessage(){
				this.$router.push("/message")
			},
			toMine(){
				this.$router.push('/mine')
			},
			onClickLeft() {
			  this.$router.push("/friends")
			},
			onClickRight() {
			  Toast('扫一扫');
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
	    line-height: 100px;
	    text-align: center;
	    background:linear-gradient(to right, #b4d4e8, #7cd0d1);
	  }
	  .me-content{
	  	padding: 0 17px 30px 17px;
	  	background: #FFFFDF;
	  	
	  }
	  .info{
	  	display: flex;
	  	align-items: center;
	  	justify-content: space-between;
	  	/* padding-bottom: 20px; */
	  }
	  .info img{
	  	height: 90px;
	  	width: 90px;
	  	border-radius: 50%;
	  	margin-right: 20px;
	  	padding: 10px 0 10px 10px;
	  }
	  /* 按钮*/
	  
	  .des{
	  	padding:20px 20px ;
	  	background: #faebc1;
	  	border-radius: 5%;
	  	opacity: .8;
	  }
	  .des h2{
	  	font-size: 24px;
	  	font-weight: bold;
	  	
	  }
	  .des span{
	  	padding: 10px 0 15px 0;
	  	display: block;
	  	/* border-radius: 50%; */
	  	
	  }
	  .des p{
	  	line-height: 24px;
	  	
	  }
	  .des img{
	  	height: 200px;
	  	width: 300px;
	  }
	  
	  .user-tag2 {
	  	padding: 20px 0;
	  }
	  .user-tag2 span{
	  	font-size: 14px;
	  	margin-right: 15px;
	  	/* margin-top: 50px; */
	  	color: #3f4234;
	  	
	  }
	  .user-tag2 a{
	  	/* font-size: 18px; */
	  	margin-right: 15px;
	  	color: #5c262a;
	  	
	  }
</style>
