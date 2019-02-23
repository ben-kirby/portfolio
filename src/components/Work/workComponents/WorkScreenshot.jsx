import React from 'react'

import styled from 'styled-components'

import Icon from '@mdi/react'
import { mdiDesktopMac } from '@mdi/js'
import testDesktop from '../../../assets/images/hero-temp.jpg'
import testMobile from '../../../assets/images/mobile.jpeg'

const styles = {
  content: styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  `,
  mobileImage: styled.img`
  order: 1;
  border-radius: .25rem;
  height: 20%;
  width: 20%;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2), 0px 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  z-index: 1;
  `,
  desktopImage: styled.img`
  order: 2;
  border-radius: .25rem;
  height: 60%;
  width: 60%;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: inherit;
  margin-left: -5%;
  z-index: 0;

  `,
  
}

function WorkScreenshot() {
  return(
    <styles.content>
      <styles.mobileImage src={testMobile}/>
      <styles.desktopImage src={testDesktop}/>
    </styles.content>
  )
}

export default WorkScreenshot