import { v4 as uuid } from 'uuid'

// 👉 the shape of the list of friends from API
const initialTeamMemberList = [
  {
    id: uuid(), // uuid is a lib to generate random, unique ids
    name: 'Cara',
    email: 'cara@locke.com',
    role: 'Student',
  },
]

// 👉 simulating axios for [GET] and [POST]
export default {
  get() {
    return Promise.resolve({ status: 200, success: true, data: initialTeamMemberList })
  },
  post(url, { name, email, role }) {
    const newTeamMember = { id: uuid(), name, email, role }
    return Promise.resolve({ status: 200, success: true, data: newTeamMember })
  }
}
