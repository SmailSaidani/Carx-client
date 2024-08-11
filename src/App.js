import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter , Routes, Route } from 'react-router-dom';
import Home from './screens/Home';
import Shop from './screens/Shop';
import CarD from './screens/CarD';
import Login from './screens/Login';
import Registration from './screens/Registration';
import Profile from './screens/Profile';
import Dashboard from './screens/Dashboard';
import { useEffect } from 'react';

import {Provider } from 'react-redux'

import store from './store';
import Alert from './screens/Alert';
import setAuthToken from "./utils/setAuthToken";
import { loadUser } from './actions/auth';





if(localStorage.token){
  setAuthToken(localStorage.token)

}


function App() {
  useEffect(()=>{
    store.dispatch(loadUser())

  },[])


  return (
    <Provider store={store}>

   <BrowserRouter>
   <Alert element={<Alert />} />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/card/:ID" element={<CarD />} />
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/dashboard" element={<Dashboard />} />

    </Routes>

   </BrowserRouter>
   </Provider>

  );
}







export default App;
