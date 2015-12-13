//当browser action 图标被点击的时候触发，当browser action是一个popup的时候，这个事件将不会被触发。
chrome.browserAction.onClicked.addListener(function(tab) {	
	//打开工作页面;
	chrome.tabs.create({
		windowId : self.windowID,
		active: true,
		pinned: false,
		url : "html/qrcode.html"  //这里默认回去找这个页面
	},function(tab){
		console.log(tab);
	});
});
