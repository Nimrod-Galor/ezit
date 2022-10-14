import { useEffect } from "react";

import ReducerActions from '../Helpers/ReducerActions';

const Pcat3 = ({state, dispatch}) => {
        useEffect(() => {
            dispatch({type : ReducerActions.INITREQUEST, payload : {mobile : state.requestData.mobile,
                contact_uuid : state.requestData.contact_uuid,
                pcat : state.requestData.pcat,
                office : 't3 office',
                t3 : 't3 value'}});
        }, []);
    
        return(
            <>
            <div className="row g-2">
                <div className="col-md">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="office" placeholder="office" />
                        <label htmlFor="office">מיקום חדר</label>
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="t3" placeholder="t3" />
                        <label htmlFor="t3">t3</label>
                    </div>
                </div>
            </div>
            <div className="row g-1">
                <div className="col-md">
                    <button type="button" className="btn btn-success mb-3 float-start">שלח</button>
                </div>
            </div>
            </>
        );
    
}
export default Pcat3