import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import profile from '../../assets/images/profile.jpeg'
import Icon from '@mdi/react'
import { mdiLinkedinBox, mdiGmail, mdiGithubBox, mdiInformationVariant } from '@mdi/js'
import FooterLinks from './footerComponents/FooterLinks'
import { v4 } from 'uuid';

const links = {
  linkedin: {
    url: 'https://www.linkedin.com/in/ben-in-pdx/',
    icon: { mdiLinkedinBox }
  },
  github: {
    url: 'https://github.com/ben-kirby',
    icon: { mdiGithubBox }
  },
  email: {
    url: 'mailto:benkrby@gmail.com',
    icon: { mdiGmail }
  },
  resume: {
    url: '',
    icon: { mdiInformationVariant }
  }
}


const styles = {
  image: {
    height: '44px',
    width: '44px',
    margin: '10px 0px 10px 10px',
    border: '0px solid black',
    borderRadius: '5rem',
  },
  linkTag: {
    height: '64px',
    fill: 'red'
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

function FooterBar() {
  return (
    <div>
      <AppBar position="static" style={{ background: 'rgba(69, 69, 69, 0.25)', boxShadow: 'none' }}>

        <div style={styles.navbar}>
          <img style={styles.image} src={profile} />
          <div style={styles.buttons}>
            {links.map((link) =>
              <FooterLinks
                icon={link.icon}
                url={link.url}


            )}


            <Button component={Link} to="/work">Work</Button>
            <Button component={Link} to="/about">About</Button>
          </div>
        </div>
      </AppBar>
    </div>
  )
}

export default FooterBar