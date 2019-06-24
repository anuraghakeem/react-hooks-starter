import React, {Fragment} from 'react'
import axios from 'axios'

class UserList extends React.Component{
    state={users:[]}
    async componentDidMount(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        this.setState({users:response.data})
    }
    
    render(){
        return(
            <div data-test="UserListComp">
                <ul>{this.state.users.map((user)=><li key>{user.name}</li>)}</ul>
            </div>
        );
    }
}

export default UserList;

