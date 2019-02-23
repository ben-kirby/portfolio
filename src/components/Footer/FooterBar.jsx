import React from 'react'
import Icon from '@mdi/react'
import { mdiReact, mdiLinkedinBox, mdiGmail, mdiGithubBox, mdiInformationVariant } from '@mdi/js'
import styled from 'styled-components'
import profile from '../../assets/images/profile.jpeg'

const styles = {
  content: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2), 0 -6px 20px 0 rgba(0, 0, 0, 0.19);
    background: rgba(18, 37, 37, 1);
    padding: 10px 10% 10px 10%;
  `,

  image: styled.img`
      height: 100px;
      width: 100px;
      margin: 10px 0px 10px 10px;
      border: ;0px solid black;
      border-radius: 5rem;
    `,
  iconArrangement: styled.div`
    display: flex;
    `,
  info: styled.p`
    color: #576C6C;
    font-size: 25px;  `,
  infoDisplay: styled.div`
    display: flex;
    align-items: center;
  `,
  icon: {
    height: '64px',
    fill: '#BD5252'
  },
  infoIcon: {
    height: '35px',
    fill: '#576C6C',
  },
}

const links = {
  linkedin: 'https://www.linkedin.com/in/ben-in-pdx/',
  github: 'https://github.com/ben-kirby',
  mail: 'mailto:benkrby@gmail.com',
  resume: ''
}

function FooterBar() {
  return (
    <styles.content>

      <styles.iconArrangement>
        <a href={links.linkedin}>
          <Icon style={styles.icon} path={mdiLinkedinBox} />
        </a>
        <a href={links.github}>
          <Icon style={styles.icon} path={mdiGithubBox} />
        </a>
        <a href={links.mail}>
          <Icon style={styles.icon} path={mdiGmail} />
        </a>
        <a href={links.resume}>
          <Icon style={styles.icon} path={mdiInformationVariant} />
        </a>
      </styles.iconArrangement>

      <styles.infoDisplay>
        <styles.info>made with </styles.info>
        <Icon style={styles.infoIcon} path={mdiReact} />
      </styles.infoDisplay>

      <div>
        <styles.image src={profile}></styles.image>
      </div>


    </styles.content>
  )
}

export default FooterBar