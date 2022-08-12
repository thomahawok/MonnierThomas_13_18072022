import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { states, departments } from '../datas/DatasForm'
//import { useGlobalState } from '../../state/State'
import SelectOptions from '../components/SelectOptions'
import SaveEmployee from '../components/SaveEmployee'
import HandelChange from '../components/HandelChange'
import HandelChangeOption from '../components/HandelChangeOption'
import useModal from '../components/useModal'
import Modal from '../components/Modal'

function Hom() {
  const { isShowing, toggle } = useModal()
  /// const [employees, setEmployees] = useGlobalState('employee')
  const [employeeFromData, setEmployeeFromData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  })
  //console.log({ employees })

  return (
    <main className="container">
      <Link to="/CurrentEmmpoyees">
        <p className="text-center"> View Current Employees</p>
      </Link>
      <Link to="/CurrentEmmpoyeesEreka">
        <p className="text-center"> View Current Employees with Ereka</p>
      </Link>
      <h2>Create Employee</h2>

      <form
        id="create-employee"
        onSubmit={(e) => SaveEmployee(e, employeeFromData)}
      >
        <div className="form-group mb-2">
          <label htmlFor="first-name" className="col-sm-2 col-form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="first-name"
            placeholder="Dupont"
            name="firstName"
            onChange={(event) =>
              HandelChange(event, setEmployeeFromData, employeeFromData)
            }
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="last-name" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="last-name"
            placeholder="Damien"
            name="lastName"
            onChange={(event) =>
              HandelChange(event, setEmployeeFromData, employeeFromData)
            }
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="date-of-birth" className="col-sm-2 col-form-label">
            Date of Birth
          </label>
          <input
            type="date"
            className="form-control"
            id="date-of-birth"
            placeholder="jj/mm/aaaa"
            name="dateOfBirth"
            onChange={(event) =>
              HandelChange(event, setEmployeeFromData, employeeFromData)
            }
          />
        </div>

        <div className="form-group mb-2">
          <label htmlFor="start-date" className="col-sm-2 col-form-label">
            Start Date
          </label>
          <input
            type="date"
            className="form-control"
            id="start-date"
            placeholder="jj/mm/aaaa"
            name="startDate"
            onChange={(event) =>
              HandelChange(event, setEmployeeFromData, employeeFromData)
            }
          />
        </div>

        <div className="container form-group mb-2 py-2 border">
          <h3>Address</h3>
          <label htmlFor="street" className="col-sm-2 col-form-label">
            Street
          </label>
          <input
            type="text"
            className="form-control"
            id="street"
            placeholder="Street"
            name="street"
            onChange={(event) =>
              HandelChange(event, setEmployeeFromData, employeeFromData)
            }
          />
          <label htmlFor="city" className="col-sm-2 col-form-label">
            City
          </label>
          <input
            type="text"
            className="form-control"
            id="city"
            placeholder="City"
            name="city"
            onChange={(event) =>
              HandelChange(event, setEmployeeFromData, employeeFromData)
            }
          />
          <label htmlFor="state" className="col-sm-2 col-form-label">
            State
          </label>
          <select
            className="form-control"
            defaultValue={'N/A'}
            id="state"
            onChange={(event) =>
              HandelChangeOption(event, setEmployeeFromData, employeeFromData)
            }
          >
            <SelectOptions options={states} title="state" />
          </select>

          <label htmlFor="zip" className="col-sm-2 col-form-label">
            Zip
          </label>
          <input
            type="text"
            className="form-control"
            id="zip"
            placeholder="Zip"
            name="zipCode"
            onChange={(event) =>
              HandelChange(event, setEmployeeFromData, employeeFromData)
            }
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="departemnt" className="col-sm-2 col-form-label">
            Department
          </label>
          <select
            className="form-control"
            defaultValue={'N/A'}
            id="department"
            onChange={(event) =>
              HandelChangeOption(event, setEmployeeFromData, employeeFromData)
            }
          >
            <SelectOptions options={departments} title="departments" />
          </select>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary" onClick={toggle}>
            Save
          </button>
        </div>
      </form>

      <Modal isShowing={isShowing} hide={toggle} />
    </main>
  )
}

export default Hom
