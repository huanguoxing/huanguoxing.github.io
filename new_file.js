	// 将以下代码添加到js入口函数内即可
	// 这里使用了微信自带的WeixinJSBridgeReady事件
	document.addEventListener('WeixinJSBridgeReady', function() {
	    document.getElementById('audios').play()
	})
	 