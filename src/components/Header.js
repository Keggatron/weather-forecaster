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
      <div className='row'>
        <Search path='/'/>
      </div>  
    </Navbar>


  )
}


export default Header;
