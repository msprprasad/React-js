import React from 'react';
import UsersList  from '../components/UsersList';

const Users = ()=>{
    const User=[ {
        "id": 1,
        "firstName": "Emily",
        "lastName": "Johnson",
        "maidenName": "Smith",
        "age": 28,
        "gender": "female",
        "email": "emily.johnson@x.dummyjson.com",
        "phone": "+81 965-431-3024",
        "username": "emilys",
        "password": "emilyspass",
        "birthDate": "1996-5-30",
        "image": "https://dummyjson.com/icon/emilys/128",
        "bloodGroup": "O-",
        "height": 193.24,
        "weight": 63.16,
        "eyeColor": "Green",
        "hair": {
          "color": "Brown",
          "type": "Curly"
        } },{
            "id": 2,
            "firstName": "Michael",
            "lastName": "Williams",
            "maidenName": "",
            "age": 35,
            "gender": "male",
            "email": "michael.williams@x.dummyjson.com",
            "phone": "+49 258-627-6644",
            "username": "michaelw",
            "password": "michaelwpass",
            "birthDate": "1989-8-10",
            "image": "https://dummyjson.com/icon/michaelw/128",
            "bloodGroup": "B+",
            "height": 186.22,
            "weight": 76.32,
            "eyeColor": "Red",
            "hair": {
              "color": "Green",
              "type": "Straight"
            }
        }]
    return <UsersList items={User}/>

}

export default Users;