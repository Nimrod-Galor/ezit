// Home
import './style.css';

import { useParams, useNavigate } from "react-router-dom";
import { Suspense, lazy } from 'react';

import ReducerActions from '../../Helpers/ReducerActions';
import AppStatuses from '../../Helpers/AppStatuses';
import { useEffect } from 'react';



import Tabs from '../Tabs';




const Home = ({state, dispatch}) => {
    let params = useParams();
    let navigate = useNavigate();

    console.log('pcat: ', params.pcat);

    const Pcat = lazy(() => import(`../../Pcat/Pcat${params.pcat}`));


     useEffect(() => {
        console.log('useEffect');
        dispatch({type : ReducerActions.UPDATEPCAT, payload : params.pcat});
        if(params.pcat !== undefined){
            
            dispatch({type : ReducerActions.UPDATESTATE, payload : AppStatuses.HOME});
        }
     }, [params.pcat]);
    
    
    return(<div className='container my-3'>
        <Tabs active='home' />
    
        <div className='wrap pt-3'>
            <div className='container-fluid'>
                <form>
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="firstNAme" placeholder="שם פרטי" />
                                <label htmlFor="firstNAme">שם פרטי</label>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="lastName" placeholder="שם משפחה" />
                                <label htmlFor="lastName">שם משפחה</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="mobile" placeholder="mobile" />
                                <label htmlFor="mobile">נייד</label>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="voip" placeholder="voip" />
                                <label htmlFor="voip">voip</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select" id="floatingSelect" value={state.requestData.pcat} onChange={(e) => navigate(`../${e.target.value === 'undefined' ? 'home' : e.target.value}`)} aria-label="Floating label select example">
                            <option value="undefined" >בחר</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                        <label htmlFor="floatingSelect">מהות הפניה</label>
                    </div>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Pcat state={state} dispatch={dispatch} />
                    </Suspense>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Home