import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react' //imported React and useState
import Form from './components/Form'
import TeamMember from './components/TeamMember';

const listOfTeamMembers = [
  {memberName: 'Cara', email:'cara@email.com', role:'Student' },
  {memberName: 'Chris', email: 'chris@email.com', role: 'Instructor'},
  {memberName: 'Nick', email: 'nick@email.com', role: 'Alumni'},
]

function App() {

  const [ teamMembers, setTeamMembers ] = useState(listOfTeamMembers) //setting initial state
  const [ formValues, setFormValues ] = useState()

  return (
    <div className="App">
        <h1>Team Members</h1>
        <Form/>
        {
          teamMembers.map(teamMember => {
            return(
              // mapping through the list of team members and displaying a card for each one. Giving TeamMember the props of details
              <TeamMember key={teamMember.id} details={teamMember}/>
            )
          })
        }
    </div>
  );
}

export default App;
