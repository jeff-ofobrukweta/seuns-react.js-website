import React, { Component } from 'react';
import Menu from '../images/if_Menu2_1031510.svg';
import  './Loader.css';

class Loader extends Component {
  handletooglefloat =(event) =>{
    event.preventDefault();
    const hamburgerElement = document.getElementById("fab");
    hamburgerElement.addEventListener('click', (event)=>{
     let mobileMenu = document.getElementsByClassName('fab2');
      for(let i =0; i < mobileMenu.length; i++){
        mobileMenu[i].classList.toggle('mobile-toogle-active');
      }
  })
  }
  render() {
    return (
       <div>
       <div id="fab" className="parent-fab2"  onClick={this.handletooglefloat}><a href="#form">
          <img src={Menu} alt="menu"/>
       </a></div>
       </div>
    );
  }
}

export default Loader;



