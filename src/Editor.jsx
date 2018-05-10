import React, { Component } from 'react';

class Editor extends Component {
    constructor() {
        super()
        this.state = {
            content: '<h1>react</h1>'
        }
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={{__html: this.state.content}} />
               
           
        );
    }
}

export default Editor;
