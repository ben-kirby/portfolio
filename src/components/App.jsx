import React from 'react'
import Main from './Main'
import Nav from './Navbar'
import About from './About'
import FooterBar from './FooterBar.jsx'
import { Switch, Route } from 'react-router-dom'

const styles = {
  nav: {
    zIndex: '10'
  },
  content: {
    zIndex: '9'
  }
}

function App() {
  return (
    <div>
      <div style={styles.nav}>
        <Nav />
      </div>
      <div style={styles.content}>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
        </Switch>
        <FooterBar />
      </div>
    </div>
  )
}

export default App
