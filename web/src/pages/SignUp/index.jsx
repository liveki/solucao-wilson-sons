import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { auth, firestore } from '../../services/api';

import * as Yup from 'yup';

import './styles.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório.')
          .email('Digite um e-mail válido.'),
        password: Yup.string().min(6, 'Senha com no mínimo 6 dígitos.'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
          .required('Senha com no mínimo 6 dígitos.'),
      });

      await schema.validate(
        { name, email, password, confirmPassword },
        {
          abortEarly: true,
        },
      );

      await auth.createUserWithEmailAndPassword(email, password);

      await firestore.collection('users').add({ name, email });

      history.push('/');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Nome"
      />

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

      <input
        type="password"
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        placeholder="Confirmar senha"
      />

      <button type="submit">Cadastrar</button>

      <Link to="/">Voltar</Link>
      <br />

      {errorMessage && <span>{errorMessage}</span>}
    </form>
  );
};

export default SignUp;
