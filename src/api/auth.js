import axios from "axios";
import config from "@/config/config.json";

export default {
  loginApi: async (data, vm) => {
    //开启遮罩层
    vm.$store.commit("changeLayShow");
    //发送请求
    await apiWarp("/signIn", data, "post")
      .then((res) => {
        if (res.data.status) {
          //登录成功
          vm.$notify({
            type: "success",
            message: res.data.msg,
            duration: "1500",
          });
          vm.$router.push({
            name: "home",
          });
          //储存用户数据
          sessionStorage.setItem("userId", vm.loginData.userName);
          sessionStorage.setItem("token", res.data.token);
        } else {
          //失败
          vm.$notify({
            type: "danger",
            message: res.data.msg,
            duration: "1500",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
      //请求头像url
      await axios.post(config.fileUpload+'/getOssUrl',{userId:data.userName}).then((res)=>{
        console.log(res);
        let data=res.data
        if(data.status){
          vm.$store.commit('getImgUrl',res.data.msg)
        }else{
          vm.$notify({
            type:'warning',
            message:data.msg
          })
        }
      }).catch((err)=>{
        console.log(err);
      })
    //关闭遮罩层
    setTimeout(() => {
      vm.$store.commit("changeLayShow");
    }, 500);
  },
  async registerApi(data, vm) {
    //显示遮罩层
    vm.$store.commit("changeLayShow");
    await apiWarp('/signUp', data, 'post')
      .then((res) => {
        if (res.data.status) {
          //注册成功
          vm.$notify({
            type: "success",
            message: res.data.msg,
            duration: "1500",
          });
          //跳转登录
          vm.loginPage = true;
          //清除数据
          vm.clearValue(vm.registerData);
          vm.vertify.input = "";
          vm.vertify.result = "";
        } else {
          //失败
          vm.$notify({
            type: "danger",
            message: res.data.msg,
            duration: "1500",
          });
        }
      });
    //关闭遮罩层
    setTimeout(() => {
      vm.$store.commit("changeLayShow");
    }, 500);
  },
  async phoneApi(data, vm) {
    await apiWarp('/send/' + data, '', 'get')
      .then((res) => {
        if (res.data.status) {
          vm.vertify.result = res.data.msg;
        }
        //防止短时间重复发送
        vm.$notify({
          type: "success",
          message: "60秒后可以再次发送",
          duration: 5000,
        });
        setTimeout(() => {
          vm.vertify.waiting = false;
        }, 59000);
      });
  },
};

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

// // /getSomthing
// const getNews = () => {
//   return new Promise(async resolve => {
//     let res = await askThings('/getSomething', 'GET');
//     vm.$notify({

//     })
//     if (res.status) {
//       resolve(res.data);
//     } else {
//       res.data = {
//         status: false;
//       }
//       resolve(res.data);
//     }
//   })
// }