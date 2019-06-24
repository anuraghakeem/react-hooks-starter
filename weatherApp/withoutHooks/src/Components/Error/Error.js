/* eslint-disable no-useless-constructor */
import React from 'react';
import propTypes from 'prop-types';

class Error extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="getError">
                <div className="ui warning message">
                    <i className="close icon"></i>
                    <div className="header">
                        {this.props.message}
                    </div>
                </div>
            </div>
        )
    }
}

Error.propTypes = {
    message: propTypes.string
}


export default Error;