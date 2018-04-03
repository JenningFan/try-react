/**
 * Created by pjbest on 2018/4/3.
 */
import React from 'react'

class Dog extends React.Component {
    constructor() {
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
        setTimeout(() => {
            this.setState({
                isBarking: false,
                isRunning: false
            })
        }, 20);
    }

    render () {
        return (
            <div>
                <div onClick={ () => {this.bark(); this.run();} }>Dog</div> 
                <div>{ this.state.isBarking ? 'dog is barking' : 'dog is not barking' }</div>
                <div>{ this.state.isRunning ? 'dog is running' : 'dog is not running' }</div>
            </div>
        )
    }
}
// class Dog extends React.Component {
//     constructor(){
//       super()
//       this.state = {
//         isRunning: false,
//         isBarking: false
//       }
//     }
  
//     // 随机数（秒数）
//     getRandomArbitrary(min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//     }
  
  
//     run(){
//       this.setState( {
//         isRunning: true,
//       })
//       setTimeout(() => this.setState({ isRunning: false }), this.getRandomArbitrary(2000,5000)) //2~5秒, 20~50毫秒眼花+_+
//     }
  
//     bark(){
//       this.setState( {
//         isBarking: true,
//       })
//       setTimeout(() => this.setState({ isBarking: false }), this.getRandomArbitrary(2000,5000)) //2~5秒, 20~50毫秒眼花+_+
//     }
  
//     handleDog(){
//       this.run()
//       this.bark()
//     }
  
//     render(){
//       return (
//         <div>
//           <button onClick={() => {this.run();this.bark()}}>HandleDog</button>
//           <h5>{this.state.isRunning ? 'Dog is Running' : 'Dog is stoped'}</h5>
//           <h5>{this.state.isBarking ? 'Dog is Barking' : 'Dog is stop barking'}</h5>
//         </div>
//       )
//     }
//   }
export default Dog
