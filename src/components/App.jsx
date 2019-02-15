import React from 'react'
import Main from './Main'
import Nav from './Navbar'
import About from './About'
import { Switch, Route} from 'react-router-dom'

function App(){
  return (
    <div>
      <Nav/>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  )
}

export default App
