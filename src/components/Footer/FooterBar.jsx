import React from 'react'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Icon from '@mdi/react'
import { mdiLinkedinBox, mdiGmail, mdiGithubBox, mdiInformationVariant } from '@mdi/js'
import { v4 } from 'uuid'
import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2), 0 -6px 20px 0 rgba(0, 0, 0, 0.19);
    background: rgba(18, 37, 37, 1);
    padding: 10px 10% 10px 10%;
  `;

import profile from '../../assets/images/profile.jpeg'

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
    height: '70px',
    width: '70px',
    margin: '10px 0px 10px 10px',
    border: '0px solid black',
    borderRadius: '5rem',
  },
  icon: {
    height: '64px',
    fill: '#BD5252'
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttons: {
    marginRight: '10px'
  },
  content: {
    padding: '10px 10% 10px 10%'
  }
}

function FooterBar() {
  return (
    <Content>
      <div>
        <img style={styles.image} src={profile} />

      </div>
      <div>
        <Icon style={styles.icon} path={mdiLinkedinBox} />
        <Icon style={styles.icon} path={mdiGithubBox} />
        <Icon style={styles.icon} path={mdiGmail} />
        <Icon style={styles.icon} path={mdiInformationVariant} />

      </div>
    </Content>
  )
}

export default FooterBar