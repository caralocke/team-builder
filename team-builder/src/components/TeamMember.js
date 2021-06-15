import React from 'react'

export default function TeamMember(props) {
    const { details } = props
    if (!details) {
        return <h2>Working on fetching your friend's details...</h2>
    }
    return (
        <div>
            <h3>{details.memberName}</h3>
            <p>Email: {details.email}</p>
            <p>Role: {details.role}</p>            
        </div>
    )
}
