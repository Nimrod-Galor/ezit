import './App.css';
import { useReducer } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

import AppStatuses from "./Helpers/AppStatuses";
import Reducer from './Helpers/Reducer';

import SplashScreen from './Components/SplashScreen';
import Home from './Components/Home';
import Status from './Components/Status';

const initialState = {
  AppStatus : AppStatuses.APPINIT,
  userData : {
    firstName : '',
    lastName : '',
    contact_uuid : '',
    mobile : '',
    voip : '',
  },
  requestData : {
    mobile : '0507426944',
    contact_uuid : '123ab2321c321asa321',
    pcat : 'undefined'
  }
}

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    
    <BrowserRouter>
      <Routes>
        
          <Route exact path="/" element={<SplashScreen dispatch={dispatch} />} />
        
          <Route path="/home" element={<Home state={state} dispatch={dispatch} />} />
          
          <Route path="/status" element={<Status state={state} dispatch={dispatch} />} />

          <Route path=":pcat" element={<Home state={state} dispatch={dispatch} />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
