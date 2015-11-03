# popWindow
触屏弹窗组件

#参数列表

title:
弹窗标题，可以是html

content:
弹窗正文，可以是html

yes:'确认'
确认按钮的文案

no:''
取消按钮的文案，如果为空则没有取消按钮

type:1,
弹窗类型

1：为按钮在标题的两侧
2：按钮在弹窗底部

closeBtn:false
是否在右上角显示关闭按钮

tapMask:false
是否允许点击mask关闭窗口

callback:
取消（关闭）和确认按钮按钮点击后的回调，回传参数bool，确认为ture，其他false
