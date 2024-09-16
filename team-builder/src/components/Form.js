import React from 'react'

export default function Form(props) {
    const {values, update, submit } = props

    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    return (
        <form className='form container' onSubmit={onSubmit}>
        <div className='form-group inputs'>
          <label>Name
              <input type='text' name='name' onChange={onChange} value={values.name} />
          </label>
  
          <label>Email            
            <input type='email' name='email' value={values.email} onChange={onChange} />
          </label>
          <label>Role
            <select value={values.role} name='role' onChange={onChange}>
              <option value=''>-- Select a Role --</option>
              <option value='Student'>Student</option>
              <option value='TL'>Team Lead</option>
              <option value='Instructor'>Instructor</option>
              <option value='Alumni'>Alumni</option>
            </select>
          </label>
  
          <div className='submit'>
            <button disabled={!values.name || !values.email || !values.role}>submit</button>
          </div>
        </div>
      </form>
    )
}
