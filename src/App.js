import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar'
import {Footer} from './components/Footer'
import {Home} from './pages/Home'
import {Profile} from './pages/Profile'
import {Search} from './pages/Search'
import {GameShow} from './pages/GameShow'
import {NotFound} from './pages/NotFound'
import {Switch, Route} from 'react-router-dom'
import firebase from 'firebase'


var firebaseConfig = {
  apiKey: "AIzaSyAuEDjy8XGfvdNtzo1O99CmiQLKE80ZFbA",
  authDomain: "react-gamerep.firebaseapp.com",
  databaseURL: "https://react-gamerep.firebaseio.com",
  projectId: "react-gamerep",
  storageBucket: "react-gamerep.appspot.com",
  messagingSenderId: "405828588992",
  appId: "1:405828588992:web:ec479766fdaee2e1562425",
  measurementId: "G-GLRDDNFED9"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function App() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/home' component={Home}/>
        <Route path='/search' component={Search}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/game/show/:id' component={GameShow}/>
        <Route component={NotFound}/>
      </Switch>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
