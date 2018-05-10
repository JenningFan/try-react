import React, {Component} from 'react';


const getDefaultStyledPost = (defaultStyle) => {
    class Post extends Component {
        render() {
            const {style} = this.props
            console.log(style);
            
            /**ES5合并两个对象 */
            // for (const key in style) {
            //     if (style.hasOwnProperty(key)) {
            //         defaultStyle[key] = style[key];
            //     }
            // }
            
            /**ES6合并两个对象 */
            Object.assign(defaultStyle, style)
            console.log(defaultStyle)
            return (
                <p style={defaultStyle}>react</p>
            )
        }
    }
    return Post
}

export default getDefaultStyledPost