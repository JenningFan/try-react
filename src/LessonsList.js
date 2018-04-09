/**
 * Created by pjbest on 2018/4/8.
 */
import React, {Component} from 'react'
import Lesson from './Lesson'

class LessonsList extends Component {
    render() {
        const {lessons} = this.props
        return (
            <div>
                {lessons.map((lesson, index) => {
                    return <Lesson key={index} lesson={lesson} key2={index} />
                })}
            </div>
        )
    }
}
export default LessonsList