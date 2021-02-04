import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
  return(
    <Container>

        <img src={Logo} alt=""/>
        <ul>
            <li>
              <Link to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/films">
                Filmes
              </Link>
            </li>
        </ul>
    </Container>
  );
}

export default Header;