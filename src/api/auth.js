import axios from 'axios'

export default {
  loginApi(address, data) {
    return axios.post(address, data)
  },
  registerApi(address, data) {
    return axios.post(address, data)
  },
  phoneApi(address) {
    return axios.get(address)
  }
}