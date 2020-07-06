import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, TextContent, Form, FormContent } from './styles';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/blue-logo.svg';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { signIn } = useAuth();

  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Preencha os dois campos.');
      return;
    }

    try {
      await signIn({ email, password });

      history.push('dashboard');
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <Container>
      <TextContent>
        <h1>
          <p>
            Bem-vindo à <img src={logoImg} alt="logo" />
          </p>
          <p>A escolha da manobra mais inteligente.</p>
        </h1>
        <br />
        <p>
          Insira os dados fornecidos pela empresa para fazer o login. Caso não
          tenha, entre em contato com o setor responsável da sua empresa.
        </p>
      </TextContent>

      <Form onSubmit={handleSubmit}>
        <FormContent>
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
          {errorMessage && <span>{errorMessage}</span>}
        </FormContent>
        <button type="submit">LOGIN</button>
        <br />
      </Form>
    </Container>
  );
};

export default SignIn;
