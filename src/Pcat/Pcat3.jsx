import { useEffect } from "react";

import ReducerActions from '../Helpers/ReducerActions';

const Pcat3 = ({state, dispatch}) => {
    const extraFieldChange = (e) => {
        dispatch({type : ReducerActions.UPDATEEXTRAFIELD, payload : {[e.target.id] : e.target.value}})
    }
    
    return(
        <>
        <div className="row g-2">
            <div className="col-md">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="office" value={state.requestData.office || ''} onChange={(e) => extraFieldChange(e)} placeholder="office" />
                    <label htmlFor="office">מיקום חדר</label>
                </div>
            </div>
            <div className="col-md">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="t3" value={state.requestData.t3 || ''} onChange={(e) => extraFieldChange(e)} placeholder="t3" />
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