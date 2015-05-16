/**
* @author shine
* @blog http://blog.ipsfan.com/
* @version 0.1
*/ 
(function($){
	$.fn.imgLoad=function(options){
		var defaults={
			imgEle:'.imgLoad',
			callBack:function(){}
		};

		opts=$.extend(defaults,options);
		var img=this.find(opts.imgEle),
			imgNum=img.length,
			imgSrcs=[],
			imgcounter=0;

		img.each(function(){
			if($(this).attr('src')){
				var imgSrc=$(this).attr('src');
				imgSrcs.push(imgSrc);
			}else{
				var urlStr=$(this).css('backgroundImage');
				var imgSrc=(urlStr.replace(/\"/g,'')).slice(4,-1);
				imgSrcs.push(imgSrc);
			};
		});
		$.each(imgSrcs,function(i,e){
			var imgDom=$('<img>');
			imgDom.attr('src',e);
			imgDom.get(0).onload=function(){
				imgcounter+=1;
				if(imgcounter===imgNum){
					opts.callBack();
				};
			};
		});
		
	};
})(jQuery)