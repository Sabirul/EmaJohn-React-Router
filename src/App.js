import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inventory from './components/Inventory/Inventory';
import Review from './components/Review/Review';
import NotFount from './components/NotFound/NotFount';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <Header></Header>
      <Routes>
      <Route path='/' element={<Shop/>} />
        <Route path='/shop' element ={<Shop/>}/>
        <Route path='/inventory' element={<Inventory/>}/>
        <Route path='/review' element={<Review/>}/>
        <Route path='/placeOrder'  element={<PlaceOrder/>}/>
        <Route path='*' element={<NotFount/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
