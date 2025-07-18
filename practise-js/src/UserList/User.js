import React from 'react';

const User = props =>{
    console.log('list'+props.userlist);
    return (
        <ul className="goal-list">
           
        {props.userlist.map(goal => {
        return <li key={goal.id}>{goal.text}</li>;
    })}
    </ul>
    )

}

export default User;