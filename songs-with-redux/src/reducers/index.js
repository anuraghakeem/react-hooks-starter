import {combineReducers} from 'redux'
const songsReducer = ()=>{
    return [
        {title:'Avengers: Infinity War',rating:'8.5'},
        {title:'Spider-Man: Into the Spider-Verse',rating:'8.5'},
        {title:'Green Book',rating:'8.2'},
        {title:'Bohemian Rhapsody',rating:'8.0'},
    ]
}

const selectedSongReducer = (selectedSong=null,action) => {
    if ( action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})