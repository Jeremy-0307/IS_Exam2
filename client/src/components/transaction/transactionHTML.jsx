import React, {useRef, useState} from 'react'


export const overDose = (Alien, userInfo) => {
  const total = Alien.reduce((accumulator, i) => {
    return accumulator + i.quantity * i.coin;
  }, 0);

  return (total >= userInfo.total)?true:false; 
};


export const minusCoin = (Alien, setAlien, index) => {
  let updatedAlien = [...Alien];
  updatedAlien[index].quantity += (updatedAlien[index].quantity === 0)?0:-1;
  setAlien(updatedAlien); // Update state directly with the modified array
};

export const plusCoin = (Alien, setAlien, index) => {
  let updatedAlien = [...Alien];
  updatedAlien[index].quantity += (updatedAlien[index].quantity === 999)?999:1;
  setAlien(updatedAlien); // Update state directly with the modified array
};


export const moneySoFar = (Alien) => {
  const total = Alien.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity * currentValue.coin;
  }, 0);
  return total;
};


export const ComadrejaRabin = (props) => {
  const {Alien, setAlien} = props;

  const letfordead = overDose(Alien, props.userInfo);

  return(
    <>
      <table className="table text-center align-middle">
        <thead>
          <tr>
            <th scope="col">Coin</th>
            <th scope="col">Quantity</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {Alien.map  ((item, index) => (
            <tr key={index}>
              <td className='col-4'>₡ {item.coin}</td>
              <td className='col-4'>{item.quantity}</td>
              <td>
                <div className='d-flex text-truncate justify-content-evenly'>
                <button className='btn btn-outline-danger col-5' onClick={()=>{minusCoin(Alien, setAlien, index)}}>-</button>
                <button className='btn btn-outline-success col-5' disabled={letfordead} onClick={()=>{plusCoin(Alien, setAlien, index)}}>+</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <tr key='total row'>
          <td><h3>Total</h3></td>
          <td>
            <div className='input-group-text'>
              <b>&nbsp;&nbsp;</b><input type='text' className='form-control form-control-sm text-center text-truncate' value={`₡ ${moneySoFar(Alien)}`} disabled/>
            </div>
          </td>
        </tr>
        <tr key='pagar row'>
          <td><h3>A pagar</h3></td>
          <td>
            <div className='input-group-text'>
              <b>&nbsp;&nbsp;</b><input type='text' className='form-control form-control-sm text-center text-truncate' value={`₡ ${props.userInfo.total}`} disabled/>
            </div>
          </td>
        </tr>
      </table>
    </>
  );
};

export default function Transaction(props) {
  const comadreja = props.Alien.map(item => ({...item, quantity: 0}));
  return (
    <>
      <button className='btn btn-light col-2' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'
        onClick={()=>{props.setAlien(comadreja)}}>
        offcanvas
      </button>
      <div className='offcanvas offcanvas-start w-45' tabindex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
        <div className='offcanvas-body'>
          {/*<h1>Bill</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {props.userInfo.bill.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td> {props.menu.find(m => m.name === item.name)?.price}</td>
                </tr>
              ))}
            </tbody>
          </table>*/}
        <ComadrejaRabin{...props}/>
          <button className='btn btn-light'> >> </button>
        </div>
      </div>

    </>
  );
}
