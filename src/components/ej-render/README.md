# 关于render组件使用场景

> 可以用来渲染vnode

|props|描述|
|--|--|
|render|渲染函数，返回一个vnode,参数为createElement,attrs（render组件实例attrs）|
|default|默认值，当render不是函数时会渲染|