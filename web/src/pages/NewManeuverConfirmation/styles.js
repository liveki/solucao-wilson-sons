import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  width: 100%;
  height: 100px;
  background: #38b07f;
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ColumnData = styled.div`
  font-size: 25px;
  padding: 0 50px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    flex-direction: column;
    background: #38b07f;
    color: #fff;
    border-radius: 7px;
    padding: 15px 30px;

    h2 {
      margin-bottom: 30px;
    }
  }

  height: 600px;

  h3 {
    margin-top: 15%;

    background: #e94040;
    color: #fff;
    border-radius: 7px;
    padding: 15px 30px;
  }

  h1 {
    margin-bottom: 35px;
  }
`;

export const NavBottom = styled.footer`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;

  button {
    border: 0;
    font-size: 35px;
    color: #fff;
    padding: 5px 10px;
    border-radius: 7px;
  }
`;

export const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div + div {
    border-left: 1px solid #000;
  }
`;
