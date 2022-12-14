import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css';
import About from './pages/About';
import BookOnline from './pages/BookOnline';
import Home from './pages/Home';
import Login from './pages/Login';
import PageNotFound from './pages/PageNotFound';
import PriceList from './pages/PriceList';
import Register from './pages/Register';
import BookNext from './pages/BookNext';
import ListUser from './pages/ListUser';
import ListOrder from './pages/ListOrder';
import Payment from './pages/Payment';
import { AnimatePresence } from 'framer-motion';
import UserPayment from './pages/UserPayment';
import Payback from './pages/Payback';
import ListTime from './pages/ListTime';
import EditUser from './pages/EditUser';
import EditOrder from './pages/EditOrder';
function App() {
  let location = useLocation()

  return (
    <AnimatePresence node='wait'>
      <Routes key={location.pathname} location={location}>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/priceList' element={<PriceList />} />
        <Route path='/bookOnline' element={<BookOnline />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/booknext' element={<BookNext />} />
        <Route path='/listuser' element={<ListUser />} />
        <Route path='/listorder' element={<ListOrder />} />
        <Route path='/listtime' element={<ListTime />} />
        <Route path='/edituser/:id' element={<EditUser />} />
        <Route path='/editorder/:id' element={<EditOrder />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/payback/:qrid' element={<Payback />} />
        <Route path='/userdetail/:uuid' element={<UserPayment />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
