import React from 'react'
import Main from './Main/Main'
import About from './About/About'
import Work from './Work/Work'
import FooterBar from './Footer/FooterBar.jsx'
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav/Navbar'
import styled from 'styled-components'

const styles = {
  footerWrapper: styled.div`
    min-height: 100%;
    height: auto !important;
    height: 100%;
    margin: 0 auto -155px;
  `,
  nav: styled.div`
    position: relative;
    z-index: 100;
  `
}

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <styles.nav>
          <Nav />
        </styles.nav>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
        </Switch>
        <styles.footerWrapper>
          <FooterBar style={styles.footer} />
        </styles.footerWrapper>
      </div>
    )
  }
}

export default App
