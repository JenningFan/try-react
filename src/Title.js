/**
 * Created by pjbest on 2018/4/2.
 */
import React, {Component} from 'react'
class Title extends Component {
    handleClickOnTitle(e, word) {
        console.log(e)
        console.log(this)
        console.log(word)
    }
    render() {
        return (
            <h1 onClick={this.handleClickOnTitle.bind(this, "world")}>React</h1>
        )
    }
}
export default Title