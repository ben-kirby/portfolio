import React from 'react'
import Hero from '../../../assets/images/pdx.jpg'
import styled from 'styled-components'

const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${Hero});
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 100%;
    height: 700px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  `

const styles = {
  heroText: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    color: '#EDE1E1',
    textShadow: '0px 0px 150px black',
    fontFamily: 'Over the Rainbow',
    fontSize: '150px',
    fontWeight: 'bolder',
    margin: '0px'
  },
  subheader: {
    color: '#EDE1E1',
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
          <p style={styles.header}>Ben Kirby</p>
          <p style={styles.subheader}>web developer</p>
        </div>

      </Content>
      <div>
      </div>
    </div>
  )
}

export default HeroImage
