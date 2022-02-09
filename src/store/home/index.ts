// import { Dispatch } from 'redux';


const home = (state: 0, action: { type: any; }) => {
  switch (action.type) {
    case 'HOME_LIST':
    return state + 1;
    default:
    return state;
  }
}
export default home;