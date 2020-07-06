import styled from 'styled-components';
import { shade } from 'polished';

import backgroundImg from '../../assets/background.jpg';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${backgroundImg}) no-repeat center;
  background-size: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const TextContent = styled.div`
  width: 600px;

  display: block;
  align-self: flex-start;

  margin: 80px 100px 0 0;

  h1 {
    color: #05729b;
    font-size: 45px;

    p {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    p + p {
      font-size: 30px;
    }
  }

  > p {
    color: #78757a;
    text-align: justify;
    font-size: 25px;
  }
`;

export const Form = styled.form`
  display: flex;

  flex-direction: column;
  align-items: center;

  input {
    border: solid 2px #a5a5a5;
    border-radius: 5px;
    font-size: 25px;

    &::placeholder {
      padding-left: 5px;
    }
  }

  input + input {
    margin-top: 20px;
  }

  button {
    border: 0;
    width: 300px;
    border-radius: 5px;
    padding: 10px 0;
    margin-top: 20px;
    background: #0d2998;
    color: #fff;
    font-weight: 500;
    font-size: 25px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#0d2998')};
    }
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 5px;
  padding: 35px 15px;
`;
