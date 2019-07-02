/* eslint-disable react/require-render-return */
/* eslint-disable no-useless-constructor */
import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import './Season.css'


class Season extends React.Component {
    constructor(props) {
        super(props)
    }



    getSeason = (lat, month) => {
        if (month > 2 && month < 9) {
            return lat > 0 ? 'Summer' : 'Winter';
        } else {
            return lat > 0 ? 'Winter' : 'Summer'
        }
    }

    render() {

        var season = this.getSeason(this.props.lat, new Date().getMonth());
        var text = season === 'Winter' ? 'Hey, its Winter' : 'Its Summer'
        var iconName = season === 'Winter' ? 'snowflake' : 'sun';
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
}

Season.propTypes = {
    lat:propTypes.string
}

export default Season;