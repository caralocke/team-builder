import React from 'react'

export default function Form(props) {
    const { values, update, submit } = props //received props from App.js

    //create a function to handle changing the information inside the inputs
    const onChange = evt => {
        const { name, value } = evt.target
        update(name, value)
    }

    //create a function to handle the submit
    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
             <div>
              <label>Name: 
                <input 
                  type='text'
                  name='memberName'
                  placeholder='Your name here'
                  onChange={onChange}
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
                  onChange={onChange}
                  value={values.email}
                />
              </label>
             </div>

             <div>
              <label>Role:
                <select name='role' onChange={onChange} value={values.role}>
                  <option value=''>-- Select a Role --</option>
                  <option value='Student'>Student</option>
                  <option value='Instructor'>Instructor</option>
                  <option value='Alumni'>Alumni</option>
                </select>
              </label>
             </div>

             <div>
                <button>Submit</button>
             </div>
            </form>            
        </div>
    )
}
