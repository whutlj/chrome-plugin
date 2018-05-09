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
