import React, {useRef, useState} from 'react'
import {checkAmount, minusCoin, plusCoin, currentMoney} from './transactionFunctions'
import {CurrentBill} from '../bill/billHTML'

export const ChoosePayment = (props, switchCanvass) => {
  const {userInfo, setUserInfo} = props;
  const isValid = checkAmount(userInfo.purse, userInfo);

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
          {userInfo.purse?.map ( (item, index) => (
            <tr key={index}>
              <td className='col-4'>₡ {item.coin}</td>
              <td className='col-4'>{item.quantity}</td>
              <td>
                <div className='d-flex text-truncate justify-content-evenly'>
                  <button className='btn btn-outline-danger col-5' onClick={()=>{minusCoin(userInfo.purse, setUserInfo, index)}}>-</button>
                  <button className='btn btn-outline-success col-5' disabled={isValid} onClick={()=>{plusCoin(userInfo.purse, setUserInfo, index)}}>+</button>
                </div>
              </td>
            </tr>
          ))}
          <tr key='total row'>
          <td><h3>Total</h3></td>
          <td>
            <div className='input-group-text'>
              <b>&nbsp;&nbsp;</b><input type='text' className='form-control form-control-sm text-center text-truncate' value={`₡ ${currentMoney(userInfo.purse)}`} disabled/>
            </div>
          </td>
          <td></td>
        </tr>
        <tr key='pagar row'>
          <td><h3>To pay</h3></td>
          <td>
            <div className='input-group-text'>
              <b>&nbsp;&nbsp;</b><input type='text' className='form-control form-control-sm text-center text-truncate' value={`₡ ${userInfo.total}`} disabled/>
            </div>
          </td>
          <td></td>
        </tr>
        </tbody>
      </table>
      <div className="d-flex row justify-content-between">
        <button className='btn btn-outline-secondary bt-sm fw-bold col-3 text-center' onClick={() => props.switchCanvass((prev) => !prev)}>&lt;&lt;</button>
        <button className='btn btn-outline-light btn-lg col-8' disabled={!isValid && (props.userInfo.total)}> Pay </button>
      </div>
    </>
  );
};

export default function Canvass(props) {
  const [Canvass, switchCanvass] = useState(true);
  props = {...props, switchCanvass}
  return (
    <>
      <div className='offcanvas offcanvas-start w-45' tabIndex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
        <div className='offcanvas-body container '>
        {Canvass === false?
          (<CurrentBill   {...props}/>)
            :
          (<ChoosePayment {...props}/>)}
        </div>
      </div>
    </>
  );
}
