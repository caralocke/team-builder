import './App.css';
import React, {useState, useEffect} from 'react'
import TeamMember from './components/TeamMember'
import Form from './components/Form'
import axios from './axios'

const initialFormValues = {
  name: '',
  email: '',
  role: '',
}

function App() {
  const [teamMembers, setTeamMembers] = useState([])

  //Creating a state to hold all the values of the form
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue})
  }
  
  const submitForm = () => {
    const newTeamMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }

    if (!newTeamMember.name || !newTeamMember.email || !newTeamMember.role)
    return
    axios.post('fakeapi.com', newTeamMember)
    .then(res => {
      const teamMemberFromBackEnd = res.data
      setTeamMembers([teamMemberFromBackEnd, ...teamMembers])
      setFormValues(initialFormValues)
    })
    .catch(error => {
      console.log('error response: \n', error.response)
    })
  }

  useEffect(() => {
    axios.get('fakeapi.com').then(res => setTeamMembers(res.data))
  }, [])

  return (
    <div className="App">
      <h1>Team Member Form App</h1>
      <Form update={updateForm} submit={submitForm} values={formValues}/>
     {
       teamMembers.map(teamMember => {
         return (
           <TeamMember key={teamMember.id} details={teamMember} />
         )
       })
     }
    </div>
  );
}

export default App;
