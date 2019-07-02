/* eslint-disable no-useless-constructor */
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

function Error(props) {

    const ErrorMessage = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
    return (
        <div className="getError">
            <div className="ui warning message">
                <i className="close icon"></i>
                <div className="header">
                    <ErrorMessage>
                        {props.message}
                    </ErrorMessage >
                </div>
            </div>
        </div>
    )

}

Error.propTypes = {
    message: propTypes.string
}

export default Error;