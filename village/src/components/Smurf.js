import React from 'react';


// passed as props from Smurfs.js
// name={smurf.name}
// id={smurf.id}
// age={smurf.age}
// height={smurf.height}
// key={smurf.id}
//deleteSmurf={props.deleteSmurf}



class Smurf extends React.Component {

  delete = (id) => {
    this.props.deleteSmurf(id)
  }

  render() {
  return (
    <div className="Smurf">
      <h3>
        <span onClick={() => this.delete(this.props.id)}>
          <img src="https://img.icons8.com/ios/25/000000/cancel.png" />
        </span>
          {this.props.name}
      </h3>
      <strong>{this.props.height} tall</strong>
      <p>{this.props.age} smurf years old</p>
    </div>
  );
  }
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

