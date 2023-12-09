import {useRef, useState, useEffect} from 'react'
import {CoffeeModalHTML, CoffeeModalFooter} from './coffeeHTML'

// set and activates the modal for the selected coffee
export const CoffeeModal = (c, props) => {
	// index of Menu
	const indexM = props.menu.findIndex(item => item.name === c.name);
	// index of User
	const indexU = props.userInfo.bill.findIndex(i => i.name === c.name);
	const currAmountCoffee = (indexU !== -1) ? props.userInfo.bill[indexU].quantity : 0;
	props = { ...props, indexU, indexM, c, currAmountCoffee }
	props.setModalCoffee(
		{
			title: c.name ,
			titleStyle:'bg-danger fw-bold fs-3 text-white bold justify-content-center',
			component:<CoffeeModalHTML {...props}/>,
			size: "modal-lg"
		}
	);
	props.refModal.current.click();
};
