import './App.css';
import React, {useState} from 'react'
import TeamMember from './components/TeamMember'
import Form from './components/Form'
import axios from 'axios'

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
    if (!newTeamMember.name || !newTeamMember.email || ~newTeamMember.role)
    return
    axios.post('fakeapi.com', newTeamMember)
    .then(res => {
      console.log('res.data: \n', res.data)
      const teamMemberFromBackEnd = res.data
      setTeamMembers([teamMemberFromBackEnd, ...teamMembers])
      setFormValues(initialFormValues)
    })
  }

  return (
    <div className="App">
      <Form update={updateForm} submit={submitForm} values={formValues}/>
     <TeamMember />
    </div>
  );
}

export default App;
