import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faAngleDoubleLeft,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons'

function Pagination({ NumberLignesToDisplay, totalLignes, numberPages }) {
  let n = 1

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className="page-item disabled">
          <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">
            Previous
          </a>
        </li>
        {[...Array(Number(numberPages))].map((numberPage) => (
          <li className="page-item" key={Math.random()}>
            <a className="page-link" href="#">
              {n++}
            </a>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
