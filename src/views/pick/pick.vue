<template>
	<div id="home">
		<van-nav-bar title="代取" left-arrow  @click-left="onClickLeft"  @click-right="onClickRight">
		  <template #right>
		    <van-icon name="search" size="23" />
		  </template>
		</van-nav-bar>
		
		<van-tabs v-model="activeName">
		  <van-tab title="悬赏代取" name="a">
			  <van-search
			    v-model="value"
			    shape="round"
			    background="#c5e9ea"
			    placeholder="请输入地点关键词"
			  />
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
				    <van-stepper v-model="stepper" step="0.5"/>
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
			      <van-button round block type="info" native-type="submit">
			        提交
			      </van-button>
			    </div>
			  </van-form>
			
		  </van-tab>
		  <van-tab title="有偿代取" name="b">
			  <van-search
			    v-model="value"
			    shape="round"
			    background="#c5e9ea"
			    placeholder="请输入地点关键词"
			  />
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
			  
		  </van-tab>
		
		</van-tabs>
		
		
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
	  		active: 1,
			checked: true,
			show: false,
			value: '',
			showPicker: false,
			myObject: '',
			timeLimit: '',
			stepper: 1,
			actions: [
			        { name: '南区快递点' },
			        { name: '北区快递点' },
					{ name: '29号楼外卖点' },
					{ name: '21号楼外卖点' },
			      ],
			columns: [
			        // 第一列
			        {
			          values: ['极重', '重', '中', '轻', '极轻'],
			          defaultIndex: 2,
			        },
			        // 第二列
			        {
			          values: ['极大','大', '中', '小', '极小'],
			          defaultIndex: 1,
			        },
			      ],
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
		onConfirm(value) {
			this.value = value;
			this.showPicker = false;
		},
		onSubmit(values) {
		    console.log('submit', values);
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
	
</style>