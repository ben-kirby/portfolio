import React from 'react'
import Main from './Main'
import Nav from './Navbar'
import About from './About'
import { Switch, Route} from 'react-router-dom'
import testimage from '../assets/images/test-jpg.jpg'

function App(){
  return (
    <div>
      <Nav/>
      <img src={testimage}/>
      <Switch>
        <Route exact path='/' component={Main} />
        <Route exact path='/about' component={About} />
      </Switch>
    </div>
  )
}

export default App
