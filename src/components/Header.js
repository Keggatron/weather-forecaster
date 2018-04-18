import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Search from './Search';

function Header() {
  return (
    <Navbar className='navigation'>
      <Navbar.Header>
        <Navbar.Brand>
          <h1>Five Day Weather Forecast</h1>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem className='header-search'>
          <div className='row'>
            <Search path='/'/>
          </div>  
        </NavItem>
      </Nav>      
    </Navbar>
  )
}


export default Header;
