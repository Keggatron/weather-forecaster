import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Search from './Search';

function Header() {
  return (
    <Navbar className='navigation'>
      <Navbar.Header>
        <Navbar.Brand>
          <h1>Clever Title</h1>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem>
          <Search />
        </NavItem>
      </Nav>      
    </Navbar>
  )
}


export default Header;
