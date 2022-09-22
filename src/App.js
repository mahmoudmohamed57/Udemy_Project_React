import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CoursePage from './pages/CoursePage';
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
            <Route path='/:id/singlepage' element={<CoursePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </context.Provider>
  );
}

export default App;
