import axios from 'axios'

export async function postUser(e, employeeFromData) {
  console.log(employeeFromData)
  //e.preventDefault()
  try {
    const res = await axios.post(
      'http://localhost:3000/api/users',
      employeeFromData
    )
    e.target.reset()
    console.log(res)
    return res
  } catch (error) {
    console.log(error)
  }
}
