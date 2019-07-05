import { selectedSongReducer, songsReducer } from '.'
import {selectSong} from '../actions'

describe('Selected Song Reducer',()=>{
    // console.log(combineReducers())
    it('Should return default state',()=>{
        const newState= selectedSongReducer(undefined,{});
        expect(newState).toEqual(null);
    });

    it('Should return new state if receiving types',()=>{
        const song= {title:'Avengers: Infinity War',rating:'8.5'};
        const newState= selectedSongReducer(undefined,{
            type : 'SONG_SELECTED',
            payload : song
        });
        expect(newState).toEqual(song);
    });

});

describe('Selected Song Reducer',()=>{
    // console.log(combineReducers())
    it('Should return default state',()=>{
        const song= [
            {title:'Avengers: Infinity War',rating:'8.5'},
            {title:'Spider-Man: Into the Spider-Verse',rating:'8.5'},
            {title:'Green Book',rating:'8.2'},
            {title:'Bohemian Rhapsody',rating:'8.0'},
        ];
        const newState= songsReducer(undefined,{});
        expect(newState).toEqual(song);
    });

    

});