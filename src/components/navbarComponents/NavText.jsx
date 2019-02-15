import React from 'react'
import {NavItem} from 'react-materialize'
import { Link } from 'react-router-dom'


const styles = {
  links: {
    marginRight: '10px',
  }
}

function NavText(){
  return (
    <div>
      <NavItem>
        <Link to="/work">Work</Link>
      </NavItem>

      <NavItem>
        <Link to='/about'>About</Link>
      </NavItem>
    </div>
  )
}

export default NavText
