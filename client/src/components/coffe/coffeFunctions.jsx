import {useRef, useState, useEffect} from 'react'

import {CoffeModalBody, CoffeModalFooter} from './coffeHTML'

export const CoffeModal = (c, props) => {

	const indexM = props.menu.findIndex(item => item.name === c.name);
	const indexU = props.userInfo.bill.findIndex(i => i.name === c.name);
	console.log('bill->',props.userInfo.bill[indexU], '\nindexU->',indexU);
	const currAmoutCoffe = (indexU !== -1) ? props.userInfo.bill[indexU].quantity : 0;
	props.setCoffemaker(currAmoutCoffe);
	props = { ...props, indexU, indexM, c, currAmoutCoffe }
	props.setModalCoffe(
		{
			title: c.name ,
			titleStyle:'bg-danger fw-bold fs-3 text-white bold justify-content-center',
			component:<CoffeModalBody {...props}/>,
			size: "modal-lg"
		}
	);
	props.refModal.current.click();
};
