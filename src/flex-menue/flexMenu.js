import React, { Component } from 'react';
import Smallnavbar from '../Naviconbar/Naviconbar';
import './flexMenu.css';

class flexMenu extends Component {
  constructor(props){
    super(props);
    this.state ={
        isToggleOn:false,
        active:true
    }
    this.handleClicktoogle = this.handleClicktoogle.bind(this);
    this.handleMenuToogle = this.handleMenuToogle.bind(this);
    this.handleClicktooglenavtransition = this.handleClicktooglenavtransition.bind(this);
}
handleClicktooglenavtransition=(e)=>{
  e.preventDefault();
  this.setState(prevState => ({
      active: !prevState.active
    }));
}
handleMenuToogle=()=>{
  const hamburgerElement = document.getElementById("ul");
  const menuToogle = document.getElementById("menu-toogle-1-id");
  const hamburger = document.getElementById("2")
  menuToogle.classList.toggle("toggle-active");
  hamburger.classList.toggle("hambuger-active");
  hamburgerElement.classList.toggle("nav-active");
}
handleClicktoogle=(e)=>{
    e.preventDefault();
    this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
}
  render() {
    return (
        <div>
            <header className="header-nav" id="header">
                <div className="logo"><input type="submit" value="Metronome" style={{height: '30px',width: '110px',border: '0px',outline:' none',color:'#ffffff',background: '#232323',fontWeight:700}}/></div>
                <nav id="nav" className="nav">
                  <ul id="ul" className="idle-ul">
                    <li id="li"><a id="a" href="/about" className="active">ABOUT US</a></li>
                    <li id="li"><a id="a" href="/services">SERVICES</a></li>
                    <li id="li"><a id="a" href="/work">PROJECTS</a></li>
                    <li id="li"><a id="a" href="/">CONTACT US</a></li>
                  </ul>
                  <span className="menu-toogle-1" data-reactid='1' id="menu-toogle-1-id" onClick={this.handleMenuToogle}>
                    <i className="hamburger-bars"  id="2"></i>
                  </span>
                </nav>    
            </header>
        </div>
    );
  }
}

export default flexMenu;
 