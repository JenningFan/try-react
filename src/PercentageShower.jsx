import React, { Component } from 'react';


class PercentageShower extends Component {
    countNumber() {
        const number = this.props.number
        if (number){}
    }
    render() {

        return (
            <div>
                {Number(this.props.number) * 10}
            </div>
        );
    }
}

export default PercentageShower;
