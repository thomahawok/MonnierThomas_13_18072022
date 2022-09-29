import React, { useState } from 'react'
import { states, departments } from '../datas/DatasForm'
import SelectOptions from '../utils/selectOptions'
import HandelChange from '../utils/handelChange'
import HandelChangeOption from '../utils/handelChangeOption'
import { postUser } from '../services/postUser'

/**
 * Componet - Form - Create Employee
 * @param {*} toggle - function to toggle the modal (returns true or false)
 * @returns  {React.ReactElement} JSX.Element - Form
 */

function Form({ toggle }) {
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
    id: '',
  })

  return (
    <form
      id="create-employee"
      className="col-lg-5 col-md-9 mx-auto"
      onSubmit={(e) => {
        postUser(e, employeeFromData)
        toggle()
      }}
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
          required
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
          required
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
          required
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
          required
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
            required
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
            required
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
            required
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
            required
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
          required
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
        <button type="submit" className="btn btn-primary mt-2 col-3">
          Save
        </button>
      </div>
    </form>
  )
}

export default Form
