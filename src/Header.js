/**
 * Created by pjbest on 2018/4/2.
 */
import React, {Component} from 'react'


class Header extends Component {

        renderGoodWord(goodWord, badWord) {
            let isGood = true
            return isGood ? goodWord : badWord
        }
        render() {
            return (
                <div>
                    <div>React.js小书 { this.renderGoodWord(<strong>is good!</strong>, <span>is bad~</span>) }</div>
                </div>
            )
        }
}
export default Header
