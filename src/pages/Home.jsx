import { Link } from 'react-router-dom'
import { Modal, useModal } from 'npmreactmodal'
import Form from '../components/Form'

/**
 * Function that returns the Hom page
 * @returns {React.ReactElement} JSX.Element - the main page with API data
 */

function Hom() {
  const { isShowing, toggle } = useModal()

  return (
    <main className="container">
      <div className="text-center">
        <Link
          className="btn btn-primary col-5"
          role="button"
          to="/CurrentEmmpoyeesEreka"
        >
          {' '}
          View Current Employees with EukaDataTable
        </Link>
      </div>

      <h2 className="col-lg-5  col-md-9 mx-auto pt-3">Create Employee</h2>

      <Form toggle={toggle} />
      <Modal isShowing={isShowing} hide={toggle} text="Employee Created !" />
    </main>
  )
}

export default Hom
