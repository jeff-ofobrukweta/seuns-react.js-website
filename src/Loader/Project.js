import React, { Component } from 'react';
import Home from '../images/home.svg';
import  './Loader.css';

class Nav4 extends Component {
  render() {
    return (
       <div>
       <div id="fab4" className="fab2"><a href="/">
       <img src={Home} alt="home"/>
       </a></div>
       </div>
    );
  }
}

export default Nav4;



