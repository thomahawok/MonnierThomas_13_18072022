import axios from 'axios'

export async function deleteUser(dataId) {
  const idString = dataId.toString()
  try {
    const res = await axios.delete(
      `http://localhost:3000/api/users/${idString}`
    )
    // refresh the page to see the updated list
    window.location.reload()
    return res
  } catch (error) {
    console.log(error)
  }
}
