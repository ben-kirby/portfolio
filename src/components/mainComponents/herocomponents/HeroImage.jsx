import React from 'react';
import LazyHero from 'react-lazy-hero';

const styles = {
  header: {
    color: 'white',
    textShadow: '0px 0px 150px black',
    fontFamily: 'Helvetica',
    fontSize: '150px',
    fontWeight: 'bolder'
  },
  subheader: {
    color: 'white',
    textShadow: '0px 0px 150px black',
    fontFamily: 'Helvetica',

  }
}

function HeroImage(){
  return (
    <div>
      <LazyHero 
        color='black' 
        opacity='0.75' 
        imageSrc="https://unsplash.it/2000/1000"
        minHeight='70vh'
        isCentered='true'
        parallaxOffset='200' 
      >
        <h1 style={styles.header}>I'm Ben</h1>
        <h3 style={styles.subheader}><em>a web developer</em></h3>
      </LazyHero>
    </div>
  )
}

export default HeroImage
