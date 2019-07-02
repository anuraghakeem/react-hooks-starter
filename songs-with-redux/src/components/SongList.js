import React from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions';
import styled from '@emotion/styled';
import {Button} from './styles'


// const Button = styled.button`
// color: white;
// background-color: black;
// border-width: 0;
// margin-top : 5px;
// margin-right : 10px;
// margin-bottom : 5px;
// `

const Content = styled.div`
padding : 10px;
`

const SongListComponent= (props)=> {
    // console.log(props.songs)
    // const [resource, setResource] = useState ('posts');
    return (  
      <div 
        className="ui divided list" 
        data-test="songListComponent"
        >
        {/* Song List */}
            {props.songs.map(song =>(
                <section className="item" key={song.title} data-test="songListComponentItem">
                    <div className="right floated content">
                        <Button 
                            // className="ui button primary"
                            onClick={()=>props.selectSong(song)}
                        >
                            Select
                        </Button>
                    </div>
                    <Content className="content" >{song.title}</Content>
                </section>
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