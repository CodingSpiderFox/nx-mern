import React, {
  createContext,
  useEffect,
  useState,
  PropsWithChildren,
  useContext,
} from 'react';
import axios from 'axios';

type ContextType = {
  getLoggedIn: () => void;
  loggedIn: boolean;
};

const AuthContext = createContext({} as ContextType);

export function AuthContextProvider(props: PropsWithChildren<{}>) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  const getLoggedIn = async () => {
    const loggedInRes = await axios.get(
      `${process.env.NX_SITE_URL}/user/loggedIn`
    );
    setLoggedIn(loggedInRes.data);
  };

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
