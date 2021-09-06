import { useContext } from 'react';
import AppContext from '../context/app';

const useAuth = () => {
  const [appState, setAppState] = useContext(AppContext);

  const setJwt = (jwt) => {
    localStorage.setItem('jwt', jwt);
    setAppState({jwt});
  };

  return [
    appState?.jwt,
    setJwt,
  ];
};



export default useAuth;