import axios from 'axios'

/**
 *
 * @param {*} dataId - the id of the user to delete
 * @returns {Promise<any>} Promise with the user datas
 */

export async function deleteUser(dataId) {
  const idString = dataId.toString()
  try {
    const res = await axios.delete(
      `http://localhost:3000/api/users/${idString}`
    )
    window.location.reload()
    return res
  } catch (error) {
    console.log(error)
  }
}
