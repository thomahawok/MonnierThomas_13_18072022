import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import filter from '../utils/filter'

function Search({ employeesListe, setFiltredEmployee }) {
  return (
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
        onClickCapture={(e) => filter(employeesListe, setFiltredEmployee)}
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </div>
  )
}

export default Search
