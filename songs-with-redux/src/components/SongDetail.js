import React,{ Fragment } from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled';

const Heading = styled.h3`
// padding-left : 10px;
padding-top : 10px;
background-color: black;
text-align: center;
`

const Details = styled.p`
padding-left : 10px;
padding-bottom : 10px;

`
const Alternate = styled.p`
text-align: center;
`

const SongDetailComponent= (props)=> {
    // console.log(props)
    if(props.selectedSong)    
        return (
            <Fragment>
                <Heading>DETAILS</Heading>
                <Details>
                    Song: {props.selectedSong.title}
                    <br />
                    Rating: {props.selectedSong.rating}
                </Details>
            </Fragment>
        );
    return (    
        <Alternate>
            Select a song for it's details
        </Alternate>         
    );
}
const mapStateToProp=(state)=>{
    // console.log(state)
    return {
        //selectedSong available in SongDetailComponent as an object of props
        selectedSong: state.selectedSong
    }
}
export default connect(mapStateToProp)(SongDetailComponent);