import {useRef} from 'react'

export const increment = (currAmout, setCurrAmout, props) => {
	const {menu, indexM, userInfo, indexU} = props;
	const isInBill = (indexU !== -1) ? false : true; 
	const max = menu[indexM].available + (isInBill ? 0 : userInfo.bill[indexU].quantity);
	setCurrAmout((currAmout+1 > max) ? max : currAmout+1);
};

export const decrement = (currAmout, setCurrAmout, props) => {
	const {menu, indexM} = props;
	setCurrAmout((currAmout-1 < 0) ? 0 : currAmout-1);
};

export const updateBill = (currAmout, props) => {

	const {userInfo, setUserInfo, c, setMenu, indexU, indexM, menu} = props;
	const isInBill = (indexU !== -1) ? true : false; 

	let newBill = userInfo.bill;
	let newMenu = menu;

	if (isInBill) {
		if(currAmout !== 0){
			newMenu[indexM].available -= (currAmout - newBill[indexU].quantity);
			newBill[indexU].quantity = currAmout;
		}
		else{
			newMenu[indexM].available += newBill[indexU].quantity;
			newBill.splice(indexU, 1);
		}
	}
	else if (currAmout !== 0){
		newBill.push({name:c.name, quantity:currAmout});
		newMenu[indexM].available -= currAmout;
	}
	setMenu(newMenu);
	setUserInfo({ ...userInfo, total: userInfo.total + props.addedCoffe,
	  bill: newBill
	});
	props.setModalCoffe({component: <></> });
};
