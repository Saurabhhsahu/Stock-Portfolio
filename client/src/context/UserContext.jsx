import { createContext, useContext, useState } from 'react';
import { dummyUser } from '../assets/user';
import { dummyStocks } from '../assets/stocks';
import { useTotalStocksValue } from '../hooks/useTotalStocksValue';

const UserContext = createContext();

// Custom hook to use the context
export const useUserContext = () => {
  return useContext(UserContext);
};

// Context provider
export const UserProvider = ({ children }) => {
  const [token,setToken] = useState('hello')
  const [user, setUser] = useState(dummyUser);
  const [stocks,setStocks] = useState(dummyStocks)
  const totalValue = useTotalStocksValue(stocks)

  console.log(totalValue);
  

  const value = {
    token,setToken,
    user,setUser,
    stocks,setStocks,
    // totalValue
  }

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};
