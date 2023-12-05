import React, {useEffect, useState} from 'react'

export default function MenuFunctions() {

  async function loadCoffes() {
    try{
      const response = await axios.get('coffes');
      if (response !== undefined){
        // imprimir menu en la pantalla
      }
    } catch {
      // imprimir que hubo un error
    }
  };

  const buttonRef = useRef(null);

  let props = {buttonRef};


  return ( <Menu {...props}/> );
}
