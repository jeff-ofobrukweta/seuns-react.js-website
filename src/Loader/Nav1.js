import React, { Component } from 'react';
import Service from '../images/services.svg';
import  './Loader.css';

class Nav1 extends Component {
  render() {
    return (
       <div>
       <div id="fab1" className="fab2"><a href='/services'>
       <img src={Service} alt="serve" style={{position:'absolute',top: '10px',left: '-10px'}}/>
       </a></div>
       </div>
    );
  }
}

export default Nav1;



