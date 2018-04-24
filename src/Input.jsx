import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    handleOnChange() {
        if (this.props.onInput) {
            onInput(this.state.value)
        }
    }

    handleOnInput(event) {
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input type='number' onInput={this.handleOnInput.bind(this)} value={this.state.value} onChange={this.handleOnChange.bind(this)} />
            </div>
        )
    }
}
export default Input;