import React from 'react';

const Usersitem =porps =>{
    return ( 
    <li className='user-item'>
        <div className='user-item__content'>
            <div className='user-item__image'>
                <img src={porps.image} alt={porps.name} />
            </div>  
            <div className='user-item__info'>
                <h2>{porps.name}</h2>
                <h3>
                    {porps.placeCount} {porps.placeCount === 1 ? 'place': 'places'}
                </h3>
            </div>
        </div>


    </li>
    )
}

export default Usersitem;