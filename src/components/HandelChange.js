function HandelChange(e, setEmployee, employee) {
  const { value, name } = e.currentTarget
  setEmployee({
    ...employee,
    [name]: value,
  })
}

export default HandelChange
