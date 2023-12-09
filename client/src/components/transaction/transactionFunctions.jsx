import axios from 'axios';
import {serverURL} from '../utilities/constants'
import {ChangeModal} from './transactionHTML'

export const checkAmount = (wallet, userInfo) => {
  const total = wallet.reduce((curr, i) => {
    return curr + i.quantity * i.coin;
  }, 0);
  return (total >= userInfo.total)?true:false; 
};

export const minusCoin = (wallet, setUserInfo, index) => {
  let updatedwallet = [...wallet];
  updatedwallet[index].quantity += (updatedwallet[index].quantity === 0)?0:-1;
  setUserInfo((prev) => ({ ...prev, wallet: updatedwallet }));
};

export const plusCoin = (wallet, setUserInfo, index) => {
  let updatedwallet = [...wallet];
  updatedwallet[index].quantity += (updatedwallet[index].quantity === 999)?999:1;
  setUserInfo((prev) => ({ ...prev, wallet: updatedwallet }));
};

export const currentMoney = (wallet) => {
  const total = wallet.reduce((curr, currentValue) => {
    return curr + currentValue.quantity * currentValue.coin;
  }, 0);
  return total;
};

export async function pay(props) {
  const { userInfo, setModalCoffe, refModal } = props;
  try {
    const totalPayment = currentMoney(userInfo.wallet) - userInfo.total;
    let change = -1;
    const serverResponse = await axios.put(`${serverURL}wallet`, {
      change: totalPayment,
      bill: userInfo.bill
    });
    if (serverResponse.data !== false) {
      change = serverResponse.data;
      props = {...props, change};
      setModalCoffe({
        title: 'Change',
        titleStyle: 'bg-danger fw-bold fs-3 text-white bold justify-content-center',
        component:<ChangeModal {...props}/>,
        size: "modal-lg"
      });
      refModal.current.click();
    }
    else{
      props = {...props, change};
      setModalCoffe({
        title: 'Error',
        titleStyle: 'bg-danger fw-bold fs-3 text-white bold justify-content-center',
        component:<ChangeModal {...props}/>,
        size: "modal-lg"
      });
    }
    console.log(serverResponse.data);
  } catch (error) {
    console.error('Error:', error);
  }
}