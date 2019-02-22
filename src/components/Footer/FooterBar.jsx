import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Icon from '@mdi/react'
import { mdiLinkedinBox, mdiGmail, mdiGithubBox, mdiInformationVariant } from '@mdi/js'
import { v4 } from 'uuid';

import profile from '../../assets/images/profile.jpeg'
import FooterLinks from './footerComponents/FooterLinks'

const links = [
  {
    url: 'https://www.linkedin.com/in/ben-in-pdx/',
    icon: { mdiLinkedinBox },
    id: v4()
  },
  {
    url: 'https://github.com/ben-kirby',
    icon: { mdiGithubBox },
    id: v4()
  },
  {
    url: 'mailto:benkrby@gmail.com',
    icon: { mdiGmail },
    id: v4()
  },
  {
    url: '',
    icon: { mdiInformationVariant },
    id: v4()
  }
]



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
              <Icon
                path={link.icon}
                key={link.id} />
            )}

            <Icon path={mdiGithubBox}/>
          </div>
        </div>
      </AppBar>
    </div>
  )
}

export default FooterBar