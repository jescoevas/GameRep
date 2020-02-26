import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Home} from './pages/Home'
import {Info} from './pages/Info'
import {Search} from './pages/Search'
import {GameShow} from './pages/GameShow'
import {DeveloperShow} from './pages/DeveloperShow'
import {NotFound} from './pages/NotFound'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/search' component={Search}/>
        <Route path='/info' component={Info}/>
        <Route path='/game/show/:id' component={GameShow}/>
        <Route path='/developer/show/:id' component={DeveloperShow}/>
        <Route component={NotFound}/>
      </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
