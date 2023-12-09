import CoffeeHTML from '../coffee/coffeeHTML'
import {CoffeeModal} from '../coffee/coffeeFunctions'
import Modal from '../utilities/modal'
import React, {useState} from 'react'
import Canvass from '../transaction/transactionHTML'

export default function MenuHTML(props) {
	const {userInfo, setUserInfo} = props;
	const comadreja = userInfo.wallet.map(item => ({...item, quantity: 0}));
	return(	
		<div className='container-lg p-4 rounded shadow' style={{ backgroundColor: '#1a1d23' }}>
			<Modal {...props}/>
			<div ref={props.refModal} data-bs-toggle="modal" data-bs-target='#modalCoffee'/>
			<div className='row m-3'>
				<div className='row'>
					<div className='input-group-text col-2'>
						<b>Total:&nbsp;&nbsp;</b><input type='text' className='form-control text-center text-truncate' value={`₡ ${userInfo.total}`} disabled/>
		      </div>
		      <button className='btn btn-light col-2' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasExample' aria-controls='offcanvasExample'
		        onClick={()=>{setUserInfo({...userInfo, wallet:comadreja})}}>
		        <b>>></b>
		      </button>
		      <Canvass {...props}/>
		    </div>
					{props.menu.map((c, index) => (
					<div  key={index} className='col-4 p-1' onClick={() => CoffeeModal(c, props)}>
						<CoffeeHTML {...c} />
					</div>
				))}
			</div>
		</div>
	);
};

