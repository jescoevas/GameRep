import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Home} from './pages/Home'
import {Info} from './pages/Info'
import {Search} from './pages/Search'
import {NotFound} from './pages/NotFound'
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/search' component={Search}/>
        <Route path='/info' component={Info}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
