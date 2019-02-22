import React from 'react'
import Icon from '@mdi/react'
import { mdiLinkedinBox, mdiGmail, mdiGithubBox, } from '@mdi/js'

const links = {
  linkedin: {
    url: 'https://www.linkedin.com/in/ben-in-pdx/',
    icon: {mdiLinkedinBox}
  },
  github: {
    url: 'https://github.com/ben-kirby',
    icon: {mdiGithubBox}
  },
  email: {
    url: 'mailto:benkrby@gmail.com',
    icon: {mdiGmail}
  },
  resume: {
    url: '',
    icon: <Icon path='mdiInformationVariant'/>
  }
}

function FooterLinks(){
  return (
    links 
  )
}

export default FooterLinks