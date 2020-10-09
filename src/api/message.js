import axios from "axios";
import config from "@/config/config.json";
import socket from "./websocket";

export default {
  //请求所有信息
  async freshMessage(data, vm) {
    vm.$store.commit("changeLayShow");

    await apiWarp("/findByUserName", data, "post")
      .then((res) => {
        console.log(res);
        let data = res.data;
        //插入数据
        vm.userList = data;
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      vm.$store.commit("changeLayShow");
    }, 500);
  },
  //具体历史信息
  async specificMessage(data, vm) {
    vm.$store.commit("changeLayShow");

    await apiWarp("/findChatRecord", data, "post")
      .then((res) => {
        console.log(res);
        if (res.data != null) {
          res.data.forEach((val) => {
            if (val.fromUser === data.friendName) { //好友发送的消息
              vm.chatRoom.list.push({
                component: 'leftMsg',
                content: val.content
              })
            } else { //用户自己发送的消息
              vm.chatRoom.list.push({
                component: 'rightMsg',
                content: val.content
              })
            }
          })
        } else {
          vm.$notify({
            type: "warning",
            message: '连接错误',
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      vm.$store.commit("changeLayShow");
    }, 500);
  },

  //websocket连接交流
  async chatConnect(data, vm) {
    vm.$store.commit("changeLayShow");
    //存储session
    await apiWarp("/websocket", data, "post")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    //建立连接
    socket.connect(vm);

    setTimeout(() => {
      vm.$store.commit("changeLayShow");
    }, 2000);
  },

  //websocket发送消息
  chatSend(data, vm) {
    socket.sendMessageNoParameter(data)
  },

  //websocket断开连接
  chatDisconnect() {
    socket.disconnect()
  }
};

const apiWarp = (url, data, methods) => {
  return new Promise(async (resolve, reject) => {
    try {
      let target = config.severAddress + url;
      if (methods === "post") {
        resolve(await axios.post(target, data));
      } else if (methods === "get") {
        resolve(await axios.get(target));
      }
    } catch (err) {
      reject(err);
    }
  });
};