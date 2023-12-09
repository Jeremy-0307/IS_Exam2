import {useRef} from 'react'

export const increment = (currAmount, setCurrAmount, props) => {
	const {menu, indexM, userInfo, indexU} = props;
	const isInBill = (indexU !== -1) ? false : true; 
	const max = menu[indexM].available + (isInBill ? 0 : userInfo.bill[indexU].quantity);
	setCurrAmount((currAmount+1 > max) ? max : currAmount+1);
};

export const decrement = (currAmount, setCurrAmount, props) => {
	const {menu, indexM} = props;
	setCurrAmount((currAmount-1 < 0) ? 0 : currAmount-1);
};

export const updateBill = (currAmount, props) => {

	const {userInfo, setUserInfo, c, setMenu, indexU, indexM, menu} = props;
	const isInBill = (indexU !== -1) ? true : false; 

	let newBill = userInfo.bill;
	let newMenu = menu;

	if (isInBill) {
		if(currAmount !== 0){
			newMenu[indexM].available -= (currAmount - newBill[indexU].quantity);
			newBill[indexU].quantity = currAmount;
		}
		else{
			newMenu[indexM].available += newBill[indexU].quantity;
			newBill.splice(indexU, 1);
		}
	}
	else if (currAmount !== 0){
		newBill.push({name:c.name, quantity:currAmount});
		newMenu[indexM].available -= currAmount;
	}
	setMenu(newMenu);
	setUserInfo({ ...userInfo, total: userInfo.total + props.addedCoffee,
	  bill: newBill
	});
	props.setModalCoffee({component: <></> });
};
