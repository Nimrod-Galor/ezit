import './style.css';

import ReducerActions from '../../Helpers/ReducerActions';
import AppStatuses from '../../Helpers/AppStatuses';

import { Link } from "react-router-dom";

const SplashScreen = ({dispatch}) => {
    
    return(<div className='splashScreen'>
        <div className="bg-light p-5 rounded-lg m-5">
            <h1 className="display-4">Hello, world!</h1>
            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4" />
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <Link className="btn btn-primary btn-lg" to="/home" role="button" onClick={() => dispatch({type:ReducerActions.UPDATESTATE, payload: AppStatuses.HOME})} >Learn more</Link>
        </div>
        <div className='footer'></div>
    </div>
    );
}

export default SplashScreen;