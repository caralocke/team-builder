import './App.css';
import React, { useState } from 'react' //imported React and useState
import Form from './components/Form'
import TeamMember from './components/TeamMember';

//Created a list of team members
const listOfTeamMembers = [
  {memberName: 'Cara', email:'cara@email.com', role:'Student' },
  {memberName: 'Chris', email: 'chris@email.com', role: 'Instructor'},
  {memberName: 'Nick', email: 'nick@email.com', role: 'Alumni'},
]

//putting my initial form values into a variable so I can reuse it
const initialFormValues = {
  memberName: '',
  email: '',
  role:'',
}

const updateForm = () => {

}

const submitForm = () => {
  
}

function App() {

  const [ teamMembers, setTeamMembers ] = useState(listOfTeamMembers) //setting initial state
  const [ formValues, setFormValues ] = useState(initialFormValues)

  return (
    <div className="App">
        <h1>Team Members</h1>
        <Form values={formValues} update={updateForm} submit={submitForm}/>
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
