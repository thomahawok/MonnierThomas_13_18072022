function filter(employeesListe, setFiltredEmployee) {
  const input = document.getElementById('form1').value
  console.log({ input })
  setFiltredEmployee(
    employeesListe.filter(
      (employee) =>
        employee.firstName.toLowerCase().includes(input.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(input.toLowerCase()) ||
        employee.dateOfBirth.toLowerCase().includes(input.toLowerCase()) ||
        employee.startDate.toLowerCase().includes(input.toLowerCase()) ||
        employee.department.toLowerCase().includes(input.toLowerCase()) ||
        employee.street.toLowerCase().includes(input.toLowerCase()) ||
        employee.city.toLowerCase().includes(input.toLowerCase()) ||
        employee.state.toLowerCase().includes(input.toLowerCase()) ||
        employee.zipCode.toLowerCase().includes(input.toLowerCase())
    )
  )
}

export default filter
