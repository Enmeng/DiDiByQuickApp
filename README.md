# 快应用实现的滴滴快车首页和用户配置页面
## 布局问题
自适应屏幕的大小，没有自定义布局的大小
## CSS问题
position只能使用fixed，而relative和absolute这些都不可以用
使用border-[left|right|top|bottom]-[width|color]没有反应（官网说支持这些样式设置）
justify-content的值不能为space-around
## js问题
操作DOM只能在onReady之后，onInit中可以操作数据