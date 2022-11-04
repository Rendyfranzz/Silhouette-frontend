import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import BookOnline from './pages/BookOnline';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import PriceList from './pages/PriceList';
import Register from './pages/Register';

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
