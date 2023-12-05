import React, {useEffect, useState} from 'react'

export default function MenuFunctions() {

  const info = {
      carrito:[], //prodcutos que va comprar
      total:[], //precio totoal
      vuelto:0,
  }

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

  useEffect(() => {
    loadCoffes();
  }, []);

  const props = {};

  return (
    <div>
      <Menu {...props}/>
    </div>
  );
}
