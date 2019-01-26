import React, { Component } from 'react';
import axios from 'axios'
import { Route, NavLink } from 'react-router-dom';


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(response => {
        console.log(response)
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => console.log(err))
  }

  addNewSmurfs = (smurf) => {
    axios
      .post('http://localhost:3333/smurfs', smurf)
      .then(response => {
        console.log(response)
        this.setState({
          smurfs: response.data
        })
      })
      .catch(err => { console.log(err) })

  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state)
    return (
      <div className="App">
        
            <ul className="nav">
              <li>
                <NavLink to="/">
                  Smurf Village
                </NavLink>
              </li>
              <li>
                <NavLink to="/smurf-form">
                  Add Smurf
                </NavLink>
              </li>
           </ul>

        <Route path="/smurf-form" render={() => <SmurfForm addNewSmurfs={this.addNewSmurfs} />} />
        <Route exact path="/" render={() => <Smurfs smurfs={this.state.smurfs} />} />


      </div>
    );
  }
}

export default App;
