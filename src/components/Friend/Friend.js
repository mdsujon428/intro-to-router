import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Friend = (props) => {
    const {id,name,phone,website,address} = props.friend;
    const history = useHistory()
    //style object
    const friendStyle ={
        border:'3px solid goldenrod',
        margin:'20px',
        padding:'10px',
        borderRadius:'10px'
    }
    const handleFriendClick=()=>{
            history.push(`/friend/${id}`);
    }
    const url = `/friend/${id}`;
    return (
        <div style={friendStyle}>
            <h2>I am {name} {id}</h2>
            <h5>Call me {phone}</h5>
            <h5>Visit my website : {website}</h5>
            <p> I live in {address.city}</p>
            <Link to={url}> Visit Me </Link>
             <br/>
            <Link to ={url}>
                <button>Visit</button>    
            </Link>
            
            <br/>
            <button onClick={handleFriendClick}> Visit2</button>

        </div>
    );
};

export default Friend;