import React, {Fragment} from 'react'
import ResourceList from './ResourceList'
import UserList from './UserList'



class App extends React.Component{
    state= {resource:'posts'};
    render(){
        return (
            <Fragment>
                <div>
                    <UserList />
                </div>
                <div>
                    <button onClick={()=>this.setState({resource:"posts"})}>posts</button>
                    <button onClick={()=>this.setState({resource:"todos"})}>todos</button>
                </div>
                <div><ResourceList resource={this.state.resource} /></div>
            </Fragment>
        );
    }
}

export default App;