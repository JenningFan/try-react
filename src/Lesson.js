/**
 * Created by pjbest on 2018/4/8.
 */
import React, {Component} from 'react'

class Lesson extends Component {
    constructor() {
        super()
        //this.handleOnLesson = this.handleOnLesson.bind(this)
    }

    handleOnLesson(lesson, key2) {
        console.log(key2 + ' - ' + lesson.title)
    }

    render() {
        const { lesson, key2 } = this.props
        return (
            <div onClick={() => {this.handleOnLesson(lesson, key2)}}>
                <h1>{lesson.title}</h1>
                <p>{lesson.description}</p>
            </div>
        )
    }
}
export default Lesson