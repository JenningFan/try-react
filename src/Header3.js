import React, { Component } from 'react';

class Header3 extends Component {
    constructor() {
        super()
        console.log('constructor')
    }

    componentWillMount() {
        console.log('component will mount');
    }

    componentDidMount() {
        console.log('component did mount');
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    render() {
        console.log('render');
        return (
            <div>
                 <h1 className='title'>React 小书</h1>
            </div>
        );
    }
}

export default Header3;
