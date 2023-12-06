import {useRef} from 'react'
import {CoffeModalHTML} from './coffeHTML'

export const CoffeModal = (coffe, setModal, refModal) => {
	setModal(
		{
			title:'TITULO',
			component:<CoffeModalHTML />,
			size: "modal-lg"
		}
	);
	refModal.current.click();
};


export const Coffe = () => {

	return (<div></div>);

};