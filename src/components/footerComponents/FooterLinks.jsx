import React from 'react'
import Icon from '@mdi/react'
import {mdiLinkedin} from '@mdi/js'

const links = [
  {
    title: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ben-in-pdx/',
    icon: <Icon path={mdiLinkedin}/>
  },
  {
    title: 'GitHub',
    url: 'https://github.com/ben-kirby',
    icon: <Icon path='mdiGithubBox'/>
  },
  {
    title: 'Email',
    url: 'mailto:benkrby@gmail.com',
    icon: <Icon path='gmail'/>
  },
  {
    title: 'Resume',
    url: '',
    icon: <Icon path='mdiInformationVariant'/>
  }
]

function FooterLinks(){
  return (
    links 
  )
}

export default FooterLinks