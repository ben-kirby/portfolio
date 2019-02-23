import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import profile from '../../assets/images/profile.jpeg'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

const styles = {
  image: styled.img`
    height: 50px;
    width: 50px;
    margin: 10px 0px 4px 10px;
    border: 0px solid black;
    border-radius: 5rem;
  `,
  navbar: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  buttons: styled.div`
    margin-rxight: 10px;
  `,
}

function Nav() {
  return (
    <div>
      <AppBar position="fixed" style={{ background: 'rgba(69, 69, 69, 0.25)', boxShadow: 'none' }}>
        <styles.navbar>
          <div>
            <Link to='/#'>
              <styles.image src={profile} />
            </Link>
          </div>
          <styles.buttons>
            <Button component={Link} to="/work">Work</Button>
            <Button component={Link} to="/about">About</Button>
          </styles.buttons>
        </styles.navbar>
      </AppBar>
    </div>
  )
}

export default Nav
