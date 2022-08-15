import DataTable from '../components/DataTable'
import { Link } from 'react-router-dom'

export default function CurrentEmmpoyeesEreka() {
  return (
    <main className="col-lg-10 col-md-9 mx-auto">
      <div className="container mb-2 py-2 border rounded">
        <DataTable />
      </div>
      <div className="text-center">
        <Link className="dataTablehomeBtn" to="/">
          <button type="button" className="btn btn-primary">
            {' '}
            Home
          </button>
        </Link>
      </div>
    </main>
  )
}
