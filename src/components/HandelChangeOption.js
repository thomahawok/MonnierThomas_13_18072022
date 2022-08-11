function HandelChangeOption(e, setEmployee, employee) {
  const idChoice = e.currentTarget.selectedIndex

  const idText = {
    name: e.target.id,
    value: e.currentTarget.options[idChoice].text,
  }
  const { value, name } = idText

  setEmployee({
    ...employee,
    [name]: value,
  })
}

export default HandelChangeOption
