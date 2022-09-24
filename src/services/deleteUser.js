import axios from 'axios'

export async function deleteUser(id) {
  const idString = id.toString()
  try {
    console.log(id)
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
