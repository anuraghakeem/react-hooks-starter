/* eslint-disable no-useless-constructor */
import React from 'react'

class Error extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div class="ui warning message">
                <i class="close icon"></i>
                <div class="header">
                    {this.props.message}
                </div>
                </div>
        )
    }
}

export default Error;