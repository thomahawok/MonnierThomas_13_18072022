import axios from 'axios'

/**
 *
 * @returns {Promise<any>} Promise with the user datas
 */

export async function getUsers() {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await axios.get('http://localhost:3000/api/users')
      resolve(res.data)
    } catch (error) {
      reject(error)
    }
  })
}
