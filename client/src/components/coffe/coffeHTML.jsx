import {increment, decrement, updateMenu} from '../utilities/userOptions'
import {useState, useEffect} from 'react'
export default function CoffeHTML(props) {

	return(	
		<div className='card m-1 row' >
			<div className='col-4 rounded bg-danger text-end align-self-end text-light'>
				 <b>Available: {props.available}</b>
			</div>
			<style>{`.card {cursor: pointer;transition: transform 0.1s;}.card:hover {transform: scale(1.03);border: 1px solid red; }`}</style>
       <div className='d-flex justify-content-center'>
       	<img src={props.img} className="card-img-top" style={{ width: '100px', height: '100px', alignItems: 'center' }}/>
       </div>
			<div className='card-body'>
			 	<h3 className="card-title fst-italic">{props.name}</h3>
				<b className='card-text bg-dark text-light col-4 bold'> ₡ {props.price} </b>
			</div>
		</div>
	);
};

export const CoffeModalBody = (props) => {
	const [currAmout, setCurrAmout] = useState(props.coffemaker);

	return (
	  <div className='container'>
	    <div className='d-flex justify-content-center'>
	      {/*<img src="/capucchino.png" className="card-img-top" style={{ width: '400px', height: '400px', alignItems: 'center' }}/>*/}
	    </div>
	    <div className='row justify-content-center'>
	      <button className='btn m-1 btn-outline-secondary col-1' onClick={() => {decrement(currAmout, setCurrAmout, props)}}>
	        <b>-</b>
	      </button>
	      <button className='btn m-1 active btn-light col-2'>
	      	<b>{currAmout}</b>
	      </button> 
	      <button className='btn m-1 btn-outline-danger col-1' onClick={() => {increment(currAmout, setCurrAmout, props)}}>
	        <b>+</b>
	      </button>
	    </div>
	  </div>
	);
};

export const CoffeModalFooter = (props) => {
	return (
		<div className='container position-static'>
			<div className='row text-center justify-content-between align-items-center'>
	      <button className='btn btn-lg btn-secondary m-1 col-2'>
	        Cancel
	      </button>
	      <button className='btn btn-lg btn-danger m-1 col-2' data-bs-dismiss="modal" onClick={() => props.setModalCoffe({ component: <CoffeModalBody key={0} {...props} /> })}>
	        Confirm
	      </button>
	    </div>
		</div>
	);
};


