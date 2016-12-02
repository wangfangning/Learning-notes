var _self =  this ;
_self.width = 640; // 璁剧疆榛樿鏈€澶у搴�
_self.fontSize = 100; // 榛樿瀛椾綋澶у皬
_self.widthProportion =  function (){ var p = (document.body&&document.body.clientWidth||document.getElementsByTagName("html")[0].offsetWidth)/_self.width;return p>1?1:p<0.5?0.5:p;};
_self.changePage =  function (){
	document.getElementsByTagName("html")[0].setAttribute("style","font-size:"+_self.widthProportion()*_self.fontSize+"px !important");
}
_self.changePage();
		window.addEventListener('resize', function (){_self.changePage();}, false );