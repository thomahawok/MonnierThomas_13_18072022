function HandelChange(e, setEmployeeFromData, employeeFromData) {
  const { value, name } = e.currentTarget
  setEmployeeFromData({
    ...employeeFromData,
    [name]: value,
  })
}

export default HandelChange
