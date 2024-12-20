import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

// Custom hook to use the context
export const useUserContext = () => {
  return useContext(UserContext);
};

// Context provider
export const UserProvider = ({ children }) => {
  const [token,setToken] = useState('hello')

  const value = {
    token,setToken
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
