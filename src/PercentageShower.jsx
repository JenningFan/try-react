import React, { Component } from 'react';


class PercentageShower extends Component {
    
    static defaultProps = {
		percentageValue:''
	}
    render() {
        return (
            <div>
                { (Number(this.props.number) * 100).toFixed(2) + '%' }
            </div>
        );
    }
}

export default PercentageShower;
