import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }
    handleOnInput(event) {
        if (this.props.onInput) {
            onInput(number)
        }
        this.setState({
            value: event.target.value
        })
    }
    render() {
        return (
            <div>
                <input type='number' onInput={} value={this.state.value} />
            </div>
        )
    }
}
export default Input;