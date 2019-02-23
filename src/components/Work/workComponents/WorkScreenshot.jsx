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

  `,
  mobileImage: styled.img`
  order: 1;
  border-radius: .25rem;
  height: 30%;
  width: 30%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
  z-index: 1;
  margin-left: 10%;
  `,
  desktopImage: styled.img`
  order: 2;
  border-radius: .25rem;
  height: 70%;
  width: 70%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  position: relative;
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