import EukaDataTable from 'euka-datatables'
import { useGlobalState } from '../state/State'

export default function DataTable() {
  const [employees] = useGlobalState('employee')

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
  }

  return (
    <>
      <section className="dataTable">
        <h1 className="dataTable__employeeTitle">Current Employees</h1>
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
