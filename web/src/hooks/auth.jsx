import React, { createContext, useCallback, useState, useContext } from 'react';
import { auth, firestore } from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@RebocData:token');
    const user = localStorage.getItem('@RebocData:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {};
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await auth.signInWithEmailAndPassword(email, password);

    const token = await response.user.getIdToken();

    const docRef = await firestore
      .collection('users')
      .where('email', '==', email)
      .limit(1)
      .get();

    const user = docRef.docs[0].data();

    localStorage.setItem('@RebocData:token', token);
    localStorage.setItem('@RebocData:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@RebocData:token');
    localStorage.removeItem('@RebocData:user');

    setData({});
  }, []);

  const updateUser = useCallback(
    user => {
      localStorage.setItem('@RebocData:user', JSON.stringify(user));
      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
