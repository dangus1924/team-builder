import React, { useState, useEffect } from 'react';
import TeamList from "./Component/TeamList";
import Form from "./Component/Form";
import { Data } from "./data";
import { Route } from "react-router-dom";
import Navigation from "./Component/Nav";
import styled from "styled-components";
import './App.css';

function App(props) {
  const [teamList, setTeamList] = useState([Data])
  
  useEffect(() => {
    setTeamList(Data)
  },[])
  return (
    <div className="App">
      {/* <Navigation style/> */}
      <Form />
     <Route exact path='/' render={props => <TeamList {...props} teamList={teamList} /> } />
     {/* <Route path='/Form' render={props => <Form {...props} teamList={teamList} /> } /> */}
     
    </div>
  );
}

export default App;
