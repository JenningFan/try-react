### 书中摘抄

1、可以用 JavaScript 对象来描述所有能用 HTML 表示的 UI 信息 => **所谓的 JSX 其实就是 JavaScript 对象**。JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。
=> React.js 可以用 JSX 来**描述你的组件长什么样的**。所谓的 JSX 其实就是 **JavaScript 对象**

2、React.js 中一切皆**组件** => 在编写 React.js 组件的时候，一般都需要继承 React.js 的 Component

3、一个组件类必须要实现一个 `render` 方法，这个 `render` 方法必须要返回一个 `JSX 元素`。但这里要注意的是，必须要用一个外层的 JSX 元素把所有内容**包裹**起来。返回并列多个 `JSX 元素`是不合法的。

4、表达式插入：在 JSX 当中你可以插入 JavaScript 的表达式，表达式返回的结果会相应地渲染到页面上。表达式用 `{}` 包裹。`{}` 内可以放任何 JavaScript 的代码，包括**变量、表达式计算、函数执行等等。也可以放jsx**。  
   表达式插入不仅仅可以用在标签内部，也可以用在标签的属性上，例如：
   ```JavaScript
   render() {
        const className = 'header'
        return (
            <div className={className}>
                <h1>React 小书</h1>
            </div>
        )
   }
   ```

5、自定义的组件都必须要用**大写字母**开头，普通的 HTML 标签都用小写字母开头。

6、当我们要改变组件的状态的时候，不能直接用 `this.state = xxx` 这种方式来修改，如果这样做 React.js 就没办法知道你修改了组件的状态，它也就没有办法更新页面。所以一定要使用 React.js 提供的 setState 方法，它接受一个对象或者函数(callback)作为参数。只需要传入需要更新的部分就可以了，而不需要传入整个对象。=> 当你调用 setState 的时候，React.js 并不会马上修改 state。（**异步的**）而是把这个对象放到一个更新队列里面，稍后才会从队列当中把新的状态提取出来合并到 state 当中，然后再触发组件更新。

7、如果你想在事件函数(例如class中有个方法`handleOnClick(){console.log(this)}`)当中使用当前的实例(即`this`指向当前对象，而不是在严格模式下指向`undefined`)，你需要**手动地将实例方法 bind 到当前实例上**再传入给 React.js。

8、`JQuery`: 数据变化 -> 手动操作 DOM 更新界面（数据变化后手动改变视图），手动管理数据和 DOM 之间的关系会导致代码可维护性变差、容易出错。=> 使用Jquery的时期都喜欢将HTML结构直接写在`.html`文件中，但是像React、Vue等组件化思维的开发框架则喜欢用JavaScript去生成HTML DOM结构，`.html`文件只是一个没有任何其他元素标签的载体，所有包括HTML、CSS、JS等内容都高内聚地封装在了一个文件（对象）中，React中是jsx，vue中是.vue文件。jsx或.vue文件最终都被loader编译成一个js编写的render函数，通过render函数去在页面上渲染组件，即组件中对应的结构(HTML)、样式(CSS)以及交互逻辑（js）都是由render函数去负责完成。

9、组件化可以帮助我们解决前端结构的复用性问题，整个页面可以由这样的不同的组件组合、嵌套构成。

10、`static defaultProps`作为点赞按钮组件的类属性，里面是对 props 中各个属性的默认配置。
props 一旦传入，你就不可以在组件内部对它进行修改。但是你可以通过父组件主动重新渲染的方式来传入新的 props，从而达到更新的效果。

11、`state` 是让组件控制自己的状态，`props` 是让外部对组件自己进行配置。尽量少地用 state，尽量多地用 props。

12、如果你往 `{}` 放一个数组，React.js 会帮你把数组里面一个个元素罗列并且渲染出来。

13、拿到一个需求以后，我们要做的第一件事情就是理解需求、分析需求、划分这个需求由哪些组件构成。

14、划分组件的目的性是为了代码可复用性、可维护性。

15、React.js 中的 `<input />` 、`<textarea />`、`<select />` 等元素的 value 值如果是受到 React.js 的控制，那么就是受控组件。


```JavaScript
// React.createElement 中实例化一个 Header
const header = new Header(props, children)
// React.createElement 中调用 header.render 方法渲染组件的内容
const headerJsxObject = header.render()

// ReactDOM 用渲染后的 JavaScript 对象来来构建真正的 DOM 元素
const headerDOM = createDOMFromObject(headerJsxObject)
// ReactDOM 把 DOM 元素塞到页面上
document.getElementById('root').appendChild(headerDOM)
```
16、如上代码中所示，React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的**挂载**，其实 React.js 内部对待每个组件都有这么一个过程，也就是初始化组件 -> 挂载到页面上的过程。   
React.js 控制组件在页面上挂载和删除过程里面几个方法：`componentWillMount`：组件挂载开始之前，也就是在组件**调用 render 方法之前**调用。`componentDidMount`：组件挂载完成以后，也就是 **DOM 元素已经插入页面**后调用。`componentWillUnmount`：组件对应的 **DOM 元素从页面中删除之前**调用。  

17、我们一般会把组件的 `state` 的初始化工作放在 `constructor` 里面去做；在 `componentWillMount` 进行组件的启动工作，例如 **Ajax 数据拉取、定时器的启动**；组件从页面上销毁的时候，有时候需要一些数据的清理，例如**定时器的清理**，就会放在 `componentWillUnmount` 里面去做。有些组件的启动工作是依赖 DOM 的，例如**动画的启动**，而 componentWillMount 的时候组件还没挂载完成，所以没法进行这些启动工作，这时候就可以把这些操作放在 `componentDidMount` 当中。  
18、React.js 当中提供了 `ref` 属性来帮助我们获取**已经挂载**的元素的 DOM 节点，如：    
```JavaScript
class AutoFocusInput extends Component {
  componentDidMount () {
    this.input.focus()
  }

  //当input元素在页面上挂载完成以后，React.js就会调用这个函数，并且把这个挂载以后的DOM节点作为参数传给这个函数，函数体内就能引用到该DOM对象了
  render () {
    return (
      <input ref={(input) => this.input = input} />
    )
  }
}

ReactDOM.render(
  <AutoFocusInput />,
  document.getElementById('root')
)
```
基本原则：能不用 ref 就不用。特别是要避免用 ref 来做 React.js 本来就可以帮助你做到的页面自动更新的操作和事件监听。
