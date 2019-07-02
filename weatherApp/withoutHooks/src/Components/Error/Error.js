/* eslint-disable no-useless-constructor */
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

class Error extends React.Component {
    constructor(props) {
        super(props)
    }
  
    render() {
        const ErrorMessage = styled.h1`
        font-size: 2.5em;
        text-align: center;
        color: black;
      `;
        return (
            <div className="getError">
                <div className="ui warning message">
                    <i className="close icon"></i>
                    <div className="header">
                        <ErrorMessage>
                        {this.props.message}
                        </ErrorMessage>
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