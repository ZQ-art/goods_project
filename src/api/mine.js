import axios from 'axios'
import config from '@/config/config.json'

export default {
  //发送个人信息
  async send(data, vm) {
    vm.$store.commit("changeLayShow");

    await apiWarp('/userInfo', data, 'post').then((res) => {
      console.log(res);
      let data=res.data
      if(data.status){
        vm.$notify({
          type:'success',
          message:data.msg
        })
      }else{
        vm.$notify({
          type:'danger',
          message:data.msg
        })
      }
    }).catch(err => {
      console.log(err);
    })

    setTimeout(() => {
      vm.$store.commit("changeLayShow");
    }, 500)
  },
  
  //接受个人信息
  async getInfo(data,vm){
    vm.$store.commit("changeLayShow");

    await apiWarp('/getDetailInfo',data,'post').then((res)=>{
      console.log(res);
      //插入数据
      if(res.data==null){
        vm.$notify({
          type:'warning',
          message:'请创建个人信息'
        })
      }else{
        vm.personalData=res.data
      }
      
    }).catch((err)=>{
      console.log(err);
    })

    setTimeout(()=>{
      vm.$store.commit("changeLayShow");
    },500)
  },

  //上传文件
  async fileUpload(data,vm){
    vm.$store.commit("changeLayShow");

    await axios.post(config.fileUpload+'/uploadFile',data,{
      headers:{'Content-Type':'multipart/form-data'}
    }).then((res)=>{
      console.log(res);
      vm.$store.commit('getImgUrl',res.data)
    }).catch((err)=>{
      console.log(err);
    })

    setTimeout(()=>{
      vm.$store.commit("changeLayShow");
    },500)
  }
}

const apiWarp = (url, data, method) => {
  return new Promise(async (resolve, reject) => {
    try {
      let target = config.severAddress + url
      if (method == 'get') {
        resolve(await axios.get(target + data))
      } else if (method == 'post') {
        resolve(await axios.post(target, data))
      }
    } catch (err) {
      reject(err)
    }
  })
}