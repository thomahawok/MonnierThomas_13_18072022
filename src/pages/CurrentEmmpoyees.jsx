import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpAZ,
  faArrowDownAZ,
  faSearch,
} from '@fortawesome/free-solid-svg-icons'
import sortByAsending from '../utils/sortByAsending'
import sortByDescending from '../utils/sortByDescending'

function CurrentEmmpoyees() {
  let n = 1
  const employeesListe = JSON.parse(localStorage.getItem('employees'))
  const [filtredEmployee, setFiltredEmployee] = useState(employeesListe)

  const [employeeSort, setEmployeeSort] = useState(filtredEmployee)
  useEffect(() => {
    setEmployeeSort(filtredEmployee)
  }, [filtredEmployee])

  console.log({ employeeSort })
  const [numberEntriesToDisplay, setNumberEntriesToDisplay] = useState(
    Number(5)
  )
  const [CurrentPage, setCurrentPage] = useState(1)

  const totalNumberOfEntries = employeeSort.length
  const numberPages = Math.ceil(totalNumberOfEntries / numberEntriesToDisplay)

  function getCurrentPages(e) {
    setCurrentPage(e.currentTarget.innerText)
  }

  function employeeToDisplayByPages(
    numberEntriesToDisplay,
    CurrentPage,
    employeeSort
  ) {
    const start = (CurrentPage - 1) * numberEntriesToDisplay
    const end = CurrentPage * numberEntriesToDisplay

    return employeeSort.slice(start, end)
  }

  function next() {
    if (CurrentPage < numberPages) {
      setCurrentPage(CurrentPage + 1)
    }
  }

  function previous() {
    if (CurrentPage > 1) {
      setCurrentPage(CurrentPage - 1)
    }
  }

  function filter(employeesListe) {
    const input = document.getElementById('form1').value
    console.log({ input })
    setFiltredEmployee(
      employeesListe.filter(
        (employee) =>
          employee.firstName.toLowerCase().includes(input.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(input.toLowerCase()) ||
          employee.dateOfBirth.toLowerCase().includes(input.toLowerCase()) ||
          employee.startDate.toLowerCase().includes(input.toLowerCase()) ||
          employee.department.toLowerCase().includes(input.toLowerCase()) ||
          employee.street.toLowerCase().includes(input.toLowerCase()) ||
          employee.city.toLowerCase().includes(input.toLowerCase()) ||
          employee.state.toLowerCase().includes(input.toLowerCase()) ||
          employee.zipCode.toLowerCase().includes(input.toLowerCase())
      )
    )
  }

  console.log({ filtredEmployee })

  return (
    <main className="container table-responsive">
      <div className="row justify-content-between align-middle">
        <div className="col showEntries">
          <div
            className="row justify-content-start align-middle "
            style={{ width: '40%' }}
          >
            <h6 className="col my-auto">Show </h6>

            <select
              className=" col form-select"
              aria-label="Default select "
              style={{ width: 'auto' }}
              onChange={(e) =>
                setNumberEntriesToDisplay(Number(e.currentTarget.value))
              }
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
            <h6 className="col my-auto">Entries</h6>
          </div>
        </div>
        <div className=" col input-group justify-content-end mb-1">
          <div className="form-outline">
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="Search"
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClickCapture={(e) => filter(employeesListe)}
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
      <table className="table table-sm align-middle">
        <caption>Products</caption>
        <thead>
          <tr>
            {Object.keys(employeesListe[0]).map((key) => (
              <th scope="col" key={key}>
                <button
                  type="button"
                  name={key}
                  className="btn btn-primary headListeEmployees"
                >
                  <div>{key}</div>
                  <div>
                    <div
                      onClickCapture={(e) =>
                        sortByAsending(e, employeeSort, setEmployeeSort)
                      }
                    >
                      <FontAwesomeIcon icon={faArrowUpAZ} />
                    </div>
                    <div
                      onClickCapture={(e) =>
                        sortByDescending(e, employeeSort, setEmployeeSort)
                      }
                    >
                      <FontAwesomeIcon icon={faArrowDownAZ} />
                    </div>
                  </div>
                </button>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {employeeToDisplayByPages(
            numberEntriesToDisplay,
            CurrentPage,
            employeeSort
          ).map((employee, i) => (
            <tr key={i} className={i}>
              {Object.keys(employee).map((employe) => (
                <td key={employe} className={employe}>
                  {employee[employe]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item " onClickCapture={previous}>
            <a className="page-link" href="#">
              Previous
            </a>
          </li>
          {[...Array(Number(numberPages))].map((numberPage) => (
            <li
              className="page-item"
              key={Math.random()}
              onClickCapture={(e) => getCurrentPages(e)}
            >
              <a className="page-link" href="#">
                {n++}
              </a>
            </li>
          ))}

          <li className="page-item" onClickCapture={next}>
            <a className="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      <Link to="/">
        <p className="text-center"> Home</p>
      </Link>
    </main>
  )
}

export default CurrentEmmpoyees
