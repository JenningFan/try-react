import React, { Component } from 'react';
import './mine.css';

class BlackBorderContainer extends Component {

    render() {
        //react的jsx对象仅是可读对象，不允许修改，如写child.ref = 'xxx'会报错
        console.log(Object.getOwnPropertyDescriptor(this.props.children[0], 'ref'))
        return (
            <div>
                {this.props.children.map(
                    child => <div className='black-border'>{child}</div>
                )}
            </div>
        );
    }
}

export default BlackBorderContainer;
