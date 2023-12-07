import CoffeHTML from '../coffe/coffeHTML'
import {CoffeModal} from '../coffe/coffeFunctions'
import Modal from '../utilities/modal'
import React, {useState} from 'react'

export default function MenuHTML(props) {
	const [coffemaker, setCoffemaker] = useState(0);
	props = {...props, coffemaker, setCoffemaker};
	return(	
		<div className='container-lg'>
		<button className='btn btn-primary'>
			comadreja
		</button>
			<Modal {...props}/>
			<div ref={props.refModal} data-bs-toggle="modal" data-bs-target='#modalCoffe'/>
			<div className='row'>
				{props.menu.map((c, index) => (
					<div  key={index} className='col-4 p-1' onClick={() => CoffeModal(c, props)}>
						<CoffeHTML {...c} />
					</div>
				))}
			</div>
		</div>
	);
};


// eaeffbel mas oscuro