/*
* 支持3种排版，按钮在上的用户输入模式，及按钮在下的用户选择模式,关闭按钮在右上角的tip模式
*
 */


var template=require('./popWindow.html');
require('./popWindow.css');
template= _.template(template);
$.extend($,{
   popWindow:function(options){
        var defaultOptions={
                title:'',
                content:'',
                yes:'确认',
                no:'',
                uniqID:$.uniqID(),
                type:1,
                closeBtn:false,
                tapMask:false,
                callback: $.noop()
            },
            opt={},
            win;
        opt= $.extend(defaultOptions,options);
        if(opt.type==1) opt.no=opt.no||'取消';
        win=$(popWindow(opt));
        $('body').append(win).on('tap.popWindow'+opt.uniqID,'.yes_btn,.no_btn,.pop_window_wrap',function(e){
            var pos=false,
                obj=$(e.target),
                obj2=$(e.currentTarget);

            if(obj.hasClass('pop_window_wrap') && opt.tapMask){
                win.remove();
                $('body').off('tap.popWindow'+opt.uniqID);
                return false;
            }
            if(obj2.hasClass('yes_btn') || obj2.hasClass('no_btn') ) {
                if (obj2.hasClass('yes_btn')) {
                    pos = true
                }
                if ($.type(opt.callback) == 'function') {
                    if (opt.callback(pos) !== false) {
                        win.remove();
                        $('body').off('tap.popWindow'+opt.uniqID);
                    }
                } else {
                    win.remove();
                    $('body').off('tap.popWindow'+opt.uniqID);
                }
            }
        });
    }
});
