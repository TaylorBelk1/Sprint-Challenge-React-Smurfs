import React, { Component } from 'react';

import Smurf from './Smurf';

//props from app.js
// deleteSmurf={this.deleteSmurf}
//smurfs={this.state.smurfs}

class Smurfs extends Component {
  render() {
    return (
      <div>
        <h1 className="title">Smurf Village</h1>
        <ul className="Smurfs">
          {this.props.smurfs.map(smurf => {
            return (
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
                deleteSmurf={this.props.deleteSmurf}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
 smurfs: [],
};

export default Smurfs;
