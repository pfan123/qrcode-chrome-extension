function $(id){
	return id ? document.getElementById(id):null;
}

function cssCode(obj){
	this.elem = obj;
	this.code = "";
	this.init();
}
cssCode.prototype = {
	constructor:"cssCode",
	compress:function(){
		var code = this.elem.value;
 		if (!this.code || this.code == "") this.code = code;//先保存起来  以方便后续还原
            code = code.replace(/(\n|\t|\s)*/ig, '$1');
            code = code.replace(/\n|\t|\s(\{|\}|\,|\:|\;)/ig, '$1');
            code = code.replace(/(\{|\}|\,|\:|\;)\s/ig, '$1');
            return code;		
	},
	multiline:function(){
		var code = this.compress();
            code = code.replace(/(\{)/ig, ' $1');
            code = code.replace(/(\{|\;)/ig, '$1\n\t');
            code = code.replace(/\t*(\})/ig, '$1\n');
            code = code.replace(/(\*\/)/ig, '$1\n');
            return code;
	},
	oneline:function(){
 		var code = this.compress();
            code = code.replace(/(\})/ig, '$1\n');
            code = code.replace(/(\*\/)/ig, '$1\n');
            return code;
	},
	recover:function(){
		return (this.code) ? this.code : this.elem.value;
	},
	init:function(){
		var self = this;
		$("compress").addEventListener("click",function(){
			var code = self.compress();
			self.elem.value = code;
		},false);
		$("multiline").addEventListener("click",function(){
			var code = self.multiline();
			self.elem.value = code;			
		},false);
		$("oneline").addEventListener("click",function(){
			var code = self.oneline();
			self.elem.value = code;			
		},false);		
		$("recover").addEventListener("click",function(){
			var code = self.recover();
			self.elem.value = code;			
		},false);			
	}

}
var code = new cssCode($('cssCode'));