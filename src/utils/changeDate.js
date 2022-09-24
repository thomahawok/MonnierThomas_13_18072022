function changeDate(data) {
  const newData = data
  const dateOB = new Date(newData.dateOfBirth)
  const day = dateOB.getDate()
  const month = dateOB.getMonth() + 1
  const year = dateOB.getFullYear()
  const newDate = `${day}/${month}/${year}`
  data.dateOfBirth = newDate

  const dateStart = new Date(newData.startDate)
  const dayStart = dateStart.getDate()
  const monthStart = dateStart.getMonth() + 1
  const yearStart = dateStart.getFullYear()
  const newDateStart = `${dayStart}/${monthStart}/${yearStart}`
  data.startDate = newDateStart

  return newData
}

export default changeDate
