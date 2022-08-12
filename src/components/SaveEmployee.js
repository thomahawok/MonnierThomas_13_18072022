function SaveEmployee(e, employeeFromData) {
  e.preventDefault()
  const employees = JSON.parse(localStorage.getItem('employees')) || []
  employees.push(employeeFromData)
  localStorage.setItem('employees', JSON.stringify(employees))
}

export default SaveEmployee
