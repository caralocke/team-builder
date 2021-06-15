import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props //received props from App.js

    //create a function to handle changing the information inside the inputs
    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }
    return (
        <div>
            <form>
             <div>
              <label>Name: 
                <input 
                  type='text'
                  name='memberName'
                  placeholder='Your name here'
                  onChange={null}
                  value={values.memberName}
                />
              </label>
             </div>
             <div>
              <label>Email:
                <input 
                  type='email'
                  name='email'
                  placeholder='Your email here'
                  onChange={null}
                  value={values.email}
                />
              </label>
             </div>
             <div>
              <label>Role:
                <select name='role' onChange={onChange} value={values.role}>
                  <option>-- Select a Role --</option>
                  <option>Student</option>
                  <option>Instructor</option>
                  <option>Alumni</option>
                </select>
              </label>
             </div>
             <button>Submit</button>
            </form>            
        </div>
    )
}
