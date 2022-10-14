// import AppStatuses from "./AppStatuses";
import ReducerActions  from './ReducerActions';

const Reducer = (state, action) => {
    console.log('Reducer');
    switch(action.type){
        case ReducerActions.UPDATESTATE:
            return {...state, AppStatus : action.payload};
        case ReducerActions.UPDATEPCAT:
            return {...state, requestData: {...state.requestData, pcat : action.payload}};
        case ReducerActions.INITREQUEST:
            //console.log('INITREQUEST: ', {...action.payload});
            return {...state, requestData: {...action.payload}};
        default:
            return state;
    }
}

export default Reducer;