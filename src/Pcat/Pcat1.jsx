import { useEffect } from "react";

import ReducerActions from '../Helpers/ReducerActions';




const Pcat1 = ({state, dispatch}) => {

    const extraFieldChange = (e) => {
        dispatch({type : ReducerActions.UPDATEEXTRAFIELD, payload : {[e.target.id] : e.target.value}})
    }

    return(
        <>
        <div className="row g-2">
            <div className="col-md">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="office" key="office" value={state.requestData.office || ''} onChange={(e) => extraFieldChange(e)} placeholder="office" required />
                    <label htmlFor="office">מיקום חדר</label>
                </div>
                <div className="invalid-feedback">
                    הזן את מיקום החדר
                </div>
            </div>
            <div className="col-md">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="t1" key="t1" value={state.requestData.t1 || ''} onChange={(e) =>  extraFieldChange(e)} placeholder="t1" required />
                    <label htmlFor="t1">t1</label>
                    <div className="invalid-feedback">
                        הזן את השדה t1
                    </div>
                </div>
            </div>
        </div>
        <div className="row g-1">
            <div className="col-md">
                <button type="submit" className="btn btn-success mb-3 float-start">שלח</button>
            </div>
        </div>
        </>
    );
}
export default Pcat1