import React from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import App from './App'
import Navb from './component/Navb'
import About from './component/About'
import Home from './component/Home'
import { Route } from 'react-router-dom'
import MovieDetail from './component/MovieDetail'
import Footer from './component/Footer'


const NewApp = () => {
    return (
        <Switch>
        <div>
     <Navb />
  <Route exact path='/' component ={Home} />
  <Route exact path='/app' component ={App} />
  <Route  path='/about' component ={About} />
  <Route path='/app/:id' component ={MovieDetail} />

  <Footer />
        </div>
        </Switch>
    )
}

export default NewApp
