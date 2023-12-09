export const CurrentBill = (props) => {
  return(
    <>
    <h1>Bill</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {props.userInfo.bill.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td> {props.menu.find(m => m.name === item.name)?.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='btn row btn-outline-light bt-lg fw-bold text-center' onClick={() => props.switchCanvass((prev) => !prev)}>Continue</button>
    </>
  );
};