import React, { Component } from 'react';
import About from '../images/about.svg';
import  './Loader.css';

export default class Nav2 extends Component {
  render() {
    return (
       <div>
       <div id="fab2" className="fab2"><a href="/about">
       <img src={About} alt="about"/>
       </a></div>
       </div>
    );
  }
}





