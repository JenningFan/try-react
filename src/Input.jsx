import React, { Component } from 'react';

class Input extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    handleOnInput(event) {
        this.setState({
            value: event.target.value
        })
        if (this.props.onInput) {
            this.props.onInput(event.target.value)
        }
    }

    render() {
        return (
            <div>
                <input type='number' 
                onChange={this.handleOnInput.bind(this)} 
                value={this.state.value}  
                />
            </div>
        )
    }
}
export default Input;