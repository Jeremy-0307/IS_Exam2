import React, {useRef, useState, useEffect} from 'react'
import MenuHTML from './menuHTML'
import axios from 'axios';
import {serverURL} from '../utilities/constants'

export default function MenuFunctions(props) {

  const [modalCoffee, setModalCoffee] = useState({});
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function getAvailableCoffees() {
      try {
        const serverResponse = await axios.get(`${serverURL}coffee/`);
        if(serverResponse.data){
          setMenu(serverResponse.data);
        }
      } catch (error) {
        console.log('error');
      }
    }
    getAvailableCoffees();
  }, []);

  const modalID = 'modalCoffee';
  const refModal = useRef(null);

  props = { ...props, refModal, ...modalCoffee, setModalCoffee, setMenu, menu, modalID};

  return ( <MenuHTML {...props}/> );
}
