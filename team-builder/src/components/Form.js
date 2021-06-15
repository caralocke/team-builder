import React from 'react'

export default function Form() {
    return (
        <div>
            <form>
             <div>
              <label>Name: 
                <input 
                  type='text'
                  name='memberName'
                />
              </label>
             </div>
             <div>
              <label>Email:
                <input 
                  type='email'
                  name='email'
                />
              </label>
             </div>
             <div>
              <label>Role:
                <select>
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
