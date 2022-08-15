function SaveEmployee(e, employeeFromData, employees, setEmployees) {
  e.preventDefault()

  const newEmployees = [...employees, employeeFromData]
  console.log({ newEmployees })
  setEmployees(newEmployees)
  // setIsValid(true)

  document.getElementById('create-employee').reset()
}

export default SaveEmployee
