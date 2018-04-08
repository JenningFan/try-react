/**
 * Created by pjbest on 2018/4/8.
 */
import React, {Component} from 'react'
import UserList from './UserList'

const users = [
    {name: 'wade', age: 18, sex: 'male'},
    {name: 'rose', age: 19, sex: 'male'},
    {name: 'jame', age: 20, sex: 'female'}
]
class Entry extends Component {
    render() {
        return (
            <div>
                { users.map((user, i) => <UserList key={i} user={user} />) }
            </div>
        )
    }
}
export default Entry