import AppStatuses from "./AppStatuses";
import ReducerActions  from './ReducerActions';
import ExtraFields from './ExtraFields';

const Reducer = (state, action) => {
    console.log('Reducer');
    switch(action.type){
        case ReducerActions.UPDATESTATE:
            return {...state, AppStatus : action.payload};
        //case ReducerActions.UPDATEPCAT:
        //    return {...state, requestData: {...state.requestData, pcat : action.payload}};
        case ReducerActions.INITREQUEST:
            //console.log('INITREQUEST: ', {...action.payload});
            let reqd = { mobile : state.requestData.mobile,
                contact_uuid : state.requestData.contact_uuid,
                pcat : action.payload,
                ...ExtraFields[action.payload]
            };

            return {...state, AppStatus: AppStatuses.HOME, requestData: {...reqd}};
        case ReducerActions.UPDATEEXTRAFIELD:
            return {...state, requestData: {...state.requestData, ...action.payload}}
        
        default:
            return state;
    }
}

export default Reducer;