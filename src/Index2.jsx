import React, { Component } from 'react';
import Header3 from './Header3';

class Index2 extends Component {
    constructor() {
        super()
        this.state = {
            isShowHeader : true
        }
    }

    handleShowHeader() {
        this.setState({
            isShowHeader: !this.state.isShowHeader
        })
    }
    render() {
        return (
            <div>
                {this.state.isShowHeader ? <Header3 /> : null}
                <button onClick={this.handleShowHeader.bind(this)}>{this.state.isShowHeader ? 'hide' : 'show'}</button>
            </div>
        );
    }
}

export default Index2;
