/**
 * Created by pjbest on 2018/4/3.
 */
import React from 'react'

class Dog extends React.Component {
    constructor () {
        super()
        this.state = {
            isRunning: false,
            isBarking: false
        }
    }

    bark () {
        this.setState({
            isBarking: true
        })
        console.log("bark")
    }

    run () {
        console.log(this.state.isBarking)
        this.setState({
            isRunning: !this.state.isRunning
        })
        this.setState((preState) => {
            setTimeout(() => {
                return {
                    isRunning: !preState.isRunning,
                    isBarking: !preState.isBarking
                }
            }, 20)
        })
    }

    render () {
        return (<div onClick={() => {this.bark(); this.run();}}>dog{this.state.isRunning}{this.state.isBarking}</div>)
    }
}
export default Dog
