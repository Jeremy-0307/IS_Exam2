import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import MenuFunctions from './components/menu/menuFunctions'

function App() {
  const [userInfo, setUserInfo] = useState({
    bill:[],
    total:0,
    money:0,
    wallet:
    [
      {coin:25, quantity:0},
      {coin:50, quantity:0},
      {coin:100, quantity:0},
      {coin:500, quantity:0}
    ]
  });

  const props = {userInfo, setUserInfo};

  return (
    <div className='p-4' data-bs-theme="dark">
      <MenuFunctions {...props}/>
    </div>
  );
}
export default App;
