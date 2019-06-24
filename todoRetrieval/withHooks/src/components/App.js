import React, { useState } from 'react';
import ResourceList from './ResourceList';
import UserList from './UserList';


const App = ()=>{
    const [resource, setResource] = useState ('posts');

    return (
      <div>
          <div data-test="UserListComponent">
            <UserList />
          </div>
          <div>
              <button data-test="buttonComponent" onClick = {()=> setResource('posts')}>Posts</button>
              <button data-test="buttonComponent" onClick = {()=> setResource('todos')}>Todos</button> 
          </div>
          <div data-test="ResourceListComponent">
            <ResourceList resource = {resource} />
          </div>
      </div>  
    );
}

export default App;