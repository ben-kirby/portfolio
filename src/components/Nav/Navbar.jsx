import React from 'react'
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
      <AppBar position="static" style={{ background: 'rgba(69, 69, 69, 0.25)', boxShadow: 'none' }}>

        <div style={styles.navbar}>
          <img style={styles.image} src={profile} />
          <div style={styles.buttons}>
            <Button>Work</Button>
            <Button>About</Button>
          </div>
        </div>
      </AppBar>
    </div>
  )
}

export default Nav
