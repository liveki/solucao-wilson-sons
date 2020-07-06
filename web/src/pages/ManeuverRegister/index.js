import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FiClock } from 'react-icons/fi';
import { IoIosPerson } from 'react-icons/io';
import { FaCalendarAlt } from 'react-icons/fa';

import {
  Container,
  Header,
  Form,
  ColumnData,
  Content,
  InfoLocation,
} from './styles';
import SideBar from '../../components/SideBar';
import { useHistory } from 'react-router-dom';

const ManeuverRegister = () => {
  const history = useHistory();

  return (
    <Container>
      <SideBar />
      <Content>
        <Header>
          <h1>CADASTRAR MANOBRA</h1>
        </Header>

        <Form>
          <ColumnData>
            <h3>PORTO</h3>
            <select>
              <option value="sa">Santos</option>
              <option value="rj">Rio de Janeiro</option>
            </select>

            <h3>DOCA</h3>
            <select placeholder="Doca">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <h3>ID DO NAVIO</h3>
            <input type="text" />

            <h3>TIPO DE NAVIO</h3>
            <select>
              <option value="1">Carga</option>
              <option value="2">Minério</option>
              <option value="3">Alimento</option>
            </select>

            <h3>PESO DA CARGA</h3>
            <input type="text" />

            <h3>FORÇA NECESSÁRIA</h3>
            <input type="text" />

            <h3>QUANTIDADE DE REBOCADORES</h3>
            <input type="number" />
          </ColumnData>

          <ColumnData>
            <h3>
              <FaCalendarAlt size={30} />
              DIA DA CHEGADA
            </h3>
            <Calendar />

            <h3>
              <FiClock size={30} />
              INÍCIO DA MANOBRA
            </h3>
            <input type="text" />

            <h3>
              <FiClock size={30} />
              FIM DA MANOBRA
            </h3>
            <input type="text" />

            <h3>
              <IoIosPerson size={30} />
              PRATICO A BORDO
            </h3>
            <input type="text" />

            <h3>MATRICULA</h3>
            <input type="text" />
          </ColumnData>

          <ColumnData>
            <InfoLocation>
              <h1>Informações do local</h1>
            </InfoLocation>

            <p>
              Lembramos que esta é uma simulação baseada em bários dados, como
              clima, tipo de navio, peso, entre outros. Caso haja alguma
              variação de dados, refaça a simulação.
            </p>

            <button onClick={() => history.push('newmaneuver/confirmation')}>
              SIMULAR
            </button>
          </ColumnData>
        </Form>
      </Content>
    </Container>
  );
};

export default ManeuverRegister;
