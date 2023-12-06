import React from 'react';

export default function Modal(props) {
  console.log("modal->>>", props);
  const {modalID, title, titleStyle, component, size} = props;

  return (
    <div className={`modal fade ${size}`}  id={modalID} tabIndex="-1" aria-labelledby={modalID} aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className={`modal-header ${titleStyle}`}>
            <h1 className="modal-title fs-5">{title}</h1>
            <button className="btn btn-light" data-bs-dismiss="modal" aria-label="Close">
              X
            </button>
          </div>
          <div className="modal-body">
            {component}
          </div>
        </div>
      </div>
    </div>
  );
};