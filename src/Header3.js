import React, { Component } from 'react';

class Header3 extends Component {
    constructor() {
        super()
        console.log('constructor')
        this.state = {
            time: 0
        }
    }

    componentWillMount() {
        // console.log("a")
        // this.setState({
        //     time: this.state.time + 1
        // })
        console.log("b")
        setTimeout(() => {
            console.log('component will mount');
            this.setState({
                time: this.state.time + 1
            })
            console.log(this.state.time)
        }, 0)
    }

    componentDidMount() {
        //console.log('component did mount');
        // setTimeout(() => {
        //     console.log('component did mount');
        //     this.setState({
        //         time: this.state.time + 1
        //     })
        //     console.log(this.state.time)
        // }, 0)
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

    render() {
        console.log('render'+ this.state.time);
        return (
            <div>
                 <h1 className='title'>React 小书</h1>
                 <span>{this.state.time}</span>
            </div>
        );
    }
}

export default Header3;
