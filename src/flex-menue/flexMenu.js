import React, { Component } from 'react';
import './flexMenu.css';

class flexMenu extends Component {
  constructor(props){
    super(props);
    this.state ={
        isToggleOn:false,
        active:true
    }
    this.handleClicktoogle = this.handleClicktoogle.bind(this);
    this.handleClicktooglenavtransition = this.handleClicktooglenavtransition.bind(this);
}
handleClicktooglenavtransition=(e)=>{
  e.preventDefault();
  this.setState(prevState => ({
      active: !prevState.active
    }));
}

handleClicktoogle=(e)=>{
    e.preventDefault();
    this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
}
  render() {
    const Active =[];
    const burgerSign = [];
    const Show =[];
    const biggerBurger=[];
          if(this.state.isToggleOn==false){
            Active.push('');
            burgerSign.push('fa fa-bars fa-1x');
          }else
          {
            Active.push('active');
             burgerSign.push('fa fa-close fa-1x');
          }
          if(this.state.active==false){
            Show.push('');
            biggerBurger.push('fa fa-bars fa-1x');
          }else
          {
            Show.push('active');
            biggerBurger.push('fa fa-close fa-1x');
          }
    return (
        <div>
            <header className="header-nav" id="header">
                <div className="logo">Logo</div>
                <nav className={Active} id="nav">
                  <ul id="ul">
                    <li id="li"><a id="a" href="/" className="active"><b>Home</b></a></li>
                    <li id="li"><a id="a" href="/about"><b>About</b></a></li>
                    <li id="li"><a id="a" href="/services"><b>Services</b></a></li>
                    <li id="li"><a id="a" href="/about"><b>Team</b></a></li>
                    <li id="li"><a id="a" href="/work"><b>Portfolio</b></a></li>
                    <li id="li"><span id="a" href="#" onClick={this.handleClicktooglenavtransition} ><i className={biggerBurger}></i></span></li>
                  </ul>
                </nav>
                <div className="menu-toggle" onClick={this.handleClicktoogle}><i className={burgerSign}></i></div> 
            </header>
        </div>
    );
  }
}

export default flexMenu;
 