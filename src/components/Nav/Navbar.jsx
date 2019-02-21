import React from 'react'
import NavLinks from './navbarComponents/NavLinks'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { withStyles } from '@material-ui/core/styles';

import NavText from './navbarComponents/NavText'
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
}

function Nav() {
  return (
    <div>
      <AppBar position="static" color="default">

        <div style={styles.navbar}>
          <img style={styles.image} src={profile} />
          <div>
            <Button>Work</Button>
            <Button>About</Button>
          </div>
        </div>
      </AppBar>
    </div>
  )
}

export default Nav
