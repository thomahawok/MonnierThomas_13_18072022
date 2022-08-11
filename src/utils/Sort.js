function Sort(employeeSort) {
  console.log(employeeSort)
  const sorted = [...employeeSort].sort(function (a, b) {
    return a.firstName > b.firstName ? 1 : -1
  })
  console.log(employeeSort)
  return sorted
  /*  for (let i = 0; i < employeesListe.length; i++) {
    
   
    
    
    */
}

export default Sort
