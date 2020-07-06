import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  nav {
    width: 350px;
    height: 100vh;
    display: flex;
    flex-direction: column;

    background: #0a0a0a;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 100px;
      text-decoration: none;
      color: #fff;

      font-size: 25px;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }

      svg {
        margin-right: 15px;
      }
    }

    button {
      width: 100%;
      border: 0;
      background: #e94040;
      color: #fff;
      height: 100px;

      font-size: 25px;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        color: #fff;
        margin-right: 15px;
      }

      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#e94040')};
      }
    }
  }
`;

export const AvatarProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 10px;

  color: #fff;

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  strong {
    margin-left: 15px;
    font-size: 20px;
  }
`;
