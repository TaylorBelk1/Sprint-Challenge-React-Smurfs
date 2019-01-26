import React, { Component } from 'react';


//passed as props from app.js
//smurfs={this.state.smurfs} addNewSmurfs={this.addNewSmurfs}

class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: '',
      height: ''
    };
  }

  addSmurf = (smurf) => {
    console.log("I was submitted!")
    this.props.addNewSmurfs(smurf)
    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
          <input
            className="input"
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            className="input"
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            className="input"
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button className="button" onClick={() => this.addSmurf(this.state)}>Add to the village</button>
      </div>
    );
  }
}

export default SmurfForm;
