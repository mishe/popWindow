var template= _.template(require('./popWindow.html'));
require('./popWindow.css');
module.exports=function (options) {
    var defaultOptions = {
            title: '',
            content: '',
            yes: '确认',
            no: '',
            uniqID: $.uniqID(),
            type: 1,
            closeBtn: false,
            tapMask: false,
            callback: $.noop()
        },
        opt = {},
        win;
    opt = $.extend(defaultOptions, options);
    if (opt.type == 1) opt.no = opt.no || '取消';
    win = $(template(opt));
    $('body').append(win).on('tap.popWindow' + opt.uniqID, '.yes_btn,.no_btn,.pop_window_wrap,.close_btn', function (e) {
        var pos = false,
            obj = $(e.target),
            obj2 = $(e.currentTarget);

        if (obj.hasClass('pop_window_wrap') && opt.tapMask) {
            win.remove();
            $('body').off('tap.popWindow' + opt.uniqID);
            return false;
        }
        if (obj2.hasClass('yes_btn') || obj2.hasClass('no_btn') || obj2.hasClass('close_btn')) {
            if (obj2.hasClass('yes_btn')) {
                pos = true
            }
            if ($.type(opt.callback) == 'function') {
                if (opt.callback(pos) !== false) {
                    win.remove();
                    $('body').off('tap.popWindow' + opt.uniqID);
                }
            } else {
                win.remove();
                $('body').off('tap.popWindow' + opt.uniqID);
            }
        }
    })
    var obj=win.find('.pop_window');
    obj.css('margin-top',-obj.height()/2);
    $(window).on('popstate.popWindow'+ opt.uniqID,function(){
        win.remove();
        $('body').off('tap.popWindow' + opt.uniqID);
        $(window).off('popstate.popWindow'+ opt.uniqID);
    })
};
