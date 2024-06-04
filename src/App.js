
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import MoviesDetalis from './Component/Moviedetails';
import Notfound from './Component/Notfound component';

import { useEffect, useState } from 'react';
import Movies from './Component/Home';
function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='home' element={<Movies />} />
          <Route path='detalis' element={<MoviesDetalis />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </div>
    </>
  );
}
export default App;