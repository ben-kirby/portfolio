import React from 'react'

import Icon from '@mdi/react'
import { mdiLinkedinBox, mdiGmail, mdiGithubBox, mdiInformationVariant } from '@mdi/js'
import styled from 'styled-components'

import profile from '../../assets/images/profile.jpeg'

const Content = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 -4px 8px 0 rgba(0, 0, 0, 0.2), 0 -6px 20px 0 rgba(0, 0, 0, 0.19);
    background: rgba(18, 37, 37, 1);
    padding: 10px 10% 10px 10%;
  `

const styles = {
  content: styled.div`
    display: flex;
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
    flex-direction: column;
    `,
  icon: {
    height: '64px',
    fill: '#BD5252'
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
    <Content>
      <div>
        <styles.image src={profile}></styles.image>

      </div>
      <styles.iconArrangement>
        <div>
          <a href={links.linkedin}>
            <Icon style={styles.icon} path={mdiLinkedinBox} />
          </a>
          <a href={links.github}>
            <Icon style={styles.icon} path={mdiGithubBox} />
          </a>
        </div>
        <div>
          <a href={links.mail}>
            <Icon style={styles.icon} path={mdiGmail} />
          </a>
          <a href={links.resume}>
            <Icon style={styles.icon} path={mdiInformationVariant} />
          </a>
        </div>
      </styles.iconArrangement>
    </Content>
  )
}

export default FooterBar