import React from "react";
import styled from "styled-components";

const TeamContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 20rem;
width: 50%;
background: grey;


`;

const Teams = props => {
    // console.log(props)
    return (
        <TeamContainer>
            {props.teams.map(team =>(
                <div className="team" key={team.id}>
                    <h2>{team.title}</h2>
                    <p>{team.body}</p>
                </div>
            ))}
        </TeamContainer>
    );
};

export default Teams;