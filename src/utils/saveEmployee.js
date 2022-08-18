/**
 * Function to save employee data to the database
 * @param {*} e - the event
 * @param {Oject} employeeFromData - object with the input fields values
 * @param {Object[]} employees - the array of the employees
 * @param {string} employees.firstName
 * @param {string} employees.lastName
 * @param {string} employees.dateOfBirth
 * @param {string} employees.startDate
 * @param {string} employees.street
 * @param {string} employees.city
 * @param {string} employees.zipCode
 * @param {string} employees.state
 * @param {string} employees.department
 * @param {*} setEmployees - function to set the state of the input fields
 */
function SaveEmployee(e, employeeFromData, employees, setEmployees) {
  e.preventDefault()
  const newEmployees = [...employees, employeeFromData]
  setEmployees(newEmployees)
  document.getElementById('create-employee').reset()
}

export default SaveEmployee
