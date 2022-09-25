function deleteUser(selected, employeesListToDelete, employees, setEmployees) {
  if (
    employeesListToDelete !== null &&
    employeesListToDelete !== undefined &&
    selected !== null
  ) {
    const newEmlpoyeesListe = employees.filter(
      (val) => !employeesListToDelete.includes(val)
    )
    selected.addEventListener('click', (e) => {
      setEmployees(newEmlpoyeesListe)
      const checkbox = document.querySelectorAll('.input-select-row')
      console.log(checkbox)
      checkbox.forEach((element) => {
        element.checked = false
      })
    })
  }
}

export default deleteUser
