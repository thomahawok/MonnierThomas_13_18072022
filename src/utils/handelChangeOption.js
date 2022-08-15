function HandelChangeOption(e, setEmployeeFromData, employeeFromData) {
  const idChoice = e.currentTarget.selectedIndex

  const idText = {
    name: e.target.id,
    value: e.currentTarget.options[idChoice].text,
  }
  const { value, name } = idText

  setEmployeeFromData({
    ...employeeFromData,
    [name]: value,
  })
}

export default HandelChangeOption
