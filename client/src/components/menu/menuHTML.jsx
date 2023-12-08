import CoffeHTML from '../coffe/coffeHTML'
import {CoffeModal} from '../coffe/coffeFunctions'
import Modal from '../utilities/modal'
import React, {useState} from 'react'

export default function MenuHTML(props) {
	return(	
		<div className='container-lg p-4 bg-white rounded shadow'>
			<div className='input-group-text col-2'>
					<b>Total:&nbsp;&nbsp;</b><input type='text' className='form-control text-center text-truncate' value={`₡ ${props.userInfo.total}`} disabled/>
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

