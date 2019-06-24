import React, {Fragment} from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList'



class App extends React.Component{
    state= {resource:'posts'};
    render(){
        return (
            <Fragment>
                <div data-test="UserListComponent">
                    <UserList />
                </div>
                <div>
                    <button data-test="buttonComponent" onClick={()=>this.setState({resource:"posts"})}>posts</button>
                    <button data-test="buttonComponent" onClick={()=>this.setState({resource:"todos"})}>todos</button>
                </div>
                <div data-test="ResourceListComponent"><ResourceList resource={this.state.resource} /></div>
            </Fragment>
        );
    }
}

export default App;