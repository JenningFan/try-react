/**
 * Created by pjbest on 2018/4/8.
 */
import React, {Component} from 'react'
import UserList from './UserList'
import LessonsList from './LessonsList'

const users = [
    {name: 'wade', age: 18, sex: 'male'},
    {name: 'rose', age: 19, sex: 'male'},
    {name: 'jame', age: 20, sex: 'female'}
]
const lessons = [
    { title: 'Lesson 1: title', description: 'Lesson 1: description' },
    { title: 'Lesson 2: title', description: 'Lesson 2: description' },
    { title: 'Lesson 3: title', description: 'Lesson 3: description' },
    { title: 'Lesson 4: title', description: 'Lesson 4: description' }
]
class Entry extends Component {
    render() {
        return (
            <div>

                <LessonsList lessons={lessons}/>
            </div>
        )
    }
}
export default Entry