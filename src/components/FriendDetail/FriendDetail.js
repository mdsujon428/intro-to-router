import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
    const {friendId} = useParams();
    const [friend,setFriend] =useState({});
    const history = useHistory()
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=> setFriend(data));
    },[]);
    //To go back previous componet
    const handleAllFriends=()=>{
        history.push('/friends')
    }
    const {name,phone,website} = friend;
    return (
        <div>
            <h1>Friend Detail coming soon. {friendId}</h1>
            <h2>Name : {name}</h2>
            <h2>Phone : {phone}</h2>
            <h3>Website : {website}</h3>
            <h3>Company : {friend.company?.name}</h3>
            <button onClick={handleAllFriends}>See All Friends</button>
        </div>
    );
};

export default FriendDetail;