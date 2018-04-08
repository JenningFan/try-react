import React, { Component } from 'react';


class UserList extends Component {
    render() {
        const { user } = this.props
        return (
            <div>
                <div>姓名: {user.name}</div>
                <div>年龄: {user.age}</div>
                <div>性别: {user.sex}</div>
                <hr />
            </div>
        )
    }
}
export default UserList