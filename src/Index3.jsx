import React, { Component } from 'react';
import Clock from './Clock';

class Index3 extends Component {

    constructor() {
        super()
        this.state = {
            isShowClock: true
        }
    }

    handleShowOrHideClock() {
        this.setState({
            isShowClock: !this.state.isShowClock
        })
    }

    render() {
        return (
            <div>
                {this.state.isShowClock ? <Clock /> : null}
                <button onClick={this.handleShowOrHideClock.bind(this)}>show or hide</button>
            </div>
        );
    }
}

export default Index3;
