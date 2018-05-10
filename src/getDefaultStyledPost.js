import React, {Component} from 'react';


const getDefaultStyledPost = (defaultStyle) => {
    class Post extends Component {
        render() {
            const {style} = this.props
            console.log(style);
            
            for (const key in style) {
                if (style.hasOwnProperty(key)) {
                    defaultStyle[key] = style[key];
                }
            }
            return (
                <p style={defaultStyle}>react</p>
            )
        }
    }
    return Post
}

export default getDefaultStyledPost