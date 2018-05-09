var view = chrome.extension.getViews();
var background = chrome.extension.getBackgroundPage();
var grobalObj = {
  page: '123'
}
console.log(background.pageObj)
$('.container').append('<div>'+background.pageObj.admain+'</div>').show();



// background.getAllCookie(function(cookies) {
//   console.log(cookies)
// })

background.setCookie('tokens', '111122222');
background.getCookie('tokens', function (cookie) {
  console.log(cookie)
})
$('.tabGet').on('click', function () {
  chrome.tabs.captureVisibleTab(function(dataUrl) {
    $('.container').append('<img style="width:100%;" src="'+dataUrl+'" alt="截图" />')
  })
})

  chrome.history.addUrl( {url:'https://www.baidu.com'})
  chrome.history.addUrl( {url:'https://www.baidu.com'})
$('.showHistory').on('click', function () {
  console.log('天假')
  chrome.history.search({text: ''},function (arr) {
    console.log(arr)
  })
})

