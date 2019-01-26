import React from 'react';


// passed as props from Smurfs.js
// name={smurf.name}
// id={smurf.id}
// age={smurf.age}
// height={smurf.height}
// key={smurf.id}

const Smurf = props => {
  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

