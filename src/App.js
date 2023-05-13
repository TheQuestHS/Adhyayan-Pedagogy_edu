import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Homepg from './components/pages/MainHome/Homepg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import alphabets from './components/pages/MainHome/alphabets';
import Maths from './components/pages/MainHome/Maths';
import English from './components/pages/MainHome/English';
import Profile from './components/pages/MainHome/Profile';
import AboutUs from './components/pages/MainHome/AboutUs';
import {useState} from "react"
import MemMap from './components/pages/MainHome/MemMap';
import colors from './components/pages/MainHome/colors';
import anatomy from './components/pages/MainHome/anatomy';
import animals from './components/pages/MainHome/animals';


function App() {
  const[user]=useState({})
  return (
    <Router>
      
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/sign-in' component={SignIn}/>
        <Route path='/homepg' component={Homepg}/>
        <Route path='/mem' component={MemMap}/>
        <Route path='/English' component={English}/>
        <Route path='/Maths' component={Maths}/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/animals' component={animals}/>
        <Route path='/about' component={AboutUs}/>
        <Route path='/colors' component={colors}/>
        <Route path='/anatomy' component={anatomy}/>
        <Route path='/alphabet' component={alphabets}/>
        <Route path='/homepage'>
          {
            user && user._id ? <Homepg/> : <SignIn/>

          }
        </Route>
        
      </Switch>
      
    </Router>

  );
}

export default App;
