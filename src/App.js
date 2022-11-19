import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import About from './pages/About';
import BookOnline from './pages/BookOnline';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import PriceList from './pages/PriceList';
import Register from './pages/Register';
import { useDispatch } from "react-redux"
import { getMe } from './feature/authSlice';
import { useEffect } from 'react';
import BookNext from './pages/BookNext';
import Admin from './pages/AdminDashboard';
import ListUser from './pages/ListUser';
import ListOrder from './pages/ListOrder';
function App() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getMe()) 
  },[dispatch])
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/> 
        <Route path='/About' element={<About/>}/>
        <Route path='/PriceList' element={<PriceList/>}/>
        <Route path='/BookOnline' element={<BookOnline/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/booknext' element={<BookNext/>}/>
        <Route path='/listuser' element={<ListUser/>}/>
        <Route path='/listorder' element={<ListOrder/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
