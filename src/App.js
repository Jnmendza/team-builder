import React, { useState } from 'react';
import './App.css';

import Teams from "./components/Teams";
import TeamForm from "./components/TeamForm";


function App() {
  const [teams, setTeams] = useState([
    {
      id: 0,
      title: "Team List",
      body: "Words words words words"
    }
  ]);

  const addNewTeam = team => {
    const newTeam = {
      id: Date.now(),
      title: team.title,
      body: team.body
    };

    setTeams([...teams, newTeam]);
  };

  return (
    <div className="App">
      <h1>Display Teams</h1>
      <TeamForm addNewTeam={addNewTeam}/>
      <Teams teams={teams} />
    </div>
  );
}

export default App;
