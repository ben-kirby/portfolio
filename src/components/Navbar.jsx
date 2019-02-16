import React from 'react'
import {Navbar} from 'react-materialize'

import NavText from './navbarComponents/NavText'
import avi from '../assets/images/profile.jpeg'

const styles = {
  image: {
    height: '44px',
    width: '44px',
    margin: '10px 0px 0px 10px',
    border: '0px solid black',
    borderRadius: '5rem'
  },
  navbar: {
    backgroundColor: 'grey',
    boxShadow: '0px 10px 150px 50px black'
  }
}

function Nav() {
  return (
    <div>
      <Navbar style={styles.navbar} brand={<img style={styles.image} src={avi}/>} right>
        <NavText/>
      </Navbar>
    </div>
  )
}

export default Nav
