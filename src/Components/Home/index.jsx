// Home
import './style.css';

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, Suspense, lazy, Fragment } from 'react';

import ReducerActions from '../../Helpers/ReducerActions';
import AppStatuses from '../../Helpers/AppStatuses';
import PcatOptions from '../../Helpers/PcatOptions';


import Tabs from '../Tabs';


const Home = ({state, dispatch}) => {
    let params = useParams();
    let navigate = useNavigate();

    console.log('pcat: ', params.pcat);

    

    const Pcat = lazy(() => import(`../../Pcat/Pcat${params.pcat}`));

    const getSelectOptions = () => {
        let group = '';
        return PcatOptions.map((item, index) => {
            if(item.group !== group){
                group = item.group;
                return(<Fragment  key={`frag${item.group}`}><optgroup key={`opt${item.group}`} label={item.group} /><option key={item.pcat} value={item.pcat}>{item.name}</option></Fragment>);
            }
            return(<option key={item.pcat} value={item.pcat}>{item.name}</option>);
        });
    }

     useEffect(() => {
        console.log('useEffect');

        if(params.pcat !== undefined && !PcatOptions.some(item => item.pcat === params.pcat)){
            console.log('not found 404');
            navigate('../404');
        }else{
            dispatch({type : ReducerActions.INITREQUEST, payload : params.pcat});
        }
     }, [params.pcat]);
    
    
    return(<div className='container my-3'>
        <Tabs active='home' />
    
        <div className='wrap pt-3'>
            <div className='container-fluid'>
                <form className='needs-validation' noValidate>
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="firstNAme" key="firstNAme" placeholder="שם פרטי"  required />
                                <label htmlFor="firstNAme">שם פרטי</label>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="lastName" key="lastName" placeholder="שם משפחה" required />
                                <label htmlFor="lastName">שם משפחה</label>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2">
                        <div className="col-md">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="mobile" key="mobile" placeholder="mobile" required />
                                <label htmlFor="mobile">נייד</label>
                            </div>
                        </div>
                        <div className="col-md">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="voip" key="voip" placeholder="voip" required />
                                <label htmlFor="voip">voip</label>
                            </div>
                        </div>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select" id="floatingSelect" key="floatingSelect" value={state.requestData.pcat} onChange={(e) => navigate(`../${e.target.value === 'undefined' ? 'home' : e.target.value}`)} aria-label="Floating label select example" required>
                            <option key='undefined' value="undefined" disabled>בחר</option>

                            {getSelectOptions()}
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

// Example starter JavaScript for disabling form submissions if there are invalid fields
/*(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  console.log('Fome IN');
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()
*/
export default Home