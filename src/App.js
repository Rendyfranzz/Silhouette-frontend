import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './layout/About';
import Home from './layout/Home';
import PageNotFound from './layout/PageNotFound';
import PriceList from './layout/PriceList';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/Home' element={<Home/>}/> 
        <Route path='/About' element={<About/>}/>
        <Route path='/PriceList' element={<PriceList/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
