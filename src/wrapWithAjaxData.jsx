import React, {Component} from 'react'
import axios from 'axios'

export default (WrappedComponent, name) => {
    class NewComponent extends Component {
        constructor() {
            super()
            this.state = {
                data: null,
                time: 1
            }
        }

        componentWillMount() {
            axios.get(`./${name}.json`).then((data) => {
                console.log(data.data)
                this.setState({
                    data: data.data
                })
            })
        }

        render() {
            console.log(this.state.data)
            console.log(`第${this.state.time++}次执行`)
            console.log(this.state.time)
            return (
                <WrappedComponent data={this.state.data}/>
            )
        }
    }

    return NewComponent
}