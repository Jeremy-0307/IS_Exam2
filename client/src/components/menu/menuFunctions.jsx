import React, {useRef, useState} from 'react'
import MenuHTML from './menuHTML'

export default function MenuFunctions(props) {

  const [modalCoffe, setModalCoffe] = useState({});
  const [menu, setMenu] = useState([
  {
    name:'Americano',
    price: 850,
    available:10,
    img:'/americano.png'
  },
  {
    name:'Capuchino',
    price: 950,
    available:8,
    img:'/capuchino.png'
  },
  {
    name:'Late',
    price: 1150,
    available:10,
    img:'/late.png'
  },
  {
    name:'Mocachino',
    price: 1300,
    available:15,
    img:'/mocachino.png'
  }]);

  const modalID = 'modalCoffe';
  const refModal = useRef(null);

  props = { ...props, refModal, ...modalCoffe, setModalCoffe, setMenu, menu, modalID};

  return ( <MenuHTML {...props}/> );
}
