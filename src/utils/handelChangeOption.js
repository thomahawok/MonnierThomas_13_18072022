/**
 * Function to handle change option
 * @param {*} e - the event
 * @param {*} setEmployeeFromData  - function to set the state of the input fields
 * @param {object} employeeFromData - object with the input fields values
 * @param {String} employeeFromData.state - the name of the input field
 * @param {String} employeeFromData.department - the name of the input field
 */
function HandelChangeOption(e, setEmployeeFromData, employeeFromData) {
  const idChoice = e.currentTarget.selectedIndex
  const idText = {
    name: e.target.id,
    value: e.currentTarget.options[idChoice].text,
  }
  const { value, name } = idText

  setEmployeeFromData({
    ...employeeFromData,
    [name]: value,
  })
}

export default HandelChangeOption
