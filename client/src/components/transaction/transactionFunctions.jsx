import axios from 'axios';
import {serverURL} from '../utilities/constants'

export const checkAmount = (Purse, userInfo) => {
  const total = Purse.reduce((accumulator, i) => {
    return accumulator + i.quantity * i.coin;
  }, 0);
  return (total >= userInfo.total)?true:false; 
};

export const minusCoin = (Purse, setUserInfo, index) => {
  let updatedPurse = [...Purse];
  updatedPurse[index].quantity += (updatedPurse[index].quantity === 0)?0:-1;
  setUserInfo((prev) => ({ ...prev, purse: updatedPurse }));
};

export const plusCoin = (Purse, setUserInfo, index) => {
  let updatedPurse = [...Purse];
  updatedPurse[index].quantity += (updatedPurse[index].quantity === 999)?999:1;
  setUserInfo((prev) => ({ ...prev, purse: updatedPurse }));
};

export const currentMoney = (Purse) => {
  const total = Purse.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.quantity * currentValue.coin;
  }, 0);
  return total;
};

export async function pay(props) {
  try {
    const serverResponse = await axios.put(`${serverURL}coffe`, { purse: props.userInfo.purse, bill: props.userInfo.bill });
  } catch (error) {
    console.log('error');
  }
};