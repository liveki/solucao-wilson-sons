import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  button {
    width: 300px;
  }
`;

export const ManeuversContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 100vh;
`;

export const PendingManeuvers = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;

  > strong {
    font-size: 25px;
  }

  button {
    margin-top: 15px;

    border: 0;

    font-size: 23px;
    background: #e94040;
    color: #fff;
    padding: 12px 10px;
    border-radius: 5px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#e94040')};
    }
  }
`;

export const DoneManeuvers = styled.div`
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 50px;

  > strong {
    font-size: 25px;
  }

  button {
    margin-top: 15px;

    border: 0;

    background: #0a981d;
    color: #fff;
    padding: 12px 10px;
    border-radius: 5px;

    font-size: 23px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#0a981d')};
    }
  }
`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;

  color: #fff;
  font-size: 25px;

  ${props =>
    props.type === 'maneuver-pending' &&
    css`
      background: #e94040;
    `};

  ${props =>
    props.type === 'maneuver-done' &&
    css`
      background: #0a981d;
    `};

  ${props =>
    props.type === 'weather' &&
    css`
      background: #109fcc;
    `};
`;

export const WeatherContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding-bottom: 15px;

  header {
  }
`;

export const ManeuverList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > button {
    margin: 100px 0 50px 0;

    border: 0;

    background: #0a5698;
    color: #fff;
    padding: 12px 10px;
    border-radius: 5px;

    font-size: 23px;

    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#0a5698')};
    }
  }

  overflow: scroll;
`;

export const WeatherContent = styled.div`
  font-size: 25px;

  display: flex;
  flex-direction: column;

  margin: 30px 0 0 30px;
`;

export const MapContainer = styled.div`
  padding: 0 10px;
  img {
    width: 100%;
  }
`;
