import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SingelPage from './pages/SingelPage';
import userFetchData from './hooks/userFetchData';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const context = React.createContext();

function App() {
  const [data, setData, loading] = userFetchData('python');
  return (
    <context.Provider value={{ data, setData, loading }}>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<HomePage />} />
            <Route path='/:id/singlepage' element={<SingelPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
}

export default App;
