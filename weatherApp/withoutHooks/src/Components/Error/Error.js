/* eslint-disable no-useless-constructor */
import React from 'react'

class Error extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="errorComponent">
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

export default Error;