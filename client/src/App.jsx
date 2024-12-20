import React from 'react';
import { useUserContext } from './context/UserContext';

import Login from './Pages/Login';
import Home from './Pages/Home';

function App() {
  const { token } = useUserContext();
  
  return (
    token ? <Home /> : <Login />
  );
}

export default App;
