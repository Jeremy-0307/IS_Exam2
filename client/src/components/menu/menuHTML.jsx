import CoffeHTML from '../coffe/coffeHTML'
import {CoffeModal} from '../coffe/coffeFunctions'
import Modal from '../utilities/modal'

export default function MenuHTML(props) {
	const coffes =
	[
		{
			name:'Americano',
			price: 850,
			available:10,
			img:'/capucchino.png'
		},
		{
			name:'Capuchinos',
			price: 950,
			available:8,
			img:'/capucchino.png'
		},
		{
			name:'Lates',
			price: 1150,
			available:10,
			img:'/capucchino.png'
		},
		{
			name:'Mocachinos',
			price: 1300,
			available:15,
			img:'/capucchino.png'
		}
	]

	return(
		<div className='container-lg'>
			<Modal {...props}/>
			<div ref={props.refModal} data-bs-toggle="modal" data-bs-target='#modalCoffe'/>
			<div className='row'>
				{coffes.map((c, index) => (
					<div key={index} className='col-4 p-1' onClick={() => CoffeModal(c, props.setModalCoffe, props.refModal)}>
						<CoffeHTML {...c} />
					</div>
				))}
			</div>
		</div>
	);
};


// eaeffbel mas oscuro