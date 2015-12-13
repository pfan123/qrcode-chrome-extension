var ulist = document.querySelector(".ulist").children;

for(var i=ulist.length;i--;){
	ulist[i].addEventListener("click",function(){
		var data = this.getAttribute("data-id");
		chrome.tabs.create({
			windowId : self.windowID,
			active: true,
			pinned: false,
			url : "html/"+data  //这里默认回去找这个页面
		},function(tab){
			console.log(tab);
		});
	},false)
}
