import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import config from '@/config/config.json'

//设置地址
var url = config.webSocket;
// 设置 STOMP 客户端
var stompClient = null;
// 设置 WebSocket 进入端点
var SOCKET_ENDPOINT = url + "/mydlq";
// 设置订阅消息的请求地址前缀
var SUBSCRIBE_PREFIX = "/queue";
// 设置订阅地址
var SUBSCRIBE = "";
// 设置服务器端点，访问服务器中哪个接口
var SEND_ENDPOINT = "/app/test";

export default {
  /* 进行连接 */
  connect(vm) {
    // 设置 SOCKET  
    var socket = new SockJS(SOCKET_ENDPOINT);
    // 配置 STOMP 客户端
    stompClient = Stomp.over(socket);
    // STOMP 客户端连接
    stompClient.connect({}, function (frame) {
      console.log("连接成功");

      /* 订阅信息，将收到的内容展示进行展示 */
      SUBSCRIBE = SUBSCRIBE_PREFIX + '/test';
      // 输出订阅地址
      console.log("设置订阅地址为：" + SUBSCRIBE);
      // 执行订阅消息，客户端想要接受来自服务器的消息推送就必须订阅相关的url
      //第一个参数 为服务器 @SendTo 匹配的 URL，字符串
      //第二个参数是接受到服务器的消息之后执行的回调函数
      stompClient.subscribe('/user/queue/test', function (responseBody) {
        var receiveMessage = JSON.parse(responseBody.body);
        //挂载数据
        vm.chatRoom.list.push({component:'leftMsg',content:receiveMessage.content})
      });
    }, (err) => {
      console.log(err);
    });
  },

  /* 断开连接 */
  disconnect() {
    stompClient.disconnect(function () {
      console.log("断开连接");
    });
  },

  /* 发送消息并指定目标地址 */
  sendMessageNoParameter(data) {
    // 设置发送的内容
    const sendContent = data.msg;
    // 设置发送的用户
    const sendUser = data.user;
    // 设置待发送的消息内容
    const message = '{"targetUser":"' + sendUser + '", "destination": "' + SUBSCRIBE + '", "content": "' + sendContent + '"}';
    // 发送消息
    //第一个参数 为服务器 controller中 @MessageMapping，必须参数
    //第二个参数是发送信息的header是js对象，可选参数
    //第三个参数是要发送的信息，可选参数
    stompClient.send(SEND_ENDPOINT, {}, message);
  }
}