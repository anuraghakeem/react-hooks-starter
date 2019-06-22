import React,{ Fragment } from 'react'
import { connect } from 'react-redux'

const SongDetailComponent= (props)=> {
    // console.log(props)
    if(props.selectedSong)    
        return (
            <Fragment>
                <h3>Details:</h3>
                <p>
                    Song: {props.selectedSong.title}
                    <br />
                    Rating: {props.selectedSong.rating}
                </p>
            </Fragment>
        );
    return (
        <Fragment>
            Select a song for it's details 
        </Fragment>
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