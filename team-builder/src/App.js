import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import MemberList from './components/MemberList';
import FormInfo from './components/FormInfo';

function App() {

  const [team, setTeam] = useState([]);

  const addMember = info => {
    setTeam([...team, info]);
  };

  return (
    <div className="App">
      <h1>Team Member List</h1>
      <FormInfo addMember={addMember} />
      <MemberList membersList={team} />
    </div>
  );
}

export default App;
