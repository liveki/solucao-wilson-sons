import React, { useState, useCallback } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { auth } from '../../services/api';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Preencha os dois campos.');
      return;
    }

    try {
      await auth.signInWithEmailAndPassword(email, password);

      history.push('dashboard');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="E-mail"
      />

      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="Senha"
      />
      <button type="submit">Entrar</button>
      <Link to="signup">Cadastre-se</Link>
      <br />
      {errorMessage && <span>{errorMessage}</span>}
    </form>
  );
};

export default SignIn;
