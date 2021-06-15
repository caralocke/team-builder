import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react' //imported React and useState
import Form from './components/Form'

const listOfTeamMembers = [
  {memberName: 'Cara', email:'cara@emai.com', role:'Student' },
  {memberName: 'Chris', email: 'chris@email.com', role: 'Instructor'},
  {memberName: 'Nick', email: 'nick@email.com', role: 'Alumni'},
]

function App() {

  const [ teamMembers, setTeamMembers ] = useState([])

  return (
    <div className="App">
        <h1>Team Members</h1>
        <Form/>
    </div>
  );
}

export default App;
