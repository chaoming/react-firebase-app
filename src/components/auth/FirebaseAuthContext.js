import React, { useEffect, useState } from "react";
import FirebaseAuth from "./FirebaseAuth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState({
    'user': null,
    'checked': false
  });

  useEffect(() => {
    FirebaseAuth.auth().onAuthStateChanged(function(user){
      setAuthUser({
        'user': user,
        'checked': true
      });
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        authUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};