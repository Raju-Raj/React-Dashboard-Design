import { Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';
import React from 'react';
import Layout from './components/Layout/Layout';
import UsersPage from './pages/UsersPage/UsersPage';
import VehicleManagePage from './pages/VehicleManagePage/VehicleManagePage';
import QualificationPage from './pages/QualificationPage/QualificationPage';
import AdminPage from './pages/AdminPage/AdminPage';
import UsersForm from './components/UsersForm/UsersForm';
import AdminForm from './components/AdminForm/AdminForm';
import ScrollToTop from './components/ScrollToTopComp/ScrollToTopComp';

function App() {
  return (
    <div className='app'>
    <ScrollToTop/>
    <div className='pages'>
    <Routes> 
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/home' element={<Layout><HomePage/></Layout>}/>
      <Route path='/driversmanagement' element={<Layout><UsersPage/></Layout>}/>
      <Route path='/driversmanagement/adddriver' element={<Layout><UsersForm/></Layout>}/>
      <Route path='/driversmanagement/updatedriver/:id' element={<Layout><UsersForm/></Layout>}/>
      <Route path='/vehiclemanagement' element={<Layout><VehicleManagePage/></Layout>}/>
      <Route path='/qualificationmanagement' element={<Layout><QualificationPage/></Layout>}/>
      <Route path='/admin' element={<Layout><AdminPage/></Layout>}/>
      <Route path='/admin/addadmin' element={<Layout><AdminForm/></Layout>}/>
      <Route path='/admin/updateadmin/:id' element={<Layout><AdminForm/></Layout>}/>
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
