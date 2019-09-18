import React from "react";

const Teams = props => {
    // console.log(props)
    return (
        <>
            {props.teams.map(team =>(
                <div className="team" key={team.id}>
                    <h2>{team.title}</h2>
                    <p>{team.body}</p>
                </div>
            ))}
        </>
    );
};

export default Teams;