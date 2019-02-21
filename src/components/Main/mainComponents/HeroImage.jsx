import React from 'react'
import Hero from '../../../assets/images/hero-temp.jpg'
import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Hero});
    width: 100%;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  `;



const styles = {
  heroText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    color: 'white',
    textShadow: '0px 0px 150px black',
    fontFamily: 'Over the Rainbow',
    fontSize: '150px',
    fontWeight: 'bolder',
    margin: '0px'
  },
  subheader: {
    color: 'white',
    textShadow: '0px 0px 150px black',
    fontFamily: 'Over the Rainbow',
    fontSize: '35px',
  },
  hero: {
    backgroundImage: 'url(${Hero})',
    width: '100%',
    maxheight: '600px',
    overflow: 'hidden',
    margin: 'auto',
  },


}

function HeroImage() {
  return (
    <div>
      <Content>
        <div style={styles.heroText}>
          <p style={styles.header}>I'm Ben</p>
          <p style={styles.subheader}>a web developer</p>
        </div>

      </Content>
      <div>
      </div>
    </div>
  )
}

export default HeroImage
