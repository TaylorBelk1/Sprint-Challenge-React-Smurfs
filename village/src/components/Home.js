import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
    render(){
        return(
            <div className="home">
                <button> <Link to="/smurfs"> Enter the Smurf Village </Link> </button>
            </div>
        )
    }
}

export default Home