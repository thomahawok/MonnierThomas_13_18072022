import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { states, departments } from '../datas/DatasForm'
import { useGlobalState } from '../state/State'
import SelectOptions from '../utils/selectOptions'
import SaveEmployee from '../utils/saveEmployee'
import HandelChange from '../utils/handelChange'
import HandelChangeOption from '../utils/handelChangeOption'
import useModal from '../components/useModal'
import Modal from '../components/Modal'

function Hom() {
  const { isShowing, toggle } = useModal()
  const [employees, setEmployees] = useGlobalState('employee')
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
  console.log({ employees })

  return (
    <main className="container">
      <div className="d-grid gap-2 text-center">
        <Link to="/CurrentEmmpoyees">
          <button type="button" className="btn btn-primary col-5">
            {' '}
            View Current Employees
          </button>
        </Link>
        <Link to="/CurrentEmmpoyeesEreka">
          <button type="button" className="btn btn-primary col-5">
            {' '}
            View Current Employees with EukaDataTable
          </button>
        </Link>
      </div>

      <h2 className="col-lg-5  col-md-9 mx-auto pt-3">Create Employee</h2>

      <form
        id="create-employee"
        className="col-lg-5 col-md-9 mx-auto"
        onSubmit={(e) =>
          SaveEmployee(e, employeeFromData, employees, setEmployees)
        }
      >
        <div className="form-group form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="first-name"
            placeholder="Dupont"
            name="firstName"
            aria-label="Username"
            aria-describedby="basic-addon1"
            onChange={(event) =>
              HandelChange(event, setEmployeeFromData, employeeFromData)
            }
          />
          <label htmlFor="first-name" className="col-sm-3 col-form-label">
            First Name
          </label>
        </div>

        <div className="form-group form-floating mb-3">
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
          <label htmlFor="last-name" className="col-sm-3 col-form-label">
            Last Name
          </label>
        </div>

        <div className="form-group form-floating mb-3">
          <input
            type="date"
            className="form-control date"
            id="date-of-birth"
            placeholder="jj/mm/aaaa"
            name="dateOfBirth"
            onChange={(event) =>
              HandelChange(event, setEmployeeFromData, employeeFromData)
            }
          />
          <label htmlFor="date-of-birth" className="col-sm-3 col-form-label">
            Date of Birth
          </label>
        </div>

        <div className="form-group form-floating mb-3">
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
          <label htmlFor="start-date" className="col-sm-3 col-form-label">
            Start Date
          </label>
        </div>

        <div className="container mb-2 py-2 border rounded">
          <h3>Address</h3>
          <div className="form-group form-floating mb-3">
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
            <label htmlFor="street" className="col-sm-3 col-form-label">
              Street
            </label>
          </div>
          <div className="form-group form-floating mb-3">
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
            <label htmlFor="city" className="col-sm-3 col-form-label">
              City
            </label>
          </div>

          <div className="form-group form-floating mb-3">
            <select
              className="form-select"
              defaultValue={'N/A'}
              id="state"
              onChange={(event) =>
                HandelChangeOption(event, setEmployeeFromData, employeeFromData)
              }
            >
              <SelectOptions options={states} title="state" />
            </select>
            <label htmlFor="state" className="col-sm-3 col-form-label">
              State
            </label>
          </div>
          <div className="form-group form-floating mb-3">
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
            <label htmlFor="zip" className="col-sm-3 col-form-label">
              Zip
            </label>
          </div>
        </div>
        <div className="form-group form-floating mb-3">
          <select
            className="form-select"
            defaultValue={'N/A'}
            id="department"
            onChange={(event) =>
              HandelChangeOption(event, setEmployeeFromData, employeeFromData)
            }
          >
            <SelectOptions options={departments} title="departments" />
          </select>
          <label htmlFor="departemnt" className="col-sm-3 col-form-label">
            Department
          </label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="btn btn-primary mt-2 col-3"
            onClick={toggle}
          >
            Save
          </button>
        </div>
      </form>

      <Modal isShowing={isShowing} hide={toggle} />
    </main>
  )
}

export default Hom
