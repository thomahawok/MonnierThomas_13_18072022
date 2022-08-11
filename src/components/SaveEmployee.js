function SaveEmployee(e, employee) {
  const employees = JSON.parse(localStorage.getItem('employees')) || []
  employees.push(employee)
  localStorage.setItem('employees', JSON.stringify(employees))
  e.preventDefault()
}

export default SaveEmployee
