import React from "react";
import styled from 'styled-components'

const FollowersContainer = styled.div`
    display: flex;
    margin: auto;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:center;
    justify-content:space-around;
    align-items:center;
    width: 90%;
    .follower {
        width: 20%;
        img{
            max-width: 100%;
            height: auto
        }
        padding: 20px;
    }
`

const Followers = (props) => {


    return (
        <div>
            <h2>Followers</h2>
        
        <FollowersContainer>
            
            {props.followers && props.followers.map(follower => {
                return (<div className="follower" key={follower.id}>
                    <img src = {follower.avatar_url}/>
                    <p>{follower.login}</p>
                </div>)
            })}
        </FollowersContainer>
        </div>
    )
};

export default Followers;