import React from 'react';
import useResource from './useResources'

// const UserList = () => {
export default () => {

    const users = useResource('users');    

    return (
        <div data-test="UserListComp">
            <ul>
                {users.map(user =>(
                    <li id={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )

}

// export default UserList;
