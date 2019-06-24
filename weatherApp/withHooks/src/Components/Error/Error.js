/* eslint-disable no-useless-constructor */
import React from 'react';
import propTypes from 'prop-types';

function Error(props) {
    return (
        <div className = "getError">
            <div className="ui warning message">
                <i className="close icon"></i>
                <div className="header">
                    {props.message}
                </div>
            </div>
        </div>
    )

}

Error.propTypes = {
    message : propTypes.string
}

export default Error;