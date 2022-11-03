import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './layout/About';
import BookOnline from './layout/BookOnline';
import Home from './layout/Home';
import Login from './layout/Login';
import PageNotFound from './layout/PageNotFound';
import PriceList from './layout/PriceList';
import Register from './layout/Register';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/> 
        <Route path='/About' element={<About/>}/>
        <Route path='/PriceList' element={<PriceList/>}/>
        <Route path='/BookOnline' element={<BookOnline/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/regsiter' element={<Register/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
