import React, { useState } from "react";

const TeamForm = props => {
    console.log(props);

    const [team, setTeam] = useState({
        title: '',
        body: ''
    });

    const handleChanges = event => {
        setTeam({...team, [event.target.name]: event.target.value});
        console.log(team)
    };

    const submitForm = event => {
        event.preventDefault();
        props.addNewTeam(team);
        setTeam({ title:'', body:''});
        console.log(event.target.value);
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="title">Team Title</label>

            <input 
                id='title'
                type='text'
                name='title'
                onChange={handleChanges}
                value={team.title}
            />

            <label htmlFor="team">Team Description</label>

            <textarea
                id="team"
                type="text"
                name='body'
                onChange={handleChanges}
                value={team.body}
            />

            <button type="submit">Add Team</button>

                
        </form>
    )
};

export default TeamForm;