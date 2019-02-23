import React from 'react'
import MainContent from './mainComponents/MainContent'
import HeroImage from './mainComponents/HeroImage'
import styled from 'styled-components'

const styles = {
  hero: styled.div`
    position: relative;
    margin-top: -64px;
    z-index: 1;
  `,
}

function Main() {
  return (
    <div>
      <styles.hero>
        <HeroImage />
      </styles.hero>
      <MainContent />
    </div>
  )
}

export default Main
