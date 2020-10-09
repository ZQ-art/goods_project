import axios from "axios";
import config from "@/config/config.json";

export default {
  //检查是否已经发出悬赏
  async checkPick(data, vm) {
    vm.$store.commit("changeLayShow");

    await apiWarp("/findByUserId", data, "post").then((res) => {
      console.log(res);
      if (res.data == null) {
        //没有悬赏数据
        vm.active++;
      } else {
        //有悬赏数据
        vm.$notify({
          type: "success",
          message: "已发出悬赏！",
        });
        vm.active += 2;
        vm.data = res.data; //插入悬赏数据
      }
    });

    setTimeout(() => {
      vm.$store.commit("changeLayShow");
    }, 500);
  },

  //发送悬赏
  async sendPick(data, vm) {
    vm.$store.commit("changeLayShow");
    await apiWarp("/postReward", data, "post")
      .then((res) => {
        console.log(res);
        let data = res.data;
        if (data.status) {
          vm.$notify({
            type: "success",
            message: data.msg,
          });
          vm.active++;
        } else {
          vm.$notify({
            type: "danger",
            message: data.msg,
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

  //请求所有悬赏
  async requestAll(data, vm) {
    vm.$store.commit("changeLayShow");

    await apiWarp("/getAllFalsePost", data, "post")
      .then((res) => {
        console.log(res);
        let data = res.data;
        if (data != null) {
          //插入悬赏数据
          vm.list = data;
        } else {
          vm.$notify({
            type: "danger",
            message: "连接错误！",
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

  //接受一个悬赏
  async acceptPick(data, vm) {
    vm.$store.commit("changeLayShow");

    await apiWarp("/receiveReward", data, "post")
      .then((res) => {
        console.log(res);
        let data = res.data;
        if (data.status) {
          vm.$notify({
            type: "success",
            message: data.msg,
          });
        } else {
          vm.$notify({
            type: "danger",
            message: data.msg,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      vm.$store.commit("changeLayShow");
    }, 500);
    //跳转悬赏
    this.requestAccept(
      {
        acceptId: data.acceptId,
      },
      vm
    );
  },

  //请求所有已经接下的悬赏
  async requestAccept(data, vm) {
    vm.$store.commit("changeLayShow");

    await apiWarp("/hasAcceptedById", data, "post")
      .then((res) => {
        console.log(res);
        let data = res.data;
        if (data.length != 0) {
          console.log(data);
          vm.acceptList = data;
          vm.step++;
        } else {
          vm.$notify({
            type: "danger",
            message: "没有接下任何悬赏",
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
