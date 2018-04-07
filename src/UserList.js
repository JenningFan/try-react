import React, { Component } from 'react';

const user = [
    {name: 'wade', age: 18, sex: 'male'},
    {name: 'rose', age: 19, sex: 'male'},
    {name: 'jame', age: 20, sex: 'female'}
]

class UserList extends Component {
    render() {
        const jsxUser = []
        for (const item of user) {
            jsxUser.push(
               <div>
                   <div>姓名: { item.name }</div>
                   <div>年龄: { item.age }</div>
                   <div>性别: { item.sex }</div>
                   <hr />
               </div>
            )
        }
        return (
            <div>{ jsxUser }</div>
        )
    }
}
export default UserList