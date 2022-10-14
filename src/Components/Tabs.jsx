import { Link } from 'react-router-dom';

const Tabs = ({active}) => {

    return(
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className={"nav-link " + (active === 'home' ? 'active' : null)} aria-current="page" to="/home">פתח פניה</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (active === 'status' ? 'active' : '')} to="/status">סטאטוס פניה</Link>
            </li>
        </ul>
    );
}
export default Tabs