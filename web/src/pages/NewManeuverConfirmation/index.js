import React from 'react';
import SideBar from '../../components/SideBar';
import {
  Container,
  Content,
  Header,
  ColumnData,
  NavBottom,
  ColumnsContainer,
} from './styles';

const NewManeuverConfirmation = () => (
  <Container>
    <SideBar />

    <Content>
      <Header>
        <h1>CADASTRAR MANOBRA</h1>
      </Header>

      <ColumnsContainer>
        <ColumnData>
          <h1>Resultado da Manobra #9999</h1>
          <p>
            Navio: <strong>MONTE SARMIENTO</strong>
          </p>
          <p>
            ID do navio: <strong>010203</strong>
          </p>
          <p>
            Tipo: <strong>Cargueiro</strong>
          </p>
          <p>
            Peso da carga: <strong>400 toneladas</strong>
          </p>
          <p>
            Chegada prevista: <strong>11/06/2020</strong>
          </p>
          <p>
            Doca: <strong>05</strong>
          </p>
          <p>
            Porto: <strong>Santos</strong>
          </p>
        </ColumnData>

        <ColumnData>
          <div>
            <h2>Rebocadores recomendados</h2>
            <strong>Rebocador #0102 - Azimuti - 80(força)</strong>
            <strong>Rebocador #0104 - Azimuti - 70(força)</strong>
            <strong>Rebocador #0105 - Azimuti - 60(força)</strong>
            <br />
            <strong>Gasto de combustível: 750L</strong>
          </div>

          <h3>
            <p>POR FAVOR, ANTES DE CADASTRAR A MANOBRA,</p>
            <p>VERIFIQUE OS DADOS ATENTAMENTE.</p>
          </h3>
        </ColumnData>
      </ColumnsContainer>

      <NavBottom>
        <button style={{ background: '#e94040' }}>Apagar Manobras</button>
        <button style={{ background: '#A9A9A9' }}>Alterar informações</button>
        <button style={{ background: '#38b07f' }}> Cadastrar manobra</button>
      </NavBottom>
    </Content>
  </Container>
);

export default NewManeuverConfirmation;
