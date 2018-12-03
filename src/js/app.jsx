import React, { Component } from 'react';
import { 
  HashRouter as Router, 
  Route 
} from 'react-router-dom';

// import Home from './Components/Home'
import CheckIn from './Components/CheckIn'

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='container'> 
          <Route exact path='/' component={ CheckIn } />
        </div>
      </Router>
    )
  }
}
