import React from 'react'
import HeroText from './herocomponents/HeroText'
import HeroImage from './herocomponents/HeroImage'

function Hero(){
  return (
    <div>
      <h1>Hero rendering</h1>
      <HeroText/>
      <HeroImage/>
    </div>
  )
}

export default Hero
