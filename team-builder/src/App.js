import React, { useState, useEffect } from 'react';
import TeamList from "./Component/TeamList";
import {Route} from "react-router-dom"
import './App.css';

function App() {
  const [teamList, setTeamList] = useState()
  
  useEffect(() => {
    setTeamList()
  },[])
  return (
    <div className="App">
     <Route exact path='/' render={props => <TeamList {...props} teamList={teamList} /> } />
    </div>
  );
}

export default App;
