import React, {Component} from 'react'
import axios from 'axios'

export default (WrappedComponent) => {
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
            axios.get(`./${this.props.data}.json`).then((data) => {
                this.setState({
                    data: data.data
                })
            })
        }

        render() {
            //console.log(this.state.data)
            console.log('render from ajax data')
            return (
                <WrappedComponent data={this.state.data} />
            )
        }
    }

    return NewComponent
}