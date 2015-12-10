# popWindow的使用

所有content都支持是html文本

## 模拟Alert框

### 方式一 基本alert框（只有alert内容）
```javascript
$.popWindow({
    content:'window1',
    type:2
})
```
### 方式二， 有标题的alert框
```javascript
$.popWindow({
    title:'title',
    content:'window1',
    type:2
})
```

### 方式三 带回调的aler框
```javascript
$.popWindow({
    content:'window1',
    type:2,
    callback:function(){
        alert(0)
    }
})
```

### 方式四 带回调和关闭按钮的aler框
```javascript
$.popWindow({
    content:'window1',
    type:2,
    closeBtn:true,
    callback:function(){
        alert(0)
    }
})
```

### 方式五 自定义确认按钮的文本
```javascript
$.popWindow({
    content:'window1',
    type:2,
    yes:'aaaaaa',
    closeBtn:true,
    callback:function(){
        alert(0)
    }
})
```

### 方式六 点击遮罩层关闭弹窗，设置 tapMask=true
```javascript
$.popWindow({
    content:'window1',
    type:2,
    yes:'aaaaaa',
    tapMask:true,
    closeBtn:true,
    callback:function(){
        alert(0)
    }
})
```

## 模拟confirm 框

和alert框的主要区别是，confim框有2个按钮，参数分别为：yes和no，默认yes=确认，no=取消

和alert一样，可以定制按钮的文案

具体如下：

```javascript
$.popWindow({
    content:'window1',
    type:2,
    yes:'确认'
    no:'取消'
    callback:function(bl){
        if(bl){
            alert(‘确认’)
        }else{
            alert('取消')
        }
    }
})
```

## 接受用户输入的类型提示框

这个类型的弹窗，确认和取消按钮分别在左右上角

而接收用户输入交互发生在弹窗的内容区域，可以自己自定义content内容

具体如下：

```javascript
$.popWindow({
    content:'请输入....<textarea placeholder="请输入..."></textarea>',
    yes:'确认'
    no:'取消'
    callback:function(bl){
        if(bl){

        }
    }
})
```

