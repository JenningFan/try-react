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
        return (
            <button onClick={this.handleClickOnLikeButton.bind(this)}>
                {this.state.isLiked ? '取消' : '点赞'}👍
            </button>
        )
    }
}
export default LikeButton