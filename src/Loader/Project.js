import React, { Component } from 'react';
import Boxes from '../images/boxes.svg';
import  './Loader.css';

class Nav4 extends Component {
  render() {
    return (
       <div>
       <div id="fab4" className="fab2"><a href="/work">
       <img src={Boxes} alt="box"/>
       </a></div>
       </div>
    );
  }
}

export default Nav4;



