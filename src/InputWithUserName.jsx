import React, {Component} from 'react'
import wrapWithAjaxData from './wrapWithAjaxData.jsx'

class InputWithUserName extends Component {

    render() {
        //const {username} = this.props.data
        //console.log(typeof this.props.data.username)
        return <input value={this.props.data.username}/>
    }
}

InputWithUserName = wrapWithAjaxData(InputWithUserName, 'test')
export default InputWithUserName