import React from 'react';
import UserList from '../components/UserList';

const USERS = [
    {
        id: 'u1',
        name: 'Max Schwarz',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        places: 3
    },
];

const Users = () => {
    return (
        <UserList items={USERS}/>
    );
}

export default Users;