/* eslint-disable react/require-render-return */
/* eslint-disable no-useless-constructor */
import React from 'react';
import propTypes from 'prop-types';
import './Season.css';
import styled from 'styled-components';
import { getSeason } from './getSeason'
import { seasonIcon } from './seasonIcon' 

// import 'semantic-ui-react';

function Season(props) {
    var season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName} = seasonIcon(season);

    const SeasonName = styled.h1`
    font-size: 3.5em;
    text-align: center;
    color: black;
`;
    return (
        <div className="getSeason">
            <div className={`season ${season}`}>
                <i className={`icon-left massive ${iconName} icon`} />
                <SeasonName>
                    {text}
                </SeasonName>
                <i className={`icon-right massive ${iconName} icon`} />
            </div>
        </div>
    )


}

Season.propTypes = {
    lat : propTypes.string
}

export default Season;