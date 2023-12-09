import {increment, decrement, updateBill} from '../utilities/userOptions'
import {useState} from 'react'

export default function CoffeeHTML(props) {
	return(	
		<div className='card m-1 row' >
			<div className='col-4 bg-danger text-end align-self-end text-light fw-bold'>
				 Available: {props.available}
			</div>
			<style>{`.card {cursor: pointer;transition: transform 0.1s;}.card:hover {transform: scale(1.03);border: 1px solid red; }`}</style>
       <div className='d-flex justify-content-center'>
       	<img src={props.img} className='card-img-top align-center' style={{ width: '100px', height: '100px' }} alt={props.name}/>
       </div>
			<div className='card-body'>
			 	<h3 className='card-title'>{props.name}</h3>
				<b className='rounded p-1'> ₡ {props.price} </b>
			</div>
		</div>
	);
};

export const CoffeeModalHTML = (props) => {
	const [currAmount, setCurrAmount] = useState(props.currAmountCoffee);
	const addedCoffee = (currAmount - (props.userInfo.bill[props.indexU]?.quantity || 0)) * props.c.price;
	props = {...props, addedCoffee};
	return (
		<div className='container'>
		  <div className='modal-body col'>
		    <div className='d-flex justify-content-center'>
		      <img src={props.c.img} className='card-img-top' style={{ width: '200px', height: '200px', alignItems: 'center' }}/>
		    </div>
		    <div className='row justify-content-center'>
		      <button className='btn m-1 btn-outline-danger col-1' onClick={() => {decrement(currAmount, setCurrAmount, props)}}>
		        -
		      </button>
		      <div className='m-1 col-2'>
		      	<input type='text' className='form-control text-center text-truncate' value={currAmount} disabled/>
		      </div> 
		      <button className='btn m-1 btn-outline-success col-1' onClick={() => {increment(currAmount, setCurrAmount, props)}}>
		        +
		      </button>
		    </div>
		  </div>
			 <div className='modal-footer position-static row'>
				<div className='row text-center justify-content-between' >
		      <button className='btn btn-lg btn-secondary col-2' data-bs-dismiss='modal' onClick={() => props.setModalCoffee({component: <></> })}>
		        Cancel
		      </button>
					<div className='input-group-text col-3'>
						<input type='text' className='form-control text-center text-truncate' value={`₡${props.userInfo.total + addedCoffee}`} disabled/>
		      		</div>
		      <button className='btn btn-lg btn-light col-2' data-bs-dismiss='modal' onClick={() => updateBill(currAmount, props)}>
		        Confirm
		      </button>
		    </div>
		  </div>
	  </div>
	);
};

