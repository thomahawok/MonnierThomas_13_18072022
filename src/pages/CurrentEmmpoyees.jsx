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
import ShowEntries from '../components/ShowEntries'
import Search from '../components/Search'

function CurrentEmmpoyees() {
  let n = 1
  const employeesListe = JSON.parse(localStorage.getItem('employees'))

  const [filtredEmployee, setFiltredEmployee] = useState(employeesListe)

  const [employeeSort, setEmployeeSort] = useState(filtredEmployee)
  useEffect(() => {
    setEmployeeSort(filtredEmployee)
  }, [filtredEmployee])

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

  console.log({ filtredEmployee })

  return (
    <main className="container table-responsive">
      <h1 className="employeeTitle">Current Employees</h1>
      <div className="row justify-content-between align-middle">
        <ShowEntries setNumberEntriesToDisplay={setNumberEntriesToDisplay} />
        <Search
          employeesListe={employeesListe}
          setFiltredEmployee={setFiltredEmployee}
        />
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
