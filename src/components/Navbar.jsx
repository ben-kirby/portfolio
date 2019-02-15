import React from 'react'
import {Navbar} from 'react-materialize'

import NavText from './navbarComponents/NavText'
import icon from '../assets/images/test-icon.png'

const styles = {
  image: {
    height: '44px',
    width: '44px',
    margin: '10px 0px 0px 10px',
    border: '0px solid black',
    borderRadius: '5rem'
  },
  navbar: {
    backgroundColor: 'purple'
  }
}

function Nav() {
  return (
    <div>
      <Navbar style={styles.navbar} brand={<img style={styles.image} src={icon}/>} right>
        <NavText/>
      </Navbar>
    </div>
  )
}

export default Nav
