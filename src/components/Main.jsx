import React, { Component } from 'react'
import HeroImage from './mainComponents/HeroImage'
import MainContent from './mainComponents/MainContent'
import Icon from '@mdi/react'
import { linkedin } from '@mdi/js'


function Main() {
  return(
    <div>
      <HeroImage/>
      <MainContent/>
      <Icon path={linkedin}/>
    </div>

  )
}

export default Main
