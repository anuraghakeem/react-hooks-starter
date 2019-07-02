import React from '../../node_modules/react';
import SongListComponent from './SongList';
import SongDetailComponent from './SongDetail';
import {Grid} from 'semantic-ui-react';
import {ContainerElement} from './styles'

const App= ()=> {

// ----- replaced with {ContainerElement}
// const ContainerElement = styled.div`
//   color: white;
//   background : #A42CD6;
//   margin-top : 20px; 
// `
  return (
    <Grid container columns={2} stackable>
      <Grid.Column>
        <ContainerElement>
          <SongListComponent />
        </ContainerElement>
      </Grid.Column>
      <Grid.Column>
        <ContainerElement>
        {/* <Button>This is a hotpink button.</Button> */}
          <SongDetailComponent />
        </ContainerElement>
      </Grid.Column>
      
    </Grid>
  );
}

export default App;
