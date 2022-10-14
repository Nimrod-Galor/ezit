import { useEffect } from "react";

import ReducerActions from '../Helpers/ReducerActions';
const Pcatundefined = ({state, dispatch}) => {
    useEffect(() => {
        dispatch({type : ReducerActions.INITREQUEST, payload : {mobile : state.requestData.mobile,
            contact_uuid : state.requestData.contact_uuid,
            pcat : 'undefined',
            }});
    }, []);
    return <div></div>
}
export default Pcatundefined