import { useEffect } from 'react';

import ReducerActions from '../../Helpers/ReducerActions';
import AppStatuses from '../../Helpers/AppStatuses';

import Tabs from '../Tabs';

const Status = ({state, dispatch}) => {
    useEffect(() => {
        dispatch({type : ReducerActions.UPDATESTATE, payload : AppStatuses.STATUS});
    }, []);

    return(
        <div className='container my-3'>
        <Tabs active='status' />
    
        <div className='wrap pt-3'>
            <div className='container-fluid'>
                Status
            </div>
        </div>
    </div>
    );
}
export default Status