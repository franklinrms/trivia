import React from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Login</div>} />
    </Routes>
  );
}

export default App;
