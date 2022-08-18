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
  const { value, name } = e.currentTarget
  setEmployeeFromData({
    ...employeeFromData,
    [name]: value,
  })
}

export default HandelChange
