import React, {useRef, useState} from 'react'
import MenuHTML from './menuHTML'

export default function MenuFunctions() {

  const [modalCoffe, setModalCoffe] = useState({
  });
  const modalID = 'modalCoffe';
  const refModal = useRef(null);

  let props = {refModal, ...modalCoffe, setModalCoffe, modalID};


  return ( <MenuHTML {...props}/> );
}
