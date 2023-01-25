import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Form from './components/Form';
import SellerPage from './components/SellerPage';
import BuyerPage from './components/BuyerPage';
import { createContext, useState } from 'react';
import EmptyPage from './components/EmptyPage';

export const ServiceContext = createContext(null);

function App() {
  const [service, setService] = useState('buyer');

  return (
    <BrowserRouter>
      <ServiceContext.Provider value={{ service, setService }}>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/seller" element={<SellerPage />} />
          <Route path="/buyer" element={<BuyerPage />} />
          <Route path="*" element={<EmptyPage />} />
        </Routes>
      </ServiceContext.Provider>
    </BrowserRouter>
  );
}

export default App;
