import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import profile from '../../assets/images/profile.jpeg'
import Button from '@material-ui/core/Button';

const styles = {
  image: {
    height: '44px',
    width: '44px',
    margin: '10px 0px 10px 10px',
    border: '0px solid black',
    borderRadius: '5rem',
  },
  linkTag:{
    height: '64px',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttons: {
    marginRight: '10px'
  }
}

function Nav() {
  return (
    <div>
      <AppBar position="fixed" style={{ background: 'rgba(69, 69, 69, 0.25)', boxShadow: 'none' }}>

        <div style={styles.navbar}>
          <img style={styles.image} src={profile}/>
          <div style={styles.buttons}>
            <Button component={Link} to="/work">Work</Button>
            <Button component={Link} to="/about">About</Button>
          </div>
        </div>
      </AppBar>
    </div>
  )
}

export default Nav
