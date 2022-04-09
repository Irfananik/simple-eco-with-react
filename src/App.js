import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import Order from './components/Order/Order';
import Shop from './components/Shop/Shop';
import SingUp from './components/SingUp/SingUp';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/inventory' element={<Inventory/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/singup' element={<SingUp />}></Route>
        <Route path={'*'} element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
