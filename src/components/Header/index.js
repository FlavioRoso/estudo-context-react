import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

function Header(props) {
  return (
      <header {...props} >
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/contato">Contato</Link></li>
          </ul>
      </header>
  );
}

export default Header;