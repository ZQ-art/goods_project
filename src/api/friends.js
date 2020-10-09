import axios from 'axios'
import config from '@/config/config.json'

export default {
  //请求所有好友
  async friendsApi(data, vm) {
    vm.$store.commit("changeLayShow");

    await apiWarp('/findByUserName', data, 'post').then((res) => {
      console.log(res);
      //插入好友数据
      vm.userList = res.data
    }).catch(err => {
      console.log(err);
    })

    setTimeout(() => {
      vm.$store.commit("changeLayShow");
    }, 500);
  },
  //添加新好友
  async friendAddApi(data, vm) {
    vm.$store.commit("changeLayShow");

    await apiWarp('/apply', data, 'post').then((res) => {
      console.log(res);
      let data = res.data;
      if (data.status) {
        vm.$notify({
          type: 'success',
          message: data.msg
        })
      } else {
        vm.$notify({
          type: 'warning',
          message: data.msg
        })
      }
      //关闭添加好友窗口
      vm.addNewFriendData.flag = false
    }).catch((err) => {
      console.log(err);
    })

    this.friendAcceptApi(data, vm)
  },
  //好友邀请接受
  async friendAcceptApi(data, vm) {
    await apiWarp('/updateFlag', data, 'post').then((res) => {
      console.log(res);
      let data = res.data
      if (data.status) {
        vm.$notify({
          type: 'success',
          message: data.msg
        })
      } else {
        vm.$notify({
          type: 'warning',
          message: data.msg
        })
      }
    }).catch((err) => {
      console.log(err);
    })

    setTimeout(() => {
      vm.$store.commit("changeLayShow");
    }, 500);

    vm.fresh()
  },
  //删除好友
  async friendKillApi(data, vm) {
    vm.$store.commit("changeLayShow");

    await apiWarp('/deleteFriend', data, 'post').then((res) => {
      console.log(res);
      let data = res.data
      if (data.status) {
        vm.$notify({
          type: 'success',
          message: data.msg
        })
      } else {
        vm.$notify({
          type: 'warning',
          message: data.msg
        })
      }
    }).catch((err) => {
      console.log(err);
    })

    setTimeout(() => {
      vm.$store.commit("changeLayShow");
    }, 500);

    vm.fresh()
  }
}

const apiWarp = (url, data, method) => {
  return new Promise(async (resolve, reject) => {
    try {
      let target = config.severAddress
      if (method == "get") {
        resolve(await axios.get(target + url));
      } else if (method == "post") {
        resolve(await axios.post(target + url, data));
      }
    } catch (err) {
      reject(err);
    }
  });
};