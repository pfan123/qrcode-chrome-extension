var btn = document.querySelector(".base64_btn"),
	base64Con = document.querySelector(".base64_con"),
    imgWarp = document.querySelector(".img_wrap"),
    copy = document.querySelector(".copy"),
    base64text = document.querySelector(".base64text");
function uploadfile(e){
   //e.target.files 要么是点击上传获取信息，要么是拖拽上传获取信息
   var fileList =  e.target.files || e.dataTransfer.files;
   if(fileList[0].type.indexOf("image") === -1){
      alert("您上传的不是图片，非法，请重新上传");
      return false;
   }
   //获取图片的Src
   var imgurl = window.URL.createObjectURL(fileList[0]),
      filesize = Math.floor(fileList[0].size/1024);
      if(filesize>1024*5){
        alert("上传大小不能超过5M");
        return false;
      }else{
          convertImageToBase64(imgurl,function(data){
             console.log(data);
              base64text.innerHTML = data;
          });

      }
}

btn.addEventListener("change",function(e){
   uploadfile(e)
},false);
copy.addEventListener("click",function(){
    base64text.focus();
    base64text.setSelectionRange(0,base64text.value.length);
    document.execCommand('copy','false',null);
    alert("复制成功");
},false);


 function getImageBase64(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, img.width, img.height);

      var dataURL = canvas.toDataURL("");
      return dataURL;
  }

 function convertImageToBase64(path, callback) {
    if (!path) {
        return;
    }


	var image = new Image();
  image.src = path;
	//canvas绘制跨域设置
	image.crossOrigin="Anonymous"
  image.onload =function() {
        var data = getImageBase64(image);
        if (typeof callback === 'function') {
          callback(data);
        }
    }
    imgWarp.innerHTML = "";
    var imgDOM = document.createElement('img');
        imgDOM.src = path;
    imgWarp.appendChild(imgDOM);
  }
	
function stopBubble(e){
	e.preventDefault();
	e.stopPropagation();
}	
document.addEventListener("dragover",function(e){stopBubble(e)},false);
document.addEventListener("dragenter",function(e){stopBubble(e)},false);
document.addEventListener("dragleave",function(e){stopBubble(e)},false);
document.addEventListener("drop",function(e){stopBubble(e)},false);
base64Con.addEventListener("drop",function(e){stopBubble(e);uploadfile(e)},false);

/**********http://www.zhangxinxu.com/wordpress/2011/04/js-range-html%E6%96%87%E6%A1%A3%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9%E9%80%89%E4%B8%AD%E3%80%81%E5%BA%93%E5%8F%8A%E5%BA%94%E7%94%A8%E4%BB%8B%E7%BB%8D/********/