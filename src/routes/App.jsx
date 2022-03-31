import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Info from '../containers/Info';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={<Home/>}
        />
        <Route 
          path="/checkout"
          element={<Checkout/>}
        />
        <Route 
          path="/checkout/information"
          element={<Info/>}
        />
        <Route 
          path="/checkout/payment"
          element={<Payment/>}
        />
        <Route 
          path="/checkout/success"
          element={<Success/>}
        />
        <Route 
          path="*"
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App