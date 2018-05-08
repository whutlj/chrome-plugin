var background = chrome.extension.getBackgroundPage()
var grobalObj = {
  page: '123'
}
console.log(background.pageObj)
$('.container').append('<div>'+background.pageObj.admain+'</div>').show();
chrome.cookies.set({
  url: 'https://www.baidu.com',
  name: 'token',
  value: '123456'
})
