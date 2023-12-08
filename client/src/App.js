import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MenuFunctions from './components/menu/menuFunctions'

function App() {
  const [userInfo, setUserInfo] = useState({
    bill:[], //cafe, cantidad
    total:0, // total de la compra
    money:0,
  });

  const [machineInfo, setMachineInfo] = useState({
    funds:0
  });

  const props = {userInfo, setUserInfo, machineInfo, setMachineInfo};

  return (
    <div className='p-4' data-bs-theme="dark">
      <MenuFunctions {...props}/>
    </div>
  );
}
export default App;
