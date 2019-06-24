/* eslint-disable no-useless-constructor */
import React from 'react'

function Error(props) {
    return (
        <div className="getError">
            <div className="ui warning message">
                <i className="close icon"></i>
                <div className="header">
                    {props.message}
                </div>
            </div>
        </div>
    )

}

export default Error;