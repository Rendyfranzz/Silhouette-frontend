import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import About from './pages/About';
import BookOnline from './pages/BookOnline';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import PriceList from './pages/PriceList';
import Register from './pages/Register';
import BookNext from './pages/BookNext';
import Admin from './pages/AdminDashboard';
import ListUser from './pages/ListUser';
import ListOrder from './pages/ListOrder';
import Payment from './pages/Payment';
function App() {

 
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
        <Route path='/payment' element={<Payment/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </Router>
  );
}

export default App;
