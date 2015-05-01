等待图片资源加载完成后执行函数的jQuery插件

使用方法：


    $(function(){
        $('img').hide();
        $('div.imgLoad').hide();
 
        $('body').imgLoad({
            callBack:function(){
                $('#info').html('图片加载完成');
                $('img').show();
                $('div').show();
            }
        });
 
 
    });


使用说明：
<pre>
$('body').imgLoad({
    //可选参数，需要确定加载完毕的图片选择器默认class为imgLoad。
    imgEle:'.imgLoad',
    //callBack为确定图片加载完成后执行的函数,默认为空。
    callBack:function(){}
});
</pre>
