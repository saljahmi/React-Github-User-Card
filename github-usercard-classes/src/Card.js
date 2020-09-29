import React from 'react';

const Card = (props) => {
    return (
        <div className = "user-card">
            <h2>{props.user.name}</h2>
            <img src={props.user.avatar_url} alt="user"/>
            <p><b>Github Profile:</b></p>
            <a href={props.user.html_url}>{props.user.html_url} </a>
            <p><b>Location:</b> {props.user.location}</p>
            <p><b>About:</b> {props.user.bio}</p>
        </div>
    )
}

export default Card;