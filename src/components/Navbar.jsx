import React from 'react'
import {Navbar, NavItem} from 'react-materialize'

import NavLogo from './navbarComponents/NavLogo'
import NavText from './navbarComponents/NavText'

function Nav(props) {
  return (
    <div>
      <Navbar brand='Logo' left>
        <NavItem>Work</NavItem>
        <NavItem>About</NavItem>
      </Navbar>
    </div>
  )
}



export default Nav
