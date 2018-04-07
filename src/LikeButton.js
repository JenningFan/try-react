/**
 * Created by pjbest on 2018/4/3.
 */
import React, {Component} from 'react'

class LikeButton extends Component {
    constructor() {
        super()
        this.state = { isLiked: false }
    }
    handleClickOnLikeButton() {
        console.log(this.state)
        // this.setState({
        //     isLiked: !this.state.isLiked
        // })
        this.setState(() => {
            return { isLiked: !this.state.isLiked }
        })
        console.log(this.state)
    }
    render() {
        const likedText = this.props.likedText || "取消"
        const unLikeText = this.props.unLikeText || "点赞"
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? likedText : unLikeText}👍
            </button>
        )
    }
}
export default LikeButton