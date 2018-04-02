import React, { Component } from 'react';

class Dog extends Component {
    bark() {
        console.log('bark')
    }
    run() {
        console.log('run')
        console.log(this)
    }
    render() {
        return (
           <div onClick={() => {this.bark(); this.run()}}>DOG</div>
        )
    }
}
export default Dog;