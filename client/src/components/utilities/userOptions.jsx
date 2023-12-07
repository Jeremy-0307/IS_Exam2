import {useRef} from 'react'

export const increment = (currAmout, setCurrAmout, props) => {
	const {menu, indexM} = props;
	setCurrAmout((currAmout+1 > menu[indexM].available) ? menu[indexM].available : currAmout+1);
};

export const decrement = (currAmout, setCurrAmout, props) => {
	const {menu, indexM} = props;
	setCurrAmout((currAmout-1 < 0) ? 0 : currAmout-1);
};


export const updateMenu = (props) => {
	const {userInfo, setUserInfo, currAmout, c, setMenu, indexU, indexM, menu} = props;
	console.log('->',props);
	let restart = false;
	if (indexU === -1 && currAmout !== 0) {
		userInfo.bill.push({name:c.name, quantity:currAmout});
		console.log(userInfo.bill);
		//menu[indexM].available -= userInfo.bill[indexU].quantity;
	}
	else if (indexU === -1) {
		// if (currAmout === 0){
		// 	menu[indexM].available += userInfo.bill[indexU].quantity;
		// 	userInfo.bill.splice(indexU, 1);
			
		// }
		// else{ 
		// 	userInfo.bill[indexU].quantity = currAmout;
		// 	menu[indexM].available -= userInfo.bill[indexU].quantity;
		// }
	}
};