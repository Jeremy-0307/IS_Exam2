import React from 'react';

export default function Modal(props) {
  const {modalID, title, titleStyle, component, size, footer} = props;

  return (
    <div className={`modal fade ${size}`}  id={modalID} tabIndex="-1" aria-labelledby={modalID} aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content ">
          <div className={`modal-header ${titleStyle}`}>
            <b className="modal-title ">{title}</b>
          </div>
          <div className="modal-body ">
            {component}
          </div>
          <div className="modal-footer">
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};