import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Feedback from './pages/Feedback';
import Game from './pages/Game';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
      <Route path="/feedback" element={<Feedback />} />
    </Routes>
  );
}

export default App;
