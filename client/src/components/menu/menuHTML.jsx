import CoffeHTML from '../coffe/coffeHTML'
import {CoffeModal} from '../coffe/coffeFunctions'
import Modal from '../utilities/modal'
import React, {useState} from 'react'

export default function MenuHTML(props) {
	return(	
		<div className='container-lg p-4 bg-white rounded shadow'>
			total
			<div className='container col-2 input-group mb-3'>
			  <span className='input-group-text'>₡</span>
			  <input type='text' className='form-control text-truncate' value={props.userInfo.tota} disabled/>
			</div>
			<Modal {...props}/>
			<div ref={props.refModal} data-bs-toggle="modal" data-bs-target='#modalCoffe'/>
			<div className='row m-3'>
				{props.menu.map((c, index) => (
					<div  key={index} className='col-4 p-1' onClick={() => CoffeModal(c, props)}>
						<CoffeHTML {...c} />
					</div>
				))}
			</div>
		</div>
	);
};

