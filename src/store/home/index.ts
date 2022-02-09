// import { Dispatch } from 'redux';
type State = Readonly<{ homeList: []}>;
type Action = { type: string; payload: any };

const initState: State = { homeList: [] };

const home = (initState: any, action: Action) => {
  switch (action.type) {
    case 'HOME_LIST':
    return { ...initState, homeList: action.payload };
    default:
    return initState;
  }
}
export default home;