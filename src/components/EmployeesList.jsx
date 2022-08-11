function EmployeesListe({ number, employee }) {
  console.log(employee)
  console.log(number)
  for (let i = 0; i < number; i++) {
    return (
      <tr key={i} className={i}>
        {employee.map(
          (employe) => (
            console.log(employe),
            (
              <td key={Math.random()} className={employe}>
                {employee[employe]}
              </td>
            )
          )
        )}
      </tr>
    )
  }
}

export default EmployeesListe
