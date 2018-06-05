import React, {Component} from 'react'
import wrapWithAjaxData2 from './wrapWithAjaxData2.jsx'
import wrapWithLoadData from './wrapWithLoadData'

class InputWithUserName extends Component {

    render() {
        console.log('render from InputWithUserName')
        //const {username} = this.props.data
        //console.log(typeof this.props.data.username)
        return <input value={this.props.data.username}/>
    }
}

InputWithUserName = wrapWithAjaxData2(InputWithUserName)
InputWithUserName = wrapWithLoadData(InputWithUserName, 'testKey')
export default InputWithUserName