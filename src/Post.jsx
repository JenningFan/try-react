import React, { Component } from 'react';

class Post extends Component {
    render() {
        const {content} = this.props
        return (
            <div>
                <p onClick={() => {console.log(this.p.clientHeight)}} ref={(p) => {this.p = p}}>{content}</p>
            </div>
            
        );
    }
}

export default Post;
