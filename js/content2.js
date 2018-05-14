console.log('扩展2')

chrome.extension.onConnect.addListener(function (port) {
  console.log(port)
  if (port.name === 'extensionOne'){
    port.onMessage.addListener(function (res) {
      if (res.data === 'hello') {
        console.log(res.data)
        port.postMessage({
          msg: 'hello two'
        })
      } else {
        console.log(res.data)
      }
    })
  }
})