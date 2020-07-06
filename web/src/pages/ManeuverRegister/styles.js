import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  width: 100%;
`;

export const Header = styled.header`
  height: 100px;
  background: #38b07f;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  h3 {
    display: flex;
    align-items: center;
    justify-content: baseline;

    color: #3b3b3b;
    margin-top: 25px;
    margin-bottom: 10px;

    svg {
      margin-right: 15px;
      color: #38b07f;
    }
  }

  select {
    border-style: 1px solid #c9c9c9;
    border-radius: 7px;
    align-items: center;

    font-size: 25px;
    color: #3b3b3b;
    width: 200px;

    text-align-last: center;
  }

  input {
    padding: 0 5px;
    font-size: 25px;
    color: #3b3b3b;
    width: 200px;

    border-style: 1px solid #c9c9c9;
    border-radius: 7px;
  }
`;

export const ColumnData = styled.div`
  width: 100%;
  padding: 0 35px;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;

  p {
    margin-top: 40px;
    font-size: 20px;
    text-align: justify;
  }

  > button {
    width: 300px;
    border: 0;
    background: #069c5f;
    color: #fff;
    font-size: 40px;

    border-radius: 7px;

    margin-top: 40px;
    align-self: center;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#069c5f')};
    }
  }
`;

export const InfoLocation = styled.div`
  text-align: center;
  height: 300px;
  background: #e6e6e6;
  border-radius: 7px;

  h1 {
    margin-top: 10px;
  }
`;
