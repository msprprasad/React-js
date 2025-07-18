import React from 'react';
import Usersitem from './Usersitem';

const UsersList =porps =>{
    if(porps.items.length === 0)
    {
        return (
            <div className="center">
              <h2>No users found.</h2>
            </div>
          );
    }
    return (
        <ul className='user-list'>
            {porps.items.map(user =>(
                <Usersitem key={user.id} id={user.id} name={user.username} image={user.image} placeCount={user.placeCount} />            
                ))}
        </ul>
    )
}

export default UsersList;