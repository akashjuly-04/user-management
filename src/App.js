import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Login from "./components/Login"
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Todo from './components/Todo';
import PrivateRoute from './components/PrivateRoute';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/dashboard' element={<PrivateRoute><Dashboard/></PrivateRoute>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/todo' element={<PrivateRoute><Todo/></PrivateRoute>}/>
    </Routes>
    </Router>
  );
}

export default App;
