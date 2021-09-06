import { useState, createContext } from 'react';

const AppContext = createContext({});

const AppProvider = ({ children }) => {
  // get jwt by storage
  const jwtStorage = localStorage.getItem('jwt') || null;
  
  // Context state
  const [appState, setAppState] = useState({ jwt: jwtStorage  });

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
export { AppProvider };
