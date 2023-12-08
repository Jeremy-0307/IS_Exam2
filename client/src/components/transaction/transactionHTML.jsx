import React, {useRef, useState} from 'react'

export const michigan = (index, setA, A) => {
  const updatedA = [...A]; 
  updatedA[index] = { ...A[index], quantity: A[index].quantity + 1 };
  setA(updatedA);
};

export const overDose = (A, userInfo) => {
  // const total = A.reduce((accumulator, i) => {
  //   return accumulator + i.quantity * i.coin;
  // }, 0);

  return false; 
};


export const ComadrejaRabin = (props) => {

  const [alien, setAlien] = useState(
  [
    {coin:25,   quantity:0},
    {coin:50,   quantity:0},
    {coin:100,  quantity:0},
    {coin:500,  quantity:0},
  ]);
  const letfordead = overDose(alien, props.userInfo);
  return(
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Coin</th>
            <th scope="col">Quantity</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {alien.map((item, index) => (
            <tr key={index}>
              <td>{item.coin}</td>
              <td>{item.quantity}</td>
              <td className='container row '>
                <button className='btn btn-outline-danger m-1 col' disabled={true}>-</button>
                <button className='btn btn-outline-success m-1 col' disabled={true}>+</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default function Transaction(props) {

  return (
    <>
      <button className='btn btn-light col-2' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'>
        offcanvas
      </button>
      <div className='offcanvas offcanvas-start' tabindex='-1' id='offcanvasExample' aria-labelledby='offcanvasExampleLabel'>
        <div className='offcanvas-body'>
          <h1>Bill</h1>
          <ComadrejaRabin/>
          <button className='btn btn-light'> >> </button>
        </div>
      </div>

    </>
  );
}
