import React, {Component} from 'react'

export default (WrappedComponent, name) => {
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = {
                data: null
            }
        }

        componentWillMount() {
            const data = localStorage.getItem(name) || 'test';
            this.setState({
                data
            })
        }

        render() {
            console.log('render from load data')
            return (
                <WrappedComponent data={this.state.data} />
            )
        }
    }

    return NewComponent
}