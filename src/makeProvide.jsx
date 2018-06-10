import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default (obj) => {
    return (WrappedComponent) => {
        return class extends Component {
            static childContextTypes = {
                data: PropTypes.any.required
            }

            constructor() {
                super()
                this.state = {
                  data: obj
                }
                
            }

            getChildContext() {
                return {
                    data: this.state.data
                }
            }

            render() {
                return (
                    <WrappedComponent {...this.props}/>
                )
            }
        }
    }
}