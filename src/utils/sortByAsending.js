function sortByAsending(e, employeeSort, setEmployeeSort) {
  const nameAttribute =
    e.target.parentElement.parentElement.parentElement.attributes[1].value

  isNaN(employeeSort[0][nameAttribute])
    ? setEmployeeSort(
        [...employeeSort].sort((a, b) =>
          a[nameAttribute] > b[nameAttribute] ? 1 : -1
        )
      )
    : setEmployeeSort(
        [...employeeSort].sort((a, b) => a[nameAttribute] - b[nameAttribute])
      )
}

export default sortByAsending
