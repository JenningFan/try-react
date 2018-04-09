### 书中摘抄

1、可以用 JavaScript 对象来描述所有能用 HTML 表示的 UI 信息 => **所谓的 JSX 其实就是 JavaScript 对象**。JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。
=> React.js 可以用 JSX 来**描述你的组件长什么样的**。

2、React.js 中一切皆**组件** => 在编写 React.js 组件的时候，一般都需要继承 React.js 的 Component

3、一个组件类必须要实现一个 `render` 方法，这个 render 方法必须要返回一个 `JSX 元素`。

4、{} 内可以放任何 JavaScript 的代码，包括**变量、表达式计算、函数执行等等。也可以放jsx**

5、自定义的组件都必须要用**大写字母**开头，普通的 HTML 标签都用小写字母开头。

6、一定要使用 React.js 提供的 setState 方法，它接受一个对象或者函数(callback)作为参数。只需要传入需要更新的部分就可以了，而不需要传入整个对象。=> 当你调用 setState 的时候，React.js 并不会马上修改 state。（**异步的**）而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新。

7、如果你想在事件函数(例如class中有个方法`handleOnClick(){console.log(this)}`)当中使用当前的实例(即`this`指向当前对象，而不是在严格模式下指向`undefined`)，你需要**手动地将实例方法 bind 到当前实例上**再传入给 React.js。