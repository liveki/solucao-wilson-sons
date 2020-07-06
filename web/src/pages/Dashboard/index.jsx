import React from 'react';
import {
  Container,
  ManeuversContainer,
  ManeuverList,
  WeatherContainer,
  PendingManeuvers,
  DoneManeuvers,
  CardHeader,
  WeatherContent,
  MapContainer,
} from './styles';

import SideBar from '../../components/SideBar';
import mapImg from '../../assets/map.png';

const Dashboard = () => {
  return (
    <Container>
      <SideBar />
      <ManeuversContainer>
        <CardHeader type="maneuver-pending">MANOBRAS PENDENTES</CardHeader>
        <ManeuverList>
          <PendingManeuvers>
            <strong>Manobra #0102</strong>
            <button>
              Status: <strong>PENDENTE</strong>
            </button>
          </PendingManeuvers>

          <PendingManeuvers>
            <strong>Manobra #4325</strong>
            <button>
              Status: <strong>PENDENTE</strong>
            </button>
          </PendingManeuvers>

          <PendingManeuvers>
            <strong>Manobra #3653</strong>
            <button>
              Status: <strong>PENDENTE</strong>
            </button>
          </PendingManeuvers>

          <PendingManeuvers>
            <strong>Manobra #9688</strong>
            <button>
              Status: <strong>PENDENTE</strong>
            </button>
          </PendingManeuvers>

          <PendingManeuvers>
            <strong>Manobra #0102</strong>
            <button>
              Status: <strong>PENDENTE</strong>
            </button>
          </PendingManeuvers>

          <button>Visualizar mais</button>
        </ManeuverList>
      </ManeuversContainer>

      <ManeuversContainer>
        <CardHeader type="maneuver-done">MANOBRAS COMPLETAS</CardHeader>
        <ManeuverList>
          <DoneManeuvers>
            <strong>Manobra #5435</strong>
            <button>
              Status: <strong>COMPLETA</strong>
            </button>
          </DoneManeuvers>

          <DoneManeuvers>
            <strong>Manobra #5435</strong>
            <button>
              Status: <strong>COMPLETA</strong>
            </button>
          </DoneManeuvers>

          <DoneManeuvers>
            <strong>Manobra #5435</strong>
            <button>
              Status: <strong>COMPLETA</strong>
            </button>
          </DoneManeuvers>

          <DoneManeuvers>
            <strong>Manobra #5435</strong>
            <button>
              Status: <strong>COMPLETA</strong>
            </button>
          </DoneManeuvers>

          <DoneManeuvers>
            <strong>Manobra #5435</strong>
            <button>
              Status: <strong>COMPLETA</strong>
            </button>
          </DoneManeuvers>

          <button>Visualizar mais</button>
        </ManeuverList>
      </ManeuversContainer>

      <WeatherContainer>
        <CardHeader type="weather">Condições climáticas</CardHeader>
        <WeatherContent>
          <p>Latitude: 50° N (norte)</p>
          <p>Longitude: -100° ou 100°W (oeste)</p>
          <p>Vento: 2.60 km/h 1 nós</p>
          <p>Temperatura: 20°C</p>
        </WeatherContent>

        <MapContainer>
          <img src={mapImg} alt="map" />
        </MapContainer>
      </WeatherContainer>
    </Container>
  );
};

export default Dashboard;
