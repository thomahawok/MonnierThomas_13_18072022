/**
 * Function to handle the change of the input fields
 * @param {*} e - the event
 * @param {*} setEmployeeFromData - function to set the state of the input fields
 * @param {object} employeeFromData - object with the input fields values
 * @param {String} employeeFromData.firstName - the name of the input field
 * @param {String} employeeFromData.lastName - the name of the input field
 * @param {String} employeeFromData.dateOfBirth - the name of the input field
 * @param {String} employeeFromData.startDate - the name of the input field
 * @param {String} employeeFromData.street - the name of the input field
 * @param {String} employeeFromData.city - the name of the input field
 * @param {String} employeeFromData.zipCode - the name of the input field
 * @returns {object} employeeFromData
 */

function HandelChange(e, setEmployeeFromData, employeeFromData) {
  let { value, name } = e.currentTarget
  /*
  // modify the date format
  if (name === 'dateOfBirth' || name === 'startDate') {
    const date = new Date(value)
    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()
    const newDate = `${day}/${month}/${year}`
    value = newDate
  }

  console.log(value, name)
*/
  setEmployeeFromData({
    ...employeeFromData,
    [name]: value,
  })

  console.log(employeeFromData)
}

export default HandelChange
