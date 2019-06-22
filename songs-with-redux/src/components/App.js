import React from '../../node_modules/react';
import SongListComponent from './SongList';
import SongDetailComponent from './SongDetail';
import {Grid,Container,Segment} from 'semantic-ui-react';


const App= ()=> {
  return (
    <Grid container columns={2} stackable>
      <Grid.Column>
        <Segment>
          <SongListComponent />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>
          <SongDetailComponent />
        </Segment>
      </Grid.Column>
      
    </Grid>
  );
}

export default App;
