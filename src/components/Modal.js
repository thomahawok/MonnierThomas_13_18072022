import ReactDOM from 'react-dom'

const Modal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modalOverlay">
            <div className="modalOverlay__wrapper">
              <div className="modal-header">
                <h4>Employee Created!</h4>
                <button
                  type="button"
                  className="modalOverlay__wrapper__header__closeButton"
                  onClick={hide}
                >
                  <span>&times;</span>
                </button>
              </div>
            </div>
          </div>
        </>,
        document.getElementById('modal-root')
      )
    : null

export default Modal
