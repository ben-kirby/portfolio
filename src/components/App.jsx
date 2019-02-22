import React from 'react'
import Main from './Main/Main'
import About from './About/About'
import Work from './Work/Work'
import FooterBar from './Footer/FooterBar.jsx'
import { Switch, Route } from 'react-router-dom'
import Nav from './Nav/Navbar'

const styles = {
  nav: {
    position: 'relative',
    zIndex: '100',
  },
  content: {

    position: 'relative',
    marginTop: '-64px',
    padding: '0px 10% 0px 10%',
    zIndex: '1',

  }
}

function App() {
  return (
    <div>
      <div style={styles.nav}>
        <Nav />
      </div>
      <Switch>
        <div>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
          <Route exact path='/work' component={Work} />
          <FooterBar />
        </div>
      </Switch>
    </div>
  )
}

export default App
