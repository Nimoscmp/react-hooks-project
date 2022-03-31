import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from '../components/Layout';
import Checkout from '../containers/Checkout';
import Home from '../containers/Home';
import Info from '../containers/Info';
import NotFound from '../containers/NotFound';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import '../styles/components/app.scss';

function App() {
  return (
    <BrowserRouter>
      <Layout>
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
      </Layout>
    </BrowserRouter>
  )
}

export default App