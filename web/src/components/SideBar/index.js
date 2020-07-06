import React from 'react';
import { Link } from 'react-router-dom';
import { FaPen, FaClipboardList } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { GoSignOut } from 'react-icons/go';
import { Container, AvatarProfile } from './styles';

import { useAuth } from '../../hooks/auth';

import avatarImg from '../../assets/avatar.png';

const SideBar = () => {
  const { signOut } = useAuth();

  return (
    <Container>
      <nav>
        <AvatarProfile>
          <img src={avatarImg} alt="avatar" />
          <strong>José Honorato</strong>
        </AvatarProfile>
        <Link to="/dashboard" style={{ background: '#109fcc' }}>
          Home
        </Link>

        <Link to="/newmaneuver" style={{ background: '#069c5f' }}>
          <FaPen size={30} />
          Cadastrar Manobra
        </Link>
        <a href="" style={{ background: '#7e4104' }}>
          <FaClipboardList size={30} />
          Últimos Relatórios
        </a>
        <a href="" style={{ background: '#3b3b3b' }}>
          <IoMdSettings size={30} />
          Configurações
        </a>

        <button onClick={signOut}>
          <GoSignOut size={30} />
          Sair
        </button>
      </nav>
    </Container>
  );
};

export default SideBar;
