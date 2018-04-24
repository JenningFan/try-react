import React, { Component } from 'react';
import Input from './Input';
import PercentageShower from './PercentageShower';

class PercentageApp extends Component {
    constructor() {
        super()
        this.state = {
            number: ''
        }
    }

    handleInputNumber(number) {
        this.setState({
            number: number
        })
    }

    render() {
        return (
            <div>
                <Input onInput={this.handleInputNumber.bind(this)} />
                <PercentageShower number={this.state.number} />
            </div>
        );
    }
}

export default PercentageApp;
