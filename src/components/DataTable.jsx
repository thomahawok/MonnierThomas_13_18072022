import EukaDataTable from 'euka-datatables'
import { useGlobalState } from '../state/State'
import { useState } from 'react'
import deleteUser from '../utils/deleteUser'

/**
 * DataTable component
 * @returns {React.ReactElement} JSX.Element - the list of employees
 */

export default function DataTable() {
  const selected = document.querySelector('.selected-info')
  const checkbox = document.getElementsByTagName('input')

  for (let i = 0; i < checkbox.length; i++) {
    checkbox[i].setAttribute('aria-label', 'select employee')
  }

  const [employees, setEmployees] = useGlobalState('employee')
  const [employeesListToDelete, setEmployeesListToDelete] = useState()

  deleteUser(selected, employeesListToDelete, employees, setEmployees)

  let columns = [
    {
      name: 'firstName',
      label: 'First Name',
    },
    {
      name: 'lastName',
      label: 'Last Name',
    },
    {
      name: 'startDate',
      label: 'Start Date',
    },
    {
      name: 'department',
      label: 'Department',
    },
    {
      name: 'dateOfBirth',
      label: 'Date of Birth',
    },
    {
      name: 'street',
      label: 'Street',
    },
    {
      name: 'city',
      label: 'City',
    },
    {
      name: 'state',
      label: 'State',
    },
    {
      name: 'zipCode',
      label: 'Zip Code',
    },
  ]

  let options = {
    responsive: 'collapse',
    recordsPerPageOptions: { 10: 10, 25: 25, 50: 50, 100: 100 },
    selectRows: true,
    onRowsSelect: (selectedDataInices, selectedData, parentRecord) => {
      'selectedData'

      setEmployeesListToDelete(selectedData)
    },
  }

  return (
    <>
      <section className="dataTable">
        <h2 className="dataTable__employeeTitle">Current Employees</h2>
        <EukaDataTable
          key={'table-1'}
          columns={columns}
          data={employees}
          options={options}
        />
      </section>
    </>
  )
}
