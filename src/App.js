// import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeComponent from './Components/HomeComponent';
import GetAllUsers from './Pages/GetAllUsers';
import GetOneUser from './Pages/GetOneUser';
import EditUser from './Pages/EditUser';
import Navbar from './Commons/Navbar';
import Footer from './Commons/Footer';
import CreateAUser from './Pages/CreateAUser';
import Error from './Pages/Error';
import New_Year_New_Fit from './Images/New_Year_New_Fit_Logo.png'
import OneUserWorkout from './ComponentWorkout/OneUserWorkout';
import EditWorkout from './Pages/EditWorkout';
import CreateAWorkout from './Pages/CreateAWorkout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link className='logo' to='/'><img src={New_Year_New_Fit} alt='New Year New Fit Logo' width='600px' /></Link>
        <Navbar/>
        <Routes>
          <Route element={<HomeComponent />} path='/' />
          <Route element={<GetAllUsers />} path='/users' />
          <Route element={<GetOneUser />} path='/users/:id' />
          <Route element={<EditUser />} path='/users/:id/edit' />
          <Route element={<CreateAUser />} path='/users/new' />
          <Route element={<OneUserWorkout />} path='/users/workout/:id' />
          <Route element={<EditWorkout />} path='/users/workout/:id/edit' />
          <Route element={<CreateAWorkout/>} path='/users/workout/:id/new' />
          <Route element={<Error/>} path='/*' />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
