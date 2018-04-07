import React, { Component } from 'react';

const users = [
    {name: 'wade', age: 18, sex: 'male'},
    {name: 'rose', age: 19, sex: 'male'},
    {name: 'jame', age: 20, sex: 'female'}
]

class UserList extends Component {
    render() {
        const jsxUser = []
        return (
            <div>
                {users.map((user) => {
                    return (
                        <div>
                            <div>姓名: {user.name}</div>
                            <div>年龄: {user.age}</div>
                            <div>性别: {user.sex}</div>
                            <hr />
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default UserList