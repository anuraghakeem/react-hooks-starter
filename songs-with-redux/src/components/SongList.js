import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions';


const SongListComponent= (props)=> {
    // console.log(props.songs)
    // const [resource, setResource] = useState ('posts');
    return (  
      <div className="ui divided list" data-test="songListComponent">
        {/* Song List */}
            {props.songs.map(song =>(
                <div className="item" key={song.title} data-test="songListComponentItem">
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={()=>props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content" >{song.title}</div>
                </div>
            ))}
      </div>
    );
  }
  const mapStateToProp=(state)=>{
      console.log(state)
      return {
          //songs available in SongListComponent as an object of props
          songs: state.songs
      }
  }
  //selectSong(right) action creater is dispatched as selectSong a function of props
export default connect(mapStateToProp,{selectSong: selectSong})(SongListComponent);