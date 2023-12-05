import CoffeHTML from '../coffe/coffeHTML'

export default function MenuHTML(props) {

const coffes =
[
	{
		name:'Americano',
		price:'850',
		available:'10',
		img:'/capucchino.png'
	},
	{
		name:'Capuchinos',
		price:'950',
		available:'8',
		img:'/capucchino.png'
	},
	{
		name:'Lates',
		price:'1150',
		available:'10',
		img:'/capucchino.png'
	},
	{
		name:'Mocachinos',
		price:'1300',
		available:'15',
		img:'/capucchino.png'
	}
]

	return(
		<div className='container-lg rounded'>
			<div className='row'>
				{coffes.map((c, index) => (
					<div className='col-4 p-1'>
					<CoffeHTML {...c} key={index}/>
					</div>
				))}
			</div>
		</div>
	);
};


// eaeffbel mas oscuro