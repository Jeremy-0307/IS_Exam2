export default function CoffeHTML(props) {
	console.log(props);
	return(	
		<div className='card m-1 row' style={{hover:'transform: scale(1.2);' }}>
			<div className='col-6 rounded bg-danger text-end align-self-end text-light'>
				 <b>Available: {props.available}</b>
			</div>
			<style>{`.card {cursor: pointer;transition: transform 0.1s;}.card:hover {transform: scale(1.01);border: 1px solid red; }`}</style>
       <div className='d-flex justify-content-center'>
       	<img src="/capucchino.png" className="card-img-top" style={{ width: '100px', height: '100px', alignItems: 'center' }}/>
       </div>
			<div className='card-body'>
			 	<h5 className="card-title">{props.name}</h5>
				<b className='card-text bg-dark text-light col-4 bold'> ₡ {props.price} </b>
			</div>
		</div>
	);
};
