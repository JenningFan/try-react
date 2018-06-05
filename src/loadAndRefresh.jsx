import React, {Component} from 'react'

export default (url) => {
    return (WrappedComponent) => {
        class NewComponent extends Component {

            constructor() {
                super()
                this.state = {
                    content: '数据加载中...'
                }
            }

            componentWillMount() {
                getData(url).then((data) => {
                    this.setState({
                        content: data
                    })
                })
            }

            handleOnRefresh() {
                this.setState({
                    content: '数据加载中...'
                })
                getData(url).then((data) => {
                    this.setState({
                        content: data
                    })
                })
            }

            render() {
                return (
                    <WrappedComponent
                        content={this.state.content}
                        refresh={this.handleOnRefresh.bind(this)}
                        {...this.props}
                    />
                )
            }
        }

        return NewComponent
    }
}