import React, { Component } from 'react';
import Menu from '../images/if_Menu2_1031510.svg';
import  './Loader.css';

class Loader extends Component {
handletooglefloat =(event) =>{
    event.preventDefault();
    const hamburgerElement = document.getElementById("fab");
    hamburgerElement.addEventListener('click',(event)=>{
     let mobileMenu = document.getElementsByClassName('fab2');

        mobileMenu[0].classList.toggle('fab1-time');
        mobileMenu[1].classList.toggle('fab2-time');
        mobileMenu[2].classList.toggle('fab3-time');
        mobileMenu[3].classList.toggle('fab4-time');
  })
  }
  render() {
    return (
       <div onClick={this.handletooglefloat}>
       <div id="fab" className="parent-fab2"><a href="#form">
          <img src={Menu} alt="menu"/>
       </a></div>
       </div>
    );
  }
}

export default Loader;



