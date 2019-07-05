import {combineReducers} from 'redux'
export const songsReducer = ()=>{
    return [
        {title:'Avengers: Infinity War',rating:'8.5'},
        {title:'Spider-Man: Into the Spider-Verse',rating:'8.5'},
        {title:'Green Book',rating:'8.2'},
        {title:'Bohemian Rhapsody',rating:'8.0'},
    ]
}

export const selectedSongReducer = (selectedSong=null,action) => {
    console.log(action.payload)
    if ( action.type === 'SONG_SELECTED'){
        return action.payload
    }
    return selectedSong
}

export default combineReducers({
    songs:songsReducer,
    selectedSong:selectedSongReducer
})