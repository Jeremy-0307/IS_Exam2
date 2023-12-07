import {useRef, useState, useEffect} from 'react'

import {CoffeModalBody, CoffeModalFooter} from './coffeHTML'

export const CoffeModal = (c, props) => {

	const indexM = props.menu.findIndex(item => item.name === c.name);
	const indexU = props.userInfo.bill.findIndex(i => i.name === props.menu[props.indexM]);
	const currAmoutCoffe = (indexU !== -1) ? props.userInfo.bill[indexU].amount : 0;
	props.setCoffemaker(currAmoutCoffe);
	props = { ...props, indexU, indexM, c, currAmoutCoffe }
	props.setModalCoffe(
		{
			title: c.name ,
			titleStyle:'bg-danger fw-bold fs-3 text-white bold justify-content-center',
			component:<CoffeModalBody key={1} {...props}/>,
			size: "modal-lg",
			footer:<CoffeModalFooter key={1} {...props}/>
		}
	);
	props.refModal.current.click();
};
