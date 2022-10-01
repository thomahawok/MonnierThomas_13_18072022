import axios from 'axios'

/**
 *
 * @param {*} e - the event
 * @param {*} employeeFromData  - object with the input fields values
 * @returns  {Promise<any>} Promise with the user datas
 */

export async function postUser(e, employeeFromData) {
  e.preventDefault()
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
