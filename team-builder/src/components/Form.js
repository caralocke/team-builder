import React from 'react'

export default function Form() {
    return (
        <div>
            <form>
              <label>Name: 
                <input 
                  type='text'
                  name='memberName'
                />
              </label>
              <label>Email:
                <input 
                  type='email'
                  name='email'
                />
              </label>
              <label>Role:
                <select>
                  <option>-- Select a Role --</option>
                  <option>Student</option>
                  <option>Instructor</option>
                  <option>Alumni</option>
                </select>
              </label>
            </form>
            
        </div>
    )
}
