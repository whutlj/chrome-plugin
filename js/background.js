setTimeout(function() {
  chrome.browserAction.setTitle({title: '新标题'})
}, 2000);

var pageObj ={
  admain: 'https://www.newrank.cn'
}

var expires = parseInt(new Date().getTime() / 1000 + 24 * 60 * 60) 
// chrome.cookies.set({
//   url: 'http://localhost:209',
//   name: 'token',
//   value: '123456',
//   expirationDate: expires
// })

// setTimeout(function() {
//   chrome.cookies.get({
//     url: 'http://localhost:209',
//     name: 'token'
//   }, function (cookies) {
//     console.log(cookies)
//   })
// }, 1000)

function setCookie(name, value, expires) {
  var expirationDate = null
  if (expires) {
    expirationDate = new Date().getTime() / 1000 + parseInt(expires) * 60 * 60
  }
  chrome.cookies.set({url: 'http://test.a.newrank.cn', name: name, value: value,domain:'.newrank.cn',path:'/',expirationDate: expirationDate,httpOnly: true})
  chrome.cookies.set({url: 'http://test.a.newrank.cn', name: name, value: value,domain:'.newrank.cn',path:'/xdnphb',expirationDate: expirationDate,httpOnly: true})
}

function getCookie(name, fn) {
  chrome.cookies.get({url: 'http://test.a.newrank.cn',name: name}, function(cookies) {
    fn(cookies)
  })
}
function getAllCookie(fn){
  chrome.cookies.getAll({}, function(cookies){
    fn(cookies)
  })
}
function randomColor(params) {
  var color = '';
  for (var index = 0; index < 3; index++) {
    var a =  Math.floor(Math.random() * 256).toString(16)
    a = a.length === 1 ? '0' + a : a;
    color += a;
  }
  return "#" + color;
}

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.executeScript(null, {
    code: 'document.body.bgColor = "#ff6200";var ele = document.querySelector(".notice-wrapper .notice-p"); ele.style.fontSize="20px";ele.style.color="'+ randomColor() +'"'
  })
})

function sendRequest2Tab(params) {
  // 第一个参数为窗口的id，默认为当前窗口
  chrome.tabs.getSelected(null, function (tab) {
    params.tab = tab
    chrome.tabs.sendRequest(tab.id, params, function  (res) {
      console.log('发送消息给contentjs成功')
    })
  })
}


chrome.extension.onRequest.addListener(function (sendRequest, sender, senderResponse) {
  console.log(sendRequest)
  sendRequest2Tab({
    tab: '',
    data: 'bc-data'
  });
  senderResponse({
    name: 'background',
    age: 10,
    getCookie: true
  });
});
  // var notifications = webkitNotifications.createNotification(
  //         'img/ad.png',
  //         '标题',
  //         '内容'
  //       );
chrome.extension.onConnect.addListener(function (port) {
  console.log(port)
  var url =  chrome.extension.getURL('img/ad.png');
  console.log('图片地址' + url);
  if (port.name === 'extensionOne') {
    port.onMessage.addListener(function (res) {
      if (res.data === 'hello') {
        console.log(res.data)
        port.postMessage({
          msg: 'hello too'
        })
      } else {
        console.log('哈哈哈')
      
        // notifications.show();
      }
    })
  }
  port.onDisconnect.addListener(function (params) {
    console.log('断开连接')
  })
})

chrome.tabs.onCreated.addListener(function (tab) {
  console.log('创建了标签')
})
chrome.tabs.onUpdated.addListener(function (id, object) {
  console.log('标签更新完毕')
  if (object.status === 'loading') {
    console.log(object.url)
  }
})
$('body').append('<div>背景页</div>')