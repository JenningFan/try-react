import React, { Component } from 'react';


class PercentageShower extends Component {
    render() {
        const number = this.props.number
        return (
            <div>
                {Number(number)}
            </div>
        );
    }
}

export default PercentageShower;
