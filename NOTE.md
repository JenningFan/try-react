### 书中摘抄

1、可以用 JavaScript 对象来描述所有能用 HTML 表示的 UI 信息 => **所谓的 JSX 其实就是 JavaScript 对象**。JSX 是 JavaScript 语言的一种语法扩展，长得像 HTML，但并不是 HTML。
=> React.js 可以用 JSX 来**描述你的组件长什么样的**。所谓的 JSX 其实就是 **JavaScript 对象**

2、React.js 中一切皆**组件** => 在编写 React.js 组件的时候，一般都需要继承 React.js 的 `Component`，组件的本质就是一个ES6的class（类），ES5的构造function。

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
- React.js 控制组件在页面上挂载和删除过程里面几个方法：`componentWillMount`：组件挂载开始之前，也就是在组件**调用 render 方法之前**调用。`componentDidMount`：组件挂载完成以后，也就是 **DOM 元素已经插入页面**后调用。`componentWillUnmount`：组件对应的 **DOM 元素从页面中删除之前**调用。  
- 组件挂载的过程：
```JavaScript
-> constructor()
-> componentWillMount()
-> render()
//构造DOM元素插入页面
-> componentDidMount()
//..
//即将从页面删除
-> componentWillUnmount()
//从页面中删除
```

17、我们一般会把组件的 `state` 的初始化工作放在 `constructor` 里面去做；在 `componentWillMount` 进行组件的启动工作，例如 **Ajax 数据拉取、定时器的启动**；即一些**不依赖 DOM 操作**的组件启动的操作都可以放在 `componentWillMount` 中进行；组件从页面上销毁的时候，有时候需要一些数据的清理，例如**定时器的清理**，就会放在 `componentWillUnmount` 里面去做。有些组件的启动工作是依赖 DOM 的，例如**动画的启动**，而 componentWillMount 的时候组件还没挂载完成，所以没法进行这些启动工作，这时候就可以把这些操作放在 `componentDidMount` 当中。  
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
**基本原则**：能不用 ref 就不用。特别是要避免用 ref 来做 React.js 本来就可以帮助你做到的页面自动更新的操作和事件监听。  

19、使用自定义组件的时候，可以在其中嵌套 JSX 结构。嵌套的结构在组件内部都可以通过 `props.children` 获取到，这种组件编写方式在编写容器类型的组件当中非常有用。`props.children`其实是个数组，这种嵌套的内容成为了 props.children 数组的机制使得我们编写组件变得非常的灵活，我们甚至可以在组件内部把数组中的 JSX 元素安置在不同的地方，这样通过这个布局组件，就可以在各个地方高度复用我们的布局。如：
```JavaScript
class Layout extends Component {
  render () {
    return (
      <div className='two-cols-layout'>
        <div className='sidebar'>
          {this.props.children[0]}
        </div>
        <div className='main'>
          {this.props.children[1]}
        </div>
      </div>
    )
  }
}
```  

20、出于安全考虑的原因（XSS 攻击），在 React.js 当中所有的表达式插入的内容都会被自动转义，如`{<h1>react</h1>}`，表达式插入并不会把一个 `<h1>` 渲染到页面，而是把它的文本形式渲染了。所以React.js 提供了一个属性 `dangerouslySetInnerHTML`，可以让我们设置动态设置元素的 `innerHTML`：
```JavaScript
render () {
    return (
      <div
        className='editor-wrapper'
        dangerouslySetInnerHTML={{__html: this.state.content}} />
    )
  }
```   

21、在React.js 中你需要把 CSS 属性变成一个对象再传给元素：
```html
<h1 style={{fontSize: '12px', color: 'red'}}>React.js</h1>
```
`style`接受一个对象，这个对象里面是这个元素的 CSS 属性键值对，原来 CSS 属性中**带 `-` 的元素都必须要去掉 - 换成驼峰命名**，如 font-size 换成 fontSize。用对象作为 style 方便我们动态设置元素的样式。我们可以用 `props` 或者 `state` 中的数据**生成样式对象**再传给元素，然后用 setState 就可以修改样式。如：
```JavaScript
<h1 style={{fontSize: '12px', color: this.state.color}}>React.js 小书</h1>
setState({color: 'blue'})
```

22、在React.js中通过 `PropTypes`给组件的**参数做类型限制**，可以在帮助我们迅速定位错误，这在构建大型应用程序的时候特别有用；另外，给组件加上 propTypes，也让组件的开发、使用更加规范清晰。
使用方法：
```shell
npm install prop-types --save
```

```JavaScript
import PropTypes from 'prop-types'

在要使用类型检测的组件中使用:
class Comment extends Component {

   ...

  static propTypes = {
    comment: PropTypes.object
  }

  ...
}

```

23、React组件编写规范：
- 组件的私有方法都用 _ 开头，**所有事件监听的方法都用 `handle` 开头**。把事件监听方法**传给组件的时候，属性名用 `on` 开头**，例如：
```JavaScript
<CommentInput
  onSubmit={this.handleSubmitComment.bind(this)} />
```
- 组件的内容编写顺序：
1. static 开头的类属性，如 defaultProps、propTypes。
2. 构造函数，constructor。
3. getter/setter。
4. 组件生命周期。
5. _ 开头的私有方法。
6. 事件监听方法，`handle*`。
7. `render*`开头的方法，有时候 `render()` 方法里面的内容会分开到不同函数里面进行，这些函数都以 `render*` 开头。
8. `render()` 方法。

24、高阶组件：
- 作用：灵活地使用高阶组件，可以让你代码更加优雅，复用性、灵活性更强。
- 定义：高阶组件就是一个（可返回组件的）函数，传给它一个组件，它返回一个新的组件，这个新的组件会使用你传给它的组件作为**子组件**。例如：
```JavaScript
const NewComponent = higherOrderComponent(OldComponent)
```
```JavaScript
import React, { Component } from 'react'

//包装组件：NewComponent，被包装组件：形参WrappedComponent
export default (WrappedComponent) => {
  class NewComponent extends Component {
    // 可以做很多自定义逻辑
    constructor () {
      super()
      this.state = { data: null }
    }

    // 用props.data去
    render () {
      return <WrappedComponent data={this.state.data} />
    }
  }
  return NewComponent
}
```
- 如上代码所示，高阶组件其实就是为了**组件之间的代码复用**。组件可能有着某些相同的逻辑，把这些逻辑**抽离**出来，放到高阶组件中，以进行复用。高阶组件内部的包装组件和被包装组件之间通过 `props` 传递数据。
- 高阶组件运用了设计模式里面的装饰者模式。它通过组合的方式达到很高的灵活程度。

25、React中的context
- 定义：React.js中某个组件只要往自己的 context 里面放了某些状态，这个组件之下的所有子组件都直接访问这个状态而不需要通过中间组件的传递。一个组件的 context 只有它的**子组件**能够访问，它的父组件是不能访问到的，你可以理解每个组件的 context 就是瀑布的源头，只能往下流不能往上飞。
- 使用方法：（此处Index组件是所有子组件的父组件）
```JavaScript
//父组件：
class Index extends Component {
  //验证 getChildContext 返回的对象属性类型，如果你要给组件设置 context，那么 childContextTypes 是必写的。
  static childContextTypes = {
    themeColor: PropTypes.string
  }

  constructor () {
    super()
    this.state = { themeColor: 'red' }
  }

  //getChildContext 这个方法就是设置 context 的过程，它返回一个对象，就是 context，所有的子组件都可以访问到这个对象。
  getChildContext () {
    return { themeColor: this.state.themeColor }
  }

  render () {
    return (
      <div>
        <Header />
        <Main />
      </div>
    )
  }
}

//子组件
class Main extends Component {
  //子组件要获取 context 里面的内容的话，就必须写 contextTypes 来声明和验证你需要获取的状态的类型，是必写的，如果你不写就无法获取 context 里面的状态。
  static contextTypes = {
    themeColor: PropTypes.string
  }

  render () {
    {/** 通过 this.context.themeColor 获取到在 Index 放置的值为 red 的 themeColor */}
    return (
      <h1 style={{ color: this.context.themeColor }}>标题</h1>
    )
  }
}
```
- 缺点：context 打破了组件和组件之间通过 props 传递数据的规范，极大地增强了组件之间的耦合性。而且，就如全局变量一样，context 里面的数据能被随意接触就能被随意修改，每个组件都能够改 context 里面的内容会导致程序的运行不可预料。

26、纯函数（pure function）简介
- 概念：满足以下两点的函数为纯函数：
1. 函数的返回结果只**依赖于它的参数**。  
例子：
```JavaScript
//foo是非纯函数，因为它返回的结果依赖于外部变量a，他的返回值是不可预料的
const a = 1
const foo = (b) => a + b
foo(2) // => 3

//现在foo的返回结果只依赖于它的参数x和b，不管你外部发生了什么变化，foo(1, 2)永远是 3。他的值是可以预料的。
const a = 1
const foo = (x, b) => x + b
foo(1, 2) // => 3
```
2. 函数执行过程里面**没有副作用**。一个函数执行过程对产生了**外部可观察的变化**那么就说这个函数是有副作用的。  
例子：
```JavaScript
//此时foo是纯函数，解释：往里面传一个对象进行计算，计算的过程里面并不会对传入的对象进行修改，计算前后的 counter 不会发生任何变化
const a = 1
const foo = (obj, b) => {
  return obj.x + b
}
const counter = { x: 1 }
foo(counter, 2) // => 3
counter.x // => 1

//此时foo不是纯函数，解释：计算前 counter.x 是 1，但是计算以后 counter.x 是 2。foo 函数的执行对外部的 counter 产生了影响，它产生了副作用，因为它修改了外部传进来的对象，
const a = 1
const foo = (obj, b) => {
  obj.x = 2
  return obj.x + b
}
const counter = { x: 1 }
foo(counter, 2) // => 4
counter.x // => 2
```
- 除了修改外部的变量，一个函数在执行过程中还有很多方式产生外部可观察的变化，比如说调用`DOM API`修改页面，或者你发送了`Ajax`请求，还有调用 `window.reload`刷新浏览器，甚至是`console.log`往控制台打印数据也是副作用。
- 纯函数很严格，也就是说你几乎除了**计算数据**以外什么都不能干，计算的时候还不能依赖除了函数参数以外的数据。
- 纯函数的意义：纯函数非常“靠谱”，执行一个纯函数你不用担心它会干什么坏事，它不会产生不可预料的行为，也不会对外部产生影响。不管何时何地，你给它什么它就会乖乖地吐出什么。如果你的应用程序大多数函数都是由纯函数组成，那么你的程序**测试、调试**起来会非常**方便**。

27、Redux
- 注意：`Redux` 和 `React-redux` 并不是同一个东西。`Redux` 是一种**架构模式**（`Flux` 架构的一种变种），它不关注你到底用什么库，你可以把它应用到 `React` 和 `Vue`，甚至跟 `jQuery` 结合都没有问题。而 `React-redux` 就是把 **Redux 这种架构模式和 React.js 结合起来的一个库**，就是 Redux 架构在 React.js 中的体现。
- `redux`解决了什么问题：
 1. 不同组件有些场景下是需要共享某些状态（数据），还可能需要修改这些共享数据，那么一旦数据可以任意修改，所有对**共享状态的操作都是不可预料的**，出现问题的时候debug起来就非常困难，所以要使用`redux`对共享数据进行规范化操作，使得所以更改都变得**可跟踪**。
 2. 在`redux`中，不能直接操作共享数据，所有对数据的操作**必须通过 `dispatch` 函数**。它接受一个参数 `action`，这个 action 是一个普通的 JavaScript 对象，里面**必须包含一个 `type` 字段**来声明你到底想干什么。即任何组件想要修改共享数据，必须大张旗鼓地调用`dispatch`。
 3. `redux`的核心概念是`store`，通过`createStore(reducer)`函数生成`store`，该函数接收参数`reducer`是一个**函数**，这个函数规定是一个**纯函数**，它接受两个参数，一个是`state`，一个是`action`。`state`是保存共享数据的对象，`action`是描述如何更改数据的对象。`reducer`既充当了**获取初始化数据（state）的功能**，也充当了**生成更新数据(计算出新的state)的功能**，简单来说，`reducer`就是用来**描述数据的形态和相应的变更的工具函数**。
 4. `redux`的`store`暴露三个方法`dispatch`，`getState`，`subscribe`。通过 `store.getState`我们获取共享状态，而且我们约定只能通过 `store.dispatch`修改共享状态。`store` 也允许我们通过`store.subscribe`**监听数据变化**，一旦数据状态被修改（即我们调用了`dispatch`，与之对应的是`redux`内部帮我们调用了`reducer`），并进行后续的例如重新渲染页面的操作（即往`subscribe`中传入重新渲染页面的`function`，因在`react`中state的变化会引起重新渲染页面，所以在`react`中传入调用了`setState`的函数）。
 - 使用套路：
    ```JavaScript
    // 定一个 reducer
    function reducer (state, action) {
      /* 初始化 state 和 switch case */
    }

    // 生成 store
    const store = createStore(reducer)

    // 监听数据变化重新渲染页面
    store.subscribe(() => renderApp(store.getState()))

    // 首次渲染页面
    renderApp(store.getState()) 

    // 后面可以随意 dispatch 了，页面自动更新
    store.dispatch(...)
    ```
 28、React-redux
 - 背景：一个状态可能被多个组件依赖或者影响，而`React.js`并没有提供好的解决方案，我们只能把**状态提升**到依赖或者影响这个状态的所有组件的公共父组件上，后发现可以把共享状态放到父组件的`context`上，这个父组件下所有的组件都可以从`context`中直接获取到状态而不需要一层层地进行传递了。但是直接从 `context` 里面存放、获取数据增强了组件的耦合性（因为组件依赖于`context`，如果别人要用该组件，但是人家的组件树中没有`context`也没有`store`，就无法使用该组件了）；并且所有组件都可以修改`context`里面的状态，就像谁都可以修改共享状态一样，导致程序运行的不可预料。为了解决这一问题，可以将`redux`的`store`放在`react`的`context`中，即可由`store`来规范共享状态的修改。**所以`React-redux`就是将`react`的`context`和redux的`store`两个概念结合在一起利用。**
 - `Pure component`(也叫`Dumb Component`)
  1. 如果一个组件的渲染只依赖于外界传进去的 `props` 和自己的 `state`，而并不依赖于其他的外界的任何数据，也就是说像纯函数一样，给它什么，它就吐出（渲染）什么出来。**这种组件的复用性是最强的**，别人使用的时候根本不用担心任何事情，只要看看 `PropTypes` 它能接受什么参数，然后把参数传进去控制它就行了。这种组件叫做 `Pure Component`，因为它就像纯函数一样，可预测性非常强，**对参数（`props`）以外的数据零依赖，也不产生副作用**。
 - 高阶组件`connect` -- 连接`Dumb`组件和`context`的桥梁
  1. 为了解决从`react`中取出 `context`，再从`context`取出里面的 `store`，然后用里面的状态设置自己的状态这一**重复的逻辑**，所以`react-redux`中提供了一个高阶组件，因为它把 `Dumb` 组件和 `context` 连接（connect）起来了，所以取名为`connect`，高阶组件`connect`**负责和 `context` 打交道**，把里面数据取出来通过 `props` 传给 `Dumb` 组件。
  2. 但是每个传给`connect`的组件需要`store`里面的数据都不一样的，所以除了给高阶组件传入 `Dumb` 组件以外，**还需要告诉高级组件我们需要什么数据**，高阶组件才能正确地去取数据。所以我们要给`connect`传递一个函数`mapStateToProps`。
      ```JavaScript
        const mapStateToProps = (state, ownProps) => {
          return {
            themeColor: state.themeColor,
            themeName: state.themeName,
            fullName: `${state.firstName} ${state.lastName}`
            ...
          }
        }
      ```
      这个函数会**接受 `store.getState()` 的结果作为参数**，然后**返回一个对象**，这个对象是根据 `state` 生成的。**mapStateTopProps 相当于告知了 Connect组件应该如何去 `store` 里面取数据**，然后可以把这个函数的返回结果**传给被包装的组件**。（即用来配合你传递给`connect`函数的`Dumb component`一起使用的，`Dumb component`要接收什么样的`props`，`connect`函数是不知道的，所以要通过`mapStateToProps`函数告知`connect`传给`Dumb component`的`props`是什么（对应`return`的对象的`key`），`props`应从`store`中取哪些值（对应`return`的对象的`value`））
  3. 当我们传进去的`Dumb component`需要触发`dispatch`时，而`connect`函数也是不知道该传入什么`action`去触发`dispatch`，所以`mapDispatchToProps`是用来告诉`connect`函数我们传递的`Dumb component`需要如何触发 `dispatch`。
     ```JavaScript
     const mapDispatchToProps = (dispatch, ownProps) => {
       return {
         onSwitchColor: (color) => {
           dispatch({ type: 'CHANGE_COLOR', themeColor: color })
         }
       }
     }
     ```
     这个函数和`mapStateToProps`一样，它返回一个对象，这个对象内容会同样被 `connect` 当作是`props`参数传给被包装的组件。这个函数接受`dispatch`作为参数，你可以在返回的对象**内部定义一些函数，这些函数会用到特定的`action`来触发`dispatch`**
- `Provider`组件 -- provide store的组件
 1. `Provider`组件一般都是作为整个组件树（或APP）的*根节点*，它做的事情很简单，**它就是一个容器组件**，*会把嵌套的内容原封不动作为自己的子组件渲染出来*。它还会把外界传给它的`props.store`放到 `context`，这样子组件 `connect` 的时候都可以获取到。
 2. 用法：
 ```JavaScript
 ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
 )
 ```
 29. `Smart`组件和`Dumb`组件
  - `Dumb`组件最好不要依赖除了 `React.js` 和 `Dumb` 组件以外的内容。它们不要依赖 `Redux` 不要依赖`React-redux`。这样的组件的可复用性是最好的，其他人可以安心地使用而不用怕会引入什么奇奇怪怪的东西。当我们拿到一个需求开始划分组件的时候，要认真考虑每个被划分成组件的单元到底会不会被复用。如果这个组件可能会在多处被使用到，那么我们就把它做成` Dumb` 组件。`Dumb`基本只做一件事情，就是根据`props`进行渲染。
  - 另一种组件叫`Smart`组件。它们专门做数据相关的应用逻辑，和**各种数据打交道、和 Ajax 打交道，然后把数据通过 `props` 传递给 Dumb**，它们带领着 Dumb 组件完成了复杂的应用程序逻辑。`Smart`组件**不用考虑太多复用性**问题，它们就是用来执行特定应用逻辑的。`Smart` 组件可能组合了`Smart`组件和`Dumb`组件。但是`Dumb`组件尽量不要依赖 `Smart` 组件。因为 `Dumb` 组件目的之一是**为了复用**，一旦它引用了`Smart`组件就相当于带入了一堆应用逻辑，如果一个组件是 `Dumb`的，那么*它的子组件们都应该是 Dumb 的才对*。
  - 约定俗成的规则：所有的 `Dumb` 组件都放在 `components/` 目录下，所有的 `Smart` 的组件都放在 `containers/` 目录下。
  - 要根据应用场景不同划分组件，如果一个组件并**不需要太强的复用性，直接让它成为 `Smart` 即可**；否则就让它成为 `Dumb` 组件。
  - `Smart` 组件并不意味着完全不能复用，`Smart` 组件的复用性是依赖场景的，在特定的应用场景下是当然是可以复用 `Smart` 的。而 `Dumb` 则是可以跨应用场景复用，`Smart` 和 `Dumb` 都可以复用，只是程度、场景不一样。
  
  30. reducer文件
  - 把所有 `reducer` 抽出来放在一个目录下 `src/reducers`
  - 思考接下来的功能对于共享状态**有什么操作**，想清楚以后我们才能写好`reducer`，因为`reducer`就是用来描述数据的形态和相应的变更。
  - `action creators`:
   1. 之前我们使用 `dispatch` 的时候，都是直接手动构建对象：
      ```JavaScript
      dispatch({ type: 'INIT_COMMENTS', comments })
      ```
      每次都要写 `type` 其实挺麻烦的，而且还要去记忆 action type 的名字也是一种负担。我们**可以把 `action` 封装到一种函数里面，让它们去帮助我们去构建这种 action**，我们把它叫做 action creators。
      所谓 action creators 其实就是**返回符合action规范的对象（即要有一个字段是`type`的对象）的函数**，这样我们 `dispatch` 的时候**只需要传入数据**就可以了：
      ```JavaScript
      dispatch(initComments(comments))
      ```
      `action creators` 还有额外好处就是可以帮助我们**对传入的数据做统一的处理**；而且有了 `action creators`，代码测试起来会更方便一些。
  - 写 `reducer`文件的规范: （参考comment-app的reducers/comments.js）
   1. 定义 action types
   2. 编写 reducer
   3. 跟这个 reducer 相关的 action creators  
- 类比于MVC/MVP模式，Dumb组件就是 `View`（负责渲染），Smart组件就是与之对应的`Controller（Presenter）`，`State`其实就有点类似`Model`。即一个Dumb组件(`view`)由一个`controller`控制（经过`connect`的Dumb组件，即Smart组件），各自组件中保存着只有自己能使用的state(即Model)，`state`的改变会导致`view`的刷新，`view`想改变`store.state`必须经过`dispatch`函数（即单向数据流），而`store.state`存储的则是所有controller和view共享的data。
 ![参考图片](https://huzidaha.github.io/static/assets/img/posts/6F7A1EE0-9AF4-4AB3-B554-A01E9074FC3C.png)





