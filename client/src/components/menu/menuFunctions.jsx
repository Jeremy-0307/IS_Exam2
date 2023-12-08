import React, {useRef, useState, useEffect} from 'react'
import MenuHTML from './menuHTML'
import axios from 'axios';
import {serverURL} from '../utilities/constants'

export default function MenuFunctions(props) {

  const [modalCoffe, setModalCoffe] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function getAvailableCoffes() {
      try {
        const serverResponse = await axios.get(`${serverURL}coffe/`);
        if(serverResponse.data){
          setMenu(serverResponse.data);
        }
      } catch (error) {
        console.log('error');
      }
    }
    getAvailableCoffes();
  }, []);

  const modalID = 'modalCoffe';
  const refModal = useRef(null);

  props = { ...props, refModal, ...modalCoffe, setModalCoffe, setMenu, menu, modalID};

  return ( <MenuHTML {...props}/> );
}
