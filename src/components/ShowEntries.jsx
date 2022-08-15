function ShowEntries({ setNumberEntriesToDisplay }) {
  return (
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
  )
}
export default ShowEntries
