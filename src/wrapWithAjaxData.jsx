import React, {Component} from 'react'
import axios from 'axios'

export default (WrappedComponent, name) => {
    class NewComponent extends Component {

        constructor() {
            super()
            this.state = {
                data: {
                    username: ''
                }
            }
        }

        componentWillMount() {
            axios.get(`./${name}.json`).then((data) => {
                //setState是可能异步可能同步，即不能保证是同步
                this.setState({
                    data: data.data
                })
            })
        }

        /** render函数会被执行两次
         *  第一次是NewComponent被初始化时，此时this.state.data取的是constructor里面的初始data值，即data: {username: ''}
         *  第二次是在componentWillMount的ajax请求的回调函数this.setState被真正执行时，此时获取到了ajax返回的数据，即data: {username: 'corgi'}，会触发re-render
         */
        render() {
            console.log(this.state.data)
            return (
                <WrappedComponent data={this.state.data} />
            )
        }
    }

    return NewComponent
}