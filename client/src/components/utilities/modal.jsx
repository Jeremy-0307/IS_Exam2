import React from 'react';

export const setModal = (setModalValores, props) => {
  setModalValores(props);
}

export const Modal = (props) => {
  const {modalID, titulo, tituloEstilos, componente, boton, funcion, tamanio, footer} = props;

  return (
    <div className={`modal fade ${tamanio}`} id={modalID} tabIndex="-1" aria-labelledby={modalID} aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          {titulo && (
            <div className={`modal-header ${tituloEstilos}`}>
              <h1 className="modal-title fs-5">{titulo}</h1>
              <button className="btn btn-light" data-bs-dismiss="modal" aria-label="Close">
                <b>X</b>
              </button>
            </div>
          )}
          <div className="modal-body">{componente}</div>
          {footer && (
            <div className="modal-footer">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};